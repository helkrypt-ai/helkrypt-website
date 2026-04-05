import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Helkrypt AI",
  description: "Privacy Policy for Helkrypt AI products: MindBridge and SvarAI.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">H</span>
            </div>
            <span className="font-bold text-white text-base tracking-tight">
              Helkrypt<span className="text-indigo-400"> AI</span>
            </span>
          </Link>
          <Link href="/personvern" className="text-sm text-slate-400 hover:text-white transition-colors">
            Norsk versjon →
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <article className="prose-article">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
          <p className="text-slate-500 text-sm mb-2"><strong>Helkrypt AI AS</strong></p>
          <p className="text-slate-500 text-sm mb-8">Last updated: 5 April 2026</p>

          <hr className="border-slate-200 mb-8" />

          {/* Table of Contents */}
          <nav className="bg-slate-50 rounded-xl p-6 mb-10">
            <h2 className="text-base font-semibold text-slate-700 mb-3">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-1 text-sm text-indigo-600">
              {[
                "Who We Are",
                "What Data We Collect",
                "How We Use Your Data",
                "Legal Basis for Processing (GDPR)",
                "Data Sharing and Sub-Processors",
                "International Data Transfers",
                "How Long We Keep Your Data",
                "Cookies and Tracking",
                "Your Rights — EU/EEA Users (GDPR)",
                "Your Rights — California Users (CCPA)",
                "Children's Privacy",
                "Security",
                "Changes to This Policy",
                "Contact Us",
              ].map((item, i) => (
                <li key={i}>
                  <a href={`#section-${i + 1}`} className="hover:underline">{item}</a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Section 1 */}
          <Section id="section-1" title="1. Who We Are">
            <p>
              Helkrypt AI AS (&ldquo;Helkrypt AI&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is a Norwegian company providing
              AI-powered automation products, including <strong>MindBridge</strong> and <strong>SvarAI</strong>.
            </p>
            <p>We are the <strong>data controller</strong> for personal data processed through our products and website.</p>
            <p><strong>Contact:</strong> <a href="mailto:privacy@helkrypt.no" className="text-indigo-600 hover:underline">privacy@helkrypt.no</a></p>
          </Section>

          {/* Section 2 */}
          <Section id="section-2" title="2. What Data We Collect">
            <Subsection title="Account and Identity Data">
              <ul className="list-disc list-outside ml-5 space-y-1">
                <li>Name, email address, password (hashed)</li>
                <li>Company name and job title (for B2B users)</li>
                <li>Profile photo (if provided)</li>
              </ul>
            </Subsection>
            <Subsection title="Usage and Product Data">
              <ul className="list-disc list-outside ml-5 space-y-1">
                <li>Prompts, inputs, and outputs within MindBridge and SvarAI</li>
                <li>Feature usage, session duration, product interactions</li>
                <li>Conversation history (retained per your account settings)</li>
              </ul>
            </Subsection>
            <Subsection title="Payment Data">
              <ul className="list-disc list-outside ml-5 space-y-1">
                <li>Billing name, address, and payment method details</li>
                <li>Transaction history</li>
                <li><em>Full card numbers are never stored by us — processed by Stripe</em></li>
              </ul>
            </Subsection>
            <Subsection title="Technical Data">
              <ul className="list-disc list-outside ml-5 space-y-1">
                <li>IP address, browser type, operating system</li>
                <li>Device identifiers</li>
                <li>Log data (access times, pages visited, errors)</li>
              </ul>
            </Subsection>
            <Subsection title="Communications Data">
              <ul className="list-disc list-outside ml-5 space-y-1">
                <li>Messages sent to our support team</li>
                <li>Responses to surveys or feedback forms</li>
              </ul>
            </Subsection>
          </Section>

          {/* Section 3 */}
          <Section id="section-3" title="3. How We Use Your Data">
            <Table
              headers={["Purpose", "Examples"]}
              rows={[
                ["Provide our services", "Run MindBridge and SvarAI"],
                ["Manage your account", "Login, billing, preferences"],
                ["Process payments", "Invoicing, subscription management"],
                ["Improve our products", "Aggregate usage analytics, bug fixing"],
                ["Communicate with you", "Product updates, support responses"],
                ["Security and fraud prevention", "Detect unauthorized access"],
                ["Legal compliance", "Meet GDPR, tax, and regulatory requirements"],
              ]}
            />
            <p className="mt-4">We do <strong>not</strong> sell your personal data to third parties.</p>
          </Section>

          {/* Section 4 */}
          <Section id="section-4" title="4. Legal Basis for Processing (GDPR)">
            <Table
              headers={["Processing Activity", "Legal Basis"]}
              rows={[
                ["Providing the service you signed up for", "Contract (Art. 6(1)(b))"],
                ["Processing payments", "Contract (Art. 6(1)(b))"],
                ["Security monitoring and fraud prevention", "Legitimate interests (Art. 6(1)(f))"],
                ["Product improvement (aggregated analytics)", "Legitimate interests (Art. 6(1)(f))"],
                ["Sending marketing communications", "Consent (Art. 6(1)(a))"],
                ["Compliance with legal obligations", "Legal obligation (Art. 6(1)(c))"],
              ]}
            />
          </Section>

          {/* Section 5 */}
          <Section id="section-5" title="5. Data Sharing and Sub-Processors">
            <p>All sub-processors are bound by data processing agreements (DPAs) requiring GDPR-compliant data handling.</p>
            <Table
              headers={["Sub-Processor", "Purpose", "Location", "Safeguard"]}
              rows={[
                ["Supabase (AWS)", "Database, authentication, storage", "EU (AWS eu-west-1)", "GDPR DPA, SCCs"],
                ["Vercel", "Web hosting, edge functions", "EU + US", "GDPR DPA, SCCs"],
                ["Stripe", "Payment processing", "EU (Stripe Payments Europe, IE)", "GDPR DPA — EU entity, no SCC required"],
                ["Anthropic", "AI inference (Claude API)", "EU (DPA active via Ireland)", "GDPR DPA — EU entity, no SCC required"],
              ]}
            />
            <p className="mt-4">We do not share your data with advertising networks or data brokers without your consent.</p>
          </Section>

          {/* Section 6 */}
          <Section id="section-6" title="6. International Data Transfers">
            <p>Where any sub-processor operates outside the EU/EEA (e.g. Vercel US edge nodes), we rely on:</p>
            <ul className="list-disc list-outside ml-5 space-y-1">
              <li><strong>Standard Contractual Clauses (SCCs)</strong> (EU Commission Decision 2021/914)</li>
              <li><strong>Adequacy decisions</strong> where applicable</li>
            </ul>
            <p>
              Stripe and Anthropic are contracted through EU legal entities and do not require SCC transfers for core data processing.
            </p>
            <p>
              Request a copy of applicable SCCs:{" "}
              <a href="mailto:privacy@helkrypt.no" className="text-indigo-600 hover:underline">privacy@helkrypt.no</a>
            </p>
          </Section>

          {/* Section 7 */}
          <Section id="section-7" title="7. How Long We Keep Your Data">
            <Table
              headers={["Data Category", "Retention Period"]}
              rows={[
                ["Account data", "Duration of account + 3 years after deletion"],
                ["Conversation/prompt history", "90 days (rolling), adjustable in settings"],
                ["Payment records", "7 years (Norwegian Bokføringsloven)"],
                ["Support communications", "2 years from resolution"],
                ["Log/technical data", "90 days"],
                ["Marketing consent records", "Duration of consent + 3 years"],
              ]}
            />
          </Section>

          {/* Section 8 */}
          <Section id="section-8" title="8. Cookies and Tracking">
            <Table
              headers={["Category", "Purpose", "Can be disabled?"]}
              rows={[
                ["Essential", "Login sessions, security, core functionality", "No"],
                ["Analytics", "Aggregate usage statistics", "Yes — via cookie banner"],
                ["Marketing", "Targeted advertising (only with consent)", "Yes — via cookie banner"],
              ]}
            />
            <p className="mt-4">
              EU/EEA users must opt in to non-essential cookies. Manage preferences via the cookie settings link in our footer.
            </p>
          </Section>

          {/* Section 9 */}
          <Section id="section-9" title="9. Your Rights — EU/EEA Users (GDPR)">
            <p>Under GDPR Articles 15–22 and the Norwegian Personopplysningsloven:</p>
            <Table
              headers={["Right", "Description"]}
              rows={[
                ["Right of Access (Art. 15)", "Request a copy of your personal data"],
                ["Right to Rectification (Art. 16)", "Correct inaccurate or incomplete data"],
                ["Right to Erasure (Art. 17)", "Request deletion of your data"],
                ["Right to Restrict Processing (Art. 18)", "Pause processing of your data"],
                ["Right to Data Portability (Art. 20)", "Receive your data in machine-readable format"],
                ["Right to Object (Art. 21)", "Object to legitimate-interests or direct marketing processing"],
                ["Right re: automated decisions (Art. 22)", "Request human review of automated decisions"],
                ["Withdraw consent (Art. 7(3))", "Withdraw consent at any time"],
              ]}
            />
            <p className="mt-4">
              <strong>Submit a request:</strong>{" "}
              <a href="mailto:privacy@helkrypt.no" className="text-indigo-600 hover:underline">privacy@helkrypt.no</a>{" "}
              — we respond within <strong>30 days</strong>.
            </p>
            <p>
              <strong>Supervisory authorities:</strong><br />
              Norway: <strong>Datatilsynet</strong> —{" "}
              <a href="https://www.datatilsynet.no" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">www.datatilsynet.no</a><br />
              EU: Your local data protection authority
            </p>
          </Section>

          {/* Section 10 */}
          <Section id="section-10" title="10. Your Rights — California Users (CCPA)">
            <p>
              <strong>Categories of personal information collected:</strong> Identifiers, commercial information,
              internet activity data, inferences.
            </p>
            <Table
              headers={["Right", "Description"]}
              rows={[
                ["Right to Know", "Categories and specific pieces of data collected; sources; purposes; third parties"],
                ["Right to Delete", "Request deletion of your personal information"],
                ["Right to Correct", "Correct inaccurate personal information"],
                ["Right to Opt-Out", "We do not sell your personal data and do not share it for behavioral advertising without consent"],
                ["Non-Discrimination", "We will not discriminate for exercising CCPA rights"],
              ]}
            />
            <p className="mt-4">
              <strong>Submit a CCPA request:</strong>{" "}
              <a href="mailto:privacy@helkrypt.no" className="text-indigo-600 hover:underline">privacy@helkrypt.no</a>{" "}
              (subject: &ldquo;CCPA Request&rdquo;) — we respond within <strong>45 days</strong>.
            </p>
          </Section>

          {/* Section 11 */}
          <Section id="section-11" title="11. Children's Privacy">
            <p>
              Our products are not intended for users under <strong>16</strong> (or 13 in the US). We do not knowingly
              collect data from children. Contact{" "}
              <a href="mailto:privacy@helkrypt.no" className="text-indigo-600 hover:underline">privacy@helkrypt.no</a>{" "}
              if you believe a child has submitted data.
            </p>
          </Section>

          {/* Section 12 */}
          <Section id="section-12" title="12. Security">
            <ul className="list-disc list-outside ml-5 space-y-1">
              <li><strong>In transit:</strong> TLS 1.2+ encryption</li>
              <li><strong>At rest:</strong> AES-256 encryption</li>
              <li><strong>Access controls:</strong> Role-based, least-privilege access</li>
              <li>
                <strong>Breach notification:</strong> Datatilsynet notified within 72 hours of qualifying breach
                (GDPR Art. 33); affected users notified without undue delay (Art. 34)
              </li>
            </ul>
            <p>
              Suspected unauthorized access: contact{" "}
              <a href="mailto:security@helkrypt.ai" className="text-indigo-600 hover:underline">security@helkrypt.ai</a>{" "}
              immediately.
            </p>
          </Section>

          {/* Section 13 */}
          <Section id="section-13" title="13. Changes to This Policy">
            <p>Material changes will be:</p>
            <ul className="list-disc list-outside ml-5 space-y-1">
              <li>Posted with an updated &ldquo;Last updated&rdquo; date</li>
              <li>Emailed to registered users at least 30 days before taking effect</li>
              <li>Subject to fresh consent where required by law</li>
            </ul>
          </Section>

          {/* Section 14 */}
          <Section id="section-14" title="14. Contact Us">
            <p>
              <strong>Helkrypt AI AS</strong><br />
              <a href="mailto:privacy@helkrypt.no" className="text-indigo-600 hover:underline">privacy@helkrypt.no</a><br />
              Norge
            </p>
            <p>
              <strong>Complaints (Norway):</strong> Datatilsynet —{" "}
              <a href="https://www.datatilsynet.no" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">www.datatilsynet.no</a>
            </p>
          </Section>

          <hr className="border-slate-200 mt-10 mb-6" />
          <p className="text-sm text-slate-500 italic">
            This Privacy Policy applies to all Helkrypt AI products: MindBridge and SvarAI.
          </p>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <Link href="/" className="hover:text-white transition-colors">← Back to helkrypt.ai</Link>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-indigo-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/personvern" className="hover:text-white transition-colors">Personvernerklæring</Link>
          </div>
          <p className="text-slate-600">&copy; {new Date().getFullYear()} Helkrypt AI AS</p>
        </div>
      </footer>
    </div>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-10">
      <h2 className="text-xl font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-100">{title}</h2>
      <div className="space-y-3 text-slate-700 leading-relaxed text-sm">{children}</div>
    </section>
  );
}

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h3 className="text-base font-medium text-slate-800 mb-2">{title}</h3>
      {children}
    </div>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200 mt-3">
      <table className="w-full text-sm">
        <thead className="bg-slate-50">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-left font-semibold text-slate-700 whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row, ri) => (
            <tr key={ri} className="hover:bg-slate-50">
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-3 text-slate-600 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
