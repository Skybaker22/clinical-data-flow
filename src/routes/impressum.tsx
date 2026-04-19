import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — DataX" },
      { name: "description", content: "Impressum / Anbieterkennzeichnung der DataX UG (haftungsbeschränkt)." },
    ],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <LegalPage eyebrow="Legal" title="Impressum.">
      <Section heading="Angaben gemäß § 5 TMG">
        <p>DataX UG (haftungsbeschränkt)</p>
        <p>Lindenstrasse 22</p>
        <p>60325 Frankfurt am Main</p>
        <p>Deutschland</p>
      </Section>

      <Section heading="Kontakt">
        <p>
          E-Mail:{" "}
          <a href="mailto:info@datax.me" className="text-foreground hover:text-brand underline-offset-4 hover:underline">
            info@datax.me
          </a>
        </p>
      </Section>

      <Section heading="Vertretungsberechtigte Geschäftsführung">
        <p>Die Geschäftsführung ist über die oben genannte E-Mail-Adresse erreichbar.</p>
      </Section>

      <Section heading="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
        <p>DataX UG (haftungsbeschränkt)</p>
      </Section>

      <Section heading="EU-Streitschlichtung">
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noreferrer"
            className="text-foreground hover:text-brand underline-offset-4 hover:underline"
          >
            ec.europa.eu/consumers/odr
          </a>
          . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </Section>

      <Section heading="Haftung für Inhalte">
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
          nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
          Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
      </Section>

      <Section heading="Urheberrecht">
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
          dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
          der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
          Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
      </Section>
    </LegalPage>
  );
}

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div className="border-t hairline pt-8 mt-8 first:border-0 first:pt-0 first:mt-0">
      <h2 className="font-display text-xl text-foreground mb-3">{heading}</h2>
      <div className="text-sm text-muted-foreground leading-relaxed space-y-2">{children}</div>
    </div>
  );
}
