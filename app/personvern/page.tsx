import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personvernerklæring — Helkrypt AI",
  description: "Personvernerklæring for Helkrypt AI AS.",
};

export default function PersonvernPage() {
  return (
    <div className="min-h-screen bg-[var(--navy-dark)] text-[var(--white)]">
      {/* Header */}
      <header className="bg-[var(--navy)] py-4 px-6 border-b-2 border-[var(--gold)]">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-[4px] bg-[var(--gold)] flex items-center justify-center">
              <span className="text-[var(--navy-dark)] font-extrabold text-xs">H</span>
            </div>
            <span className="font-extrabold text-[var(--white)] text-base tracking-tight">
              Helkrypt<span className="text-[var(--gold)]"> AI</span>
            </span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <article>
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--gold)] mb-3">
            Juridisk
          </span>
          <h1 className="text-3xl font-extrabold text-[var(--white)] mb-2">Personvernerklæring</h1>
          <p className="text-[var(--text-muted)] text-sm mb-2"><strong className="text-[var(--white)]">Helkrypt AI AS</strong></p>
          <p className="text-[var(--text-subtle)] text-sm mb-8">Sist oppdatert: 5. april 2026</p>

          <hr className="border-[var(--border-subtle)] mb-8" />

          {/* Table of Contents */}
          <nav className="bg-[var(--surface-card)] border-l-2 border-[var(--gold)] rounded-[6px] p-6 mb-10">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--gold)] mb-3">Innholdsfortegnelse</h2>
            <ol className="list-decimal list-inside space-y-1 text-sm text-[var(--blue-light)]">
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
                "Barns personvern",
                "Sikkerhet",
                "Endringer i denne erklæringen",
                "Kontakt oss",
              ].map((item, i) => (
                <li key={i}>
                  <a href={`#seksjon-${i + 1}`} className="hover:text-[var(--gold)] hover:underline">{item}</a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Seksjon 1 */}
          <Section id="seksjon-1" title="1. Hvem vi er">
            <p>
              Helkrypt AI AS («Helkrypt AI», «vi», «oss» eller «vår») er et norsk selskap som tilbyr
              KI-drevne automatiseringsløsninger for norske bedrifter.
            </p>
            <p>Vi er <strong className="text-[var(--white)]">behandlingsansvarlig</strong> for personopplysninger som behandles gjennom våre tjenester og nettsted.</p>
            <p><strong className="text-[var(--white)]">Kontakt:</strong> <a href="mailto:marius@helkrypt.no" className="text-[var(--blue-light)] hover:text-[var(--gold)] hover:underline">marius@helkrypt.no</a></p>
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
                <li>Forespørsler, inndata og resultater i våre tjenester</li>
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
                ["Levere tjenestene våre", "Drifte tjenestene våre"],
                ["Administrere kontoen din", "Innlogging, fakturering, innstillinger"],
                ["Behandle betalinger", "Fakturering, abonnementsadministrasjon"],
                ["Forbedre produktene våre", "Aggregert bruksanalyse, feilretting"],
                ["Kommunisere med deg", "Produktoppdateringer, støttesvar"],
                ["Sikkerhet og svindelforebygging", "Oppdage uautorisert tilgang"],
                ["Overholdelse av regelverket", "Oppfylle GDPR, skatte- og regulatoriske krav"],
              ]}
            />
            <p className="mt-4">Vi <strong className="text-[var(--white)]">selger ikke</strong> personopplysningene dine til tredjeparter.</p>
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
              <li><strong className="text-[var(--white)]">Standardkontraktsklausuler (SCC-er)</strong> (EU-kommisjonens beslutning 2021/914)</li>
              <li><strong className="text-[var(--white)]">Adekvansavgjørelser</strong> der dette er aktuelt</li>
            </ul>
            <p>
              Stripe og Anthropic er kontrahert gjennom EU-rettslige enheter og krever ikke SCC-overføringer for kjerndatabehandling.
            </p>
            <p>
              Be om kopi av gjeldende SCCer:{" "}
              <a href="mailto:marius@helkrypt.no" className="text-[var(--blue-light)] hover:text-[var(--gold)] hover:underline">marius@helkrypt.no</a>
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
              <strong className="text-[var(--white)]">Send en forespørsel:</strong>{" "}
              <a href="mailto:marius@helkrypt.no" className="text-[var(--blue-light)] hover:text-[var(--gold)] hover:underline">marius@helkrypt.no</a>{" "}
              — vi svarer innen <strong className="text-[var(--white)]">30 dager</strong>.
            </p>
            <p>
              <strong className="text-[var(--white)]">Tilsynsmyndigheter:</strong><br />
              Norge: <strong className="text-[var(--white)]">Datatilsynet</strong> —{" "}
              <a href="https://www.datatilsynet.no" className="text-[var(--blue-light)] hover:text-[var(--gold)] hover:underline" target="_blank" rel="noopener noreferrer">www.datatilsynet.no</a><br />
              EU: Din lokale datatilsynsmyndighet
            </p>
          </Section>

          {/* Seksjon 10 */}
          <Section id="seksjon-10" title="10. Barns personvern">
            <p>
              Tjenestene våre er ikke beregnet på brukere under <strong className="text-[var(--white)]">16 år</strong>.
              Vi samler ikke bevisst inn data fra barn. Kontakt{" "}
              <a href="mailto:marius@helkrypt.no" className="text-[var(--blue-light)] hover:text-[var(--gold)] hover:underline">marius@helkrypt.no</a>{" "}
              hvis du mener et barn har sendt inn data.
            </p>
          </Section>

          {/* Seksjon 11 */}
          <Section id="seksjon-11" title="11. Sikkerhet">
            <ul className="list-disc list-outside ml-5 space-y-1">
              <li><strong className="text-[var(--white)]">Under overføring:</strong> TLS 1.2+ kryptering</li>
              <li><strong className="text-[var(--white)]">Under lagring:</strong> AES-256 kryptering</li>
              <li><strong className="text-[var(--white)]">Tilgangskontroller:</strong> Rollebasert, minste-privilegium-tilgang</li>
              <li>
                <strong className="text-[var(--white)]">Bruddvarsling:</strong> Datatilsynet varsles innen 72 timer ved kvalifisert brudd
                (GDPR art. 33); berørte brukere varsles uten unødig forsinkelse (art. 34)
              </li>
            </ul>
            <p>
              Mistanke om uautorisert tilgang: kontakt{" "}
              <a href="mailto:marius@helkrypt.no" className="text-[var(--blue-light)] hover:text-[var(--gold)] hover:underline">marius@helkrypt.no</a>{" "}
              umiddelbart.
            </p>
          </Section>

          {/* Seksjon 12 */}
          <Section id="seksjon-12" title="12. Endringer i denne erklæringen">
            <p>Vesentlige endringer vil:</p>
            <ul className="list-disc list-outside ml-5 space-y-1">
              <li>Publiseres med oppdatert «Sist oppdatert»-dato</li>
              <li>Sendes på e-post til registrerte brukere minst 30 dager før ikrafttredelse</li>
              <li>Kreve nytt samtykke der dette er påkrevd ved lov</li>
            </ul>
          </Section>

          {/* Seksjon 13 */}
          <Section id="seksjon-13" title="13. Kontakt oss">
            <p>
              <strong className="text-[var(--white)]">Helkrypt AI AS</strong><br />
              <a href="mailto:marius@helkrypt.no" className="text-[var(--blue-light)] hover:text-[var(--gold)] hover:underline">marius@helkrypt.no</a><br />
              Norge
            </p>
            <p>
              <strong className="text-[var(--white)]">Klager (Norge):</strong> Datatilsynet —{" "}
              <a href="https://www.datatilsynet.no" className="text-[var(--blue-light)] hover:text-[var(--gold)] hover:underline" target="_blank" rel="noopener noreferrer">www.datatilsynet.no</a>
            </p>
          </Section>

          <hr className="border-[var(--border-subtle)] mt-10 mb-6" />
          <p className="text-sm text-[var(--text-subtle)] italic">
            Denne personvernerklæringen gjelder for Helkrypt AI AS og våre tjenester.
          </p>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--navy-deep)] text-[var(--text-muted)] py-8 mt-12 border-t border-[var(--border-subtle)]">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <Link href="/" className="hover:text-[var(--blue-light)] transition-colors">← Tilbake til helkrypt.ai</Link>
          <Link href="/personvern" className="text-[var(--gold)] hover:text-[var(--white)] transition-colors">Personvernerklæring</Link>
          <p className="text-[var(--text-subtle)]">&copy; {new Date().getFullYear()} Helkrypt AI AS</p>
        </div>
      </footer>
    </div>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-10">
      <h2 className="text-xl font-extrabold text-[var(--white)] mb-4 pb-2 border-b border-[var(--border-subtle)]">{title}</h2>
      <div className="space-y-3 text-[var(--text-muted)] leading-relaxed text-sm">{children}</div>
    </section>
  );
}

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h3 className="text-base font-semibold text-[var(--white)] mb-2">{title}</h3>
      {children}
    </div>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-[6px] border border-[var(--border-subtle)] mt-3">
      <table className="w-full text-sm">
        <thead className="bg-[var(--navy)]">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-left font-bold uppercase tracking-[0.1em] text-[var(--gold)] text-xs whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--border-subtle)]">
          {rows.map((row, ri) => (
            <tr key={ri} className="hover:bg-white/[0.02]">
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-3 text-[var(--text-muted)] align-top">
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
