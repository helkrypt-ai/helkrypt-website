import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  let body: ContactFormData;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, company, phone, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields: name, email, message" },
      { status: 422 }
    );
  }

  // Basic email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 422 });
  }

  const paperclipApiUrl = process.env.PAPERCLIP_API_URL;
  const paperclipApiKey = process.env.PAPERCLIP_API_KEY;
  const paperclipCompanyId = process.env.PAPERCLIP_COMPANY_ID;
  const erikAgentId = process.env.PAPERCLIP_ERIK_AGENT_ID;
  const goalId = process.env.PAPERCLIP_GOAL_ID;
  const projectId = process.env.PAPERCLIP_PROJECT_ID;

  if (!paperclipApiUrl || !paperclipApiKey || !paperclipCompanyId) {
    const missing = [];
    if (!paperclipApiUrl) missing.push("PAPERCLIP_API_URL");
    if (!paperclipApiKey) missing.push("PAPERCLIP_API_KEY");
    if (!paperclipCompanyId) missing.push("PAPERCLIP_COMPANY_ID");
    console.error("Missing required Paperclip environment variables:", missing.join(", "));
    // Still return success to the customer — internal failures shouldn't surface
    return NextResponse.json({ success: true });
  }

  const shortMessage = message.length > 60 ? message.slice(0, 60) + "…" : message;
  const companyLabel = company ? company : "ukjent bedrift";
  const title = `[Kundehenvendelse] ${companyLabel} — ${shortMessage}`;

  const description = `## Ny kundehenvendelse fra nettsiden

**Navn:** ${name}
**E-post:** ${email}
**Telefon:** ${phone || "ikke oppgitt"}
**Bedrift:** ${company || "ikke oppgitt"}

### Melding

${message}

---

_Innkommet via kontaktskjema på helkrypt-website.vercel.app_

**Neste steg (Erik):**
1. Les henvendelsen og forstå hva kunden trenger
2. Identifiser hvilkt Helkrypt AI-produkt som passer best
3. Opprett subtask til Alex med MVP-spesifikasjon
4. Merk denne ticket som done når subtask er opprettet

**NB: Ikke kontakt kunden direkte. Board tar all kundekontakt.**
`;

  const issuePayload: Record<string, unknown> = {
    title,
    description,
    status: "todo",
    priority: "high",
  };

  if (erikAgentId) issuePayload.assigneeAgentId = erikAgentId;
  if (goalId) issuePayload.goalId = goalId;
  if (projectId) issuePayload.projectId = projectId;

  try {
    const response = await fetch(
      `${paperclipApiUrl}/api/companies/${paperclipCompanyId}/issues`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${paperclipApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(issuePayload),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Paperclip issue creation failed:", {
        status: response.status,
        statusText: response.statusText,
        error: errorText,
        payload: issuePayload,
      });
    } else {
      const responseData = await response.json();
      console.log("Paperclip issue created successfully:", responseData.id || responseData.identifier);
    }
  } catch (err) {
    console.error("Failed to create Paperclip issue:", {
      error: err instanceof Error ? err.message : String(err),
      stack: err instanceof Error ? err.stack : undefined,
    });
  }

  // Always return success to the customer
  return NextResponse.json({ success: true });
}
