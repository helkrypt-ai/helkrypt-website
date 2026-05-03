import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  serviceType?: string;
  website?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  let body: ContactFormData;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, company, phone, serviceType, website, message } = body;

  if (!name || !email) {
    return NextResponse.json(
      { error: "Missing required fields: name, email" },
      { status: 422 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 422 });
  }

  // Send n8n-webhook (e-postvarsel til Marius). Fire-and-forget.
  const n8nWebhookUrl = process.env.N8N_CONTACT_WEBHOOK_URL;
  if (n8nWebhookUrl) {
    (async () => {
      try {
        const n8nResponse = await fetch(n8nWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            company: company || "",
            phone: phone || "",
            serviceType: serviceType || "",
            website: website || "",
            message: message || "",
            submittedAt: new Date().toISOString(),
          }),
        });
        if (!n8nResponse.ok) {
          console.error("[N8N] Webhook returnerte ikke-OK status:", n8nResponse.status);
        } else {
          console.log("[N8N] E-postvarsel sendt OK");
        }
      } catch (err) {
        console.error("[N8N] Webhook feilet:", err instanceof Error ? err.message : String(err));
      }
    })();
  } else {
    console.warn("[N8N] N8N_CONTACT_WEBHOOK_URL ikke satt — ingen e-postvarsel sendes");
  }

  return NextResponse.json({ success: true });
}
