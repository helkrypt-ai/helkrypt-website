import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personvernerklæring — Helkrypt AI",
  description: "Personvernerklæring for Helkrypt AIs produkter: MindBridge og SvarAI.",
};

export default function PersonvernPage() {
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
          <Link href="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">
            English version →
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <article>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Personvernerklæring</h1>
          <p className="text-slate-500 text-sm mb-2"><strong>Helkrypt AI AS</strong></p>
          <p className="text-slate-500 text-sm mb-8">Sist oppdatert: 5. april 2026</p>

          <hr className="border-slate-200 mb-8" />

          {/* Table of Contents */}
          <nav className="bg-slate-50 rounded-xl p-6 mb-10">
            <h2 className="text-base font-semibold text-slate-700 mb-3">Innholdsfortegnelse</h2>
            <ol className="list-decimal list-inside space-y-1 text-sm text-indigo-600">
              {[
                "Hvem vi er",
                "Hvilke opplysninger vi samler inn",
                "Hvordan vi bruker opplysningene dine",
                "Rettslig grunnlag for behandling (GDPR)",
                "Deling av data og underdatabehandlere",
                "Internasjonale dataoverføringer",
                "Hvor lenge vi lagrer data",
                "Informasjonskapsler og sporing",
                "Dine rettigheter — EU/EØS-brukere (GDPR)",
                "Dine rettigheter — California-brukere (CCPA)",
                "Barns personvern",
                "Sikkerhet",
                "Endringer i denne erklæringen",
                "Kontakt oss",
              ].map((item, i) => (
                <li key={i}>
                  <a href={`#seksjon-${i + 1}`} className="hover:underline">{item}</a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Seksjon 1 */}
          <Section id="seksjon-1" title="1. Hvem vi er">
            <p>
              Helkrypt AI AS («Helkrypt AI», «vi», «oss» eller «vår») er et norsk selskap som tilbyr
              KI-drevne automatiseringsprodukter, inkludert <strong>MindBridge</strong> og <strong>SvarAI</strong>.
            </p>
            <p>Vi er <strong>behandlingsansvarlig</strong> for personopplysninger som behandles gjennom våre produkter og nettsted.</p>
            <p><strong>Kontakt:</strong> <a href="mailto:privacy@helkrypt.ai" className="text-indigo-600 hover:underline">privacy@helkrypt.ai</a></p>
          </Section>

          {/* Seksjon 2 */}
          <Section id="seksjon-2" title="2. Hvilke opplysninger vi samler inn">
            <Subsection title="Konto- og identitetsopplysninger">
              <ul className="list-disc list-outside ml-5 space-y-1">
                <li>Navn, e-postadresse, passord (kryptert)</li>
                <li>Bedriftsnavn og stillingstittel (for B2B-brukere)</li>
                <li>Profilbilde (hvis oppgitt)</li>
              </ul>
            </Subsection>
            <Subsection title="Bruks- og produktdata">
              <ul className="list-disc list-outside ml-5 space-y-1">
                <li>Forespørsler, inndata og resultater i MindBridge og SvarAI</li>
                <li>Funksjonsbruk, øktvarighet og produktinteraksjoner</li>
                <li>Samtalehistorikk (lagret i henhold til dine kontoinnstillinger)</li>
              </ul>
            </Subsection>
            <Subsection title="Betalingsdata">
              <ul className="list-disc list-outside ml-5 space-y-1">
                <li>Faktureringsnavn, adresse og betalingsopplysninger</li>
                <li>Transaksjonshistorikk</li>
                <li><em>Fullstendige kortnumre lagres aldri av oss — behandles av Stripe</em></li>
              </ul>
            </Subsection>
            <Subsection title="Tekniske data">
              <ul className="list-disc list-outside ml-5 space-y-1">
                <li>IP-adresse, nettlesertype, operativsystem</li>
                <li>Enhetsidentifikatorer</li>
                <li>Loggdata (tilgangstider, besøkte sider, feil)</li>
              </ul>
            </Subsection>
            <Subsection title="Kommunikasjonsdata">
              <ul className="list-disc list-outside ml-5 space-y-1">
                <li>Meldinger sendt til vår kundestøtte</li>
                <li>Svar på undersøkelser eller tilbakemeldingsskjemaer</li>
              </ul>
            </Subsection>
          </Section>

          {/* Seksjon 3 */}
          <Section id="seksjon-3" title="3. Hvordan vi bruker opplysningene dine">
            <Table
              headers={["Formål", "Eksempler"]}
              rows={[
                ["Levere tjenestene våre", "Drifte MindBridge og SvarAI"],
                ["Administrere kontoen din", "Innlogging, fakturering, innstillinger"],
                ["Behandle betalinger", "Fakturering, abonnementsadministrasjon"],
                ["Forbedre produktene våre", "Aggregert bruksanalyse, feilretting"],
                ["Kommunisere med deg", "Produktoppdateringer, støttesvar"],
                ["Sikkerhet og svindelforebygging", "Oppdage uautorisert tilgang"],
                ["Overholdelse av regelverket", "Oppfylle GDPR, skatte- og regulatoriske krav"],
              ]}
            />
            <p className="mt-4">Vi <strong>selger ikke</strong> personopplysningene dine til tredjeparter.</p>
          </Section>

          {/* Seksjon 4 */}
          <Section id="seksjon-4" title="4. Rettslig grunnlag for behandling (GDPR)">
            <Table
              headers={["Behandlingsaktivitet", "Rettslig grunnlag"]}
              rows={[
                ["Levere tjenesten du har registrert deg for", "Avtale (art. 6 nr. 1 bokstav b)"],
                ["Behandle betalinger", "Avtale (art. 6 nr. 1 bokstav b)"],
                ["Sikkerhetsovervåkning og svindelforebygging", "Berettiget interesse (art. 6 nr. 1 bokstav f)"],
                ["Produktforbedring (aggregert analyse)", "Berettiget interesse (art. 6 nr. 1 bokstav f)"],
                ["Sende markedsføringskommunikasjon", "Samtykke (art. 6 nr. 1 bokstav a)"],
                ["Overholdelse av rettslige forpliktelser", "Rettslig forpliktelse (art. 6 nr. 1 bokstav c)"],
              ]}
            />
          </Section>

          {/* Seksjon 5 */}
          <Section id="seksjon-5" title="5. Deling av data og underdatabehandlere">
            <p>Alle underdatabehandlere er bundet av databehandleravtaler (DPA-er) som krever GDPR-kompatibel datahåndtering.</p>
            <Table
              headers={["Underdatabehandler", "Formål", "Lokalisering", "Grunnlag"]}
              rows={[
                ["Supabase (AWS)", "Database, autentisering, lagring", "EU (AWS eu-west-1)", "GDPR DPA, SCCer"],
                ["Vercel", "Webhosting, edge-funksjoner", "EU + USA", "GDPR DPA, SCCer"],
                ["Stripe", "Betalingsbehandling", "EU (Stripe Payments Europe, IE)", "GDPR DPA — EU-enhet, SCC ikke nødvendig"],
                ["Anthropic", "KI-inferens (Claude API)", "EU (DPA aktiv via Irland)", "GDPR DPA — EU-enhet, SCC ikke nødvendig"],
              ]}
            />
            <p className="mt-4">Vi deler ikke dataene dine med annonsenetteverk eller datameglere uten ditt samtykke.</p>
          </Section>

          {/* Seksjon 6 */}
          <Section id="seksjon-6" title="6. Internasjonale dataoverføringer">
            <p>Der underdatabehandlere opererer utenfor EU/EØS (f.eks. Vercels amerikanske edge-noder), benytter vi:</p>
            <ul className="list-disc list-outside ml-5 space-y-1">
              <li><strong>Standardkontraktsklausuler (SCC-er)</strong> (EU-kommisjonens beslutning 2021/914)</li>
              <li><strong>Adekvansavgjørelser</strong> der dette er aktuelt</li>
            </ul>
            <p>
              Stripe og Anthropic er kontrahert gjennom EU-rettslige enheter og krever ikke SCC-overføringer for kjerndatabehandling.
            </p>
            <p>
              Be om kopi av gjeldende SCCer:{" "}
              <a href="mailto:privacy@helkrypt.ai" className="text-indigo-600 hover:underline">privacy@helkrypt.ai</a>
            </p>
          </Section>

          {/* Seksjon 7 */}
          <Section id="seksjon-7" title="7. Hvor lenge vi lagrer data">
            <Table
              headers={["Datakategori", "Lagringsperiode"]}
              rows={[
                ["Kontodata", "Kontotid + 3 år etter sletting"],
                ["Samtale-/forespørselshistorikk", "90 dager (rullerende), justerbart i innstillinger"],
                ["Betalingsopplysninger", "7 år (norsk bokføringsloven)"],
                ["Støttekommunikasjon", "2 år fra avslutning"],
                ["Logg-/tekniske data", "90 dager"],
                ["Samtykkeregistre (markedsføring)", "Samtykkets varighet + 3 år"],
              ]}
            />
          </Section>

          {/* Seksjon 8 */}
          <Section id="seksjon-8" title="8. Informasjonskapsler og sporing">
            <Table
              headers={["Kategori", "Formål", "Kan deaktiveres?"]}
              rows={[
                ["Nødvendige", "Innloggingsøkter, sikkerhet, kjernefunksjonalitet", "Nei"],
                ["Analyse", "Aggregert bruksstatistikk", "Ja — via informasjonskapselbanner"],
                ["Markedsføring", "Målrettet reklame (kun med samtykke)", "Ja — via informasjonskapselbanner"],
              ]}
            />
            <p className="mt-4">
              EU/EØS-brukere må gi aktivt samtykke til ikke-nødvendige informasjonskapsler.
              Administrer preferanser via lenken for informasjonskapselinnstillinger i vår bunntekst.
            </p>
          </Section>

          {/* Seksjon 9 */}
          <Section id="seksjon-9" title="9. Dine rettigheter — EU/EØS-brukere (GDPR)">
            <p>I henhold til GDPR artiklene 15–22 og personopplysningsloven:</p>
            <Table
              headers={["Rettighet", "Beskrivelse"]}
              rows={[
                ["Rett til innsyn (art. 15)", "Be om kopi av personopplysningene dine"],
                ["Rett til retting (art. 16)", "Rette uriktige eller ufullstendige opplysninger"],
                ["Rett til sletting (art. 17)", "Be om sletting av dataene dine"],
                ["Rett til begrensning av behandling (art. 18)", "Pause behandlingen av dataene dine"],
                ["Rett til dataportabilitet (art. 20)", "Motta dataene dine i maskinlesbart format"],
                ["Rett til å protestere (art. 21)", "Protestere mot behandling basert på berettiget interesse"],
                ["Rettigheter ved automatiserte avgjørelser (art. 22)", "Be om menneskelig gjennomgang av automatiserte beslutninger"],
                ["Trekke tilbake samtykke (art. 7 nr. 3)", "Trekke tilbake samtykke når som helst"],
              ]}
            />
            <p className="mt-4">
              <strong>Send en forespørsel:</strong>{" "}
              <a href="mailto:privacy@helkrypt.ai" className="text-indigo-600 hover:underline">privacy@helkrypt.ai</a>{" "}
              — vi svarer innen <strong>30 dager</strong>.
            </p>
            <p>
              <strong>Tilsynsmyndigheter:</strong><br />
              Norge: <strong>Datatilsynet</strong> —{" "}
              <a href="https://www.datatilsynet.no" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">www.datatilsynet.no</a><br />
              EU: Din lokale datatilsynsmyndighet
            </p>
          </Section>

          {/* Seksjon 10 */}
          <Section id="seksjon-10" title="10. Dine rettigheter — California-brukere (CCPA)">
            <p>
              <strong>Kategorier av personopplysninger som samles inn:</strong> Identifikatorer, kommersiell
              informasjon, internettaktivitetsdata, slutninger.
            </p>
            <Table
              headers={["Rettighet", "Beskrivelse"]}
              rows={[
                ["Rett til innsyn", "Kategorier og spesifikke opplysninger som er samlet inn; kilder; formål; tredjeparter"],
                ["Rett til sletting", "Be om sletting av personopplysningene dine"],
                ["Rett til retting", "Rette unøyaktige personopplysninger"],
                ["Rett til å reservere seg", "Vi selger ikke personopplysningene dine og deler dem ikke for atferdsbasert annonsering uten samtykke"],
                ["Ikke-diskriminering", "Vi vil ikke diskriminere deg for å utøve CCPA-rettigheter"],
              ]}
            />
            <p className="mt-4">
              <strong>Send en CCPA-forespørsel:</strong>{" "}
              <a href="mailto:privacy@helkrypt.ai" className="text-indigo-600 hover:underline">privacy@helkrypt.ai</a>{" "}
              (emne: «CCPA-forespørsel») — vi svarer innen <strong>45 dager</strong>.
            </p>
          </Section>

          {/* Seksjon 11 */}
          <Section id="seksjon-11" title="11. Barns personvern">
            <p>
              Produktene våre er ikke beregnet på brukere under <strong>16 år</strong> (eller 13 år i USA).
              Vi samler ikke bevisst inn data fra barn. Kontakt{" "}
              <a href="mailto:privacy@helkrypt.ai" className="text-indigo-600 hover:underline">privacy@helkrypt.ai</a>{" "}
              hvis du mener et barn har sendt inn data.
            </p>
          </Section>

          {/* Seksjon 12 */}
          <Section id="seksjon-12" title="12. Sikkerhet">
            <ul className="list-disc list-outside ml-5 space-y-1">
              <li><strong>Under overføring:</strong> TLS 1.2+ kryptering</li>
              <li><strong>Under lagring:</strong> AES-256 kryptering</li>
              <li><strong>Tilgangskontroller:</strong> Rollebasert, minste-privilegium-tilgang</li>
              <li>
                <strong>Bruddvarsling:</strong> Datatilsynet varsles innen 72 timer ved kvalifisert brudd
                (GDPR art. 33); berørte brukere varsles uten unødig forsinkelse (art. 34)
              </li>
            </ul>
            <p>
              Mistanke om uautorisert tilgang: kontakt{" "}
              <a href="mailto:security@helkrypt.ai" className="text-indigo-600 hover:underline">security@helkrypt.ai</a>{" "}
              umiddelbart.
            </p>
          </Section>

          {/* Seksjon 13 */}
          <Section id="seksjon-13" title="13. Endringer i denne erklæringen">
            <p>Vesentlige endringer vil:</p>
            <ul className="list-disc list-outside ml-5 space-y-1">
              <li>Publiseres med oppdatert «Sist oppdatert»-dato</li>
              <li>Sendes på e-post til registrerte brukere minst 30 dager før ikrafttredelse</li>
              <li>Kreve nytt samtykke der dette er påkrevd ved lov</li>
            </ul>
          </Section>

          {/* Seksjon 14 */}
          <Section id="seksjon-14" title="14. Kontakt oss">
            <p>
              <strong>Helkrypt AI AS</strong><br />
              <a href="mailto:privacy@helkrypt.ai" className="text-indigo-600 hover:underline">privacy@helkrypt.ai</a><br />
              Norge
            </p>
            <p>
              <strong>Klager (Norge):</strong> Datatilsynet —{" "}
              <a href="https://www.datatilsynet.no" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">www.datatilsynet.no</a>
            </p>
          </Section>

          <hr className="border-slate-200 mt-10 mb-6" />
          <p className="text-sm text-slate-500 italic">
            Denne personvernerklæringen gjelder for alle Helkrypt AIs produkter: MindBridge og SvarAI.
          </p>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <Link href="/" className="hover:text-white transition-colors">← Tilbake til helkrypt.ai</Link>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/personvern" className="text-indigo-400 hover:text-white transition-colors">Personvernerklæring</Link>
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
