import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz — DataX" },
      { name: "description", content: "Datenschutzerklärung der DataX UG (haftungsbeschränkt)." },
      { property: "og:title", content: "Datenschutz — DataX" },
      { property: "og:description", content: "Datenschutzerklärung der DataX UG (haftungsbeschränkt)." },
      { property: "og:url", content: "https://datax.me/datenschutz" },
    ],
    links: [{ rel: "canonical", href: "https://datax.me/datenschutz" }],
  }),
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <LegalPage eyebrow="Legal" title="Datenschutzerklärung.">
      <Section heading="1. Verantwortlicher">
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist die DataX UG
          (haftungsbeschränkt). Kontakt:{" "}
          <a href="mailto:info@datax.me" className="text-foreground hover:text-brand underline-offset-4 hover:underline">
            info@datax.me
          </a>
          .
        </p>
      </Section>

      <Section heading="2. Erhebung und Speicherung personenbezogener Daten">
        <p>
          Beim Aufruf dieser Website werden technisch notwendige Informationen automatisch durch
          den Browser an unseren Server übertragen (Server-Logfiles): IP-Adresse, Datum und
          Uhrzeit, Zeitzonendifferenz, Inhalt der Anforderung, HTTP-Statuscode, übertragene
          Datenmenge, Referrer-URL und User-Agent. Diese Verarbeitung erfolgt zur technischen
          Bereitstellung und Sicherheit der Website (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
      </Section>

      <Section heading="3. Kontaktaufnahme">
        <p>
          Wenn Sie uns per E-Mail kontaktieren, werden die übermittelten Daten zur Bearbeitung
          Ihrer Anfrage verarbeitet (Art. 6 Abs. 1 lit. b bzw. f DSGVO) und gelöscht, sobald sie
          für den Zweck der Verarbeitung nicht mehr erforderlich sind.
        </p>
      </Section>

      <Section heading="4. Weitergabe von Daten">
        <p>
          Eine Übermittlung Ihrer personenbezogenen Daten an Dritte findet nur statt, soweit dies
          gesetzlich zulässig ist oder Sie eingewilligt haben.
        </p>
      </Section>

      <Section heading="5. Ihre Rechte">
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
          Verarbeitung, Datenübertragbarkeit und Widerspruch sowie das Recht auf Beschwerde bei
          einer Aufsichtsbehörde.
        </p>
      </Section>

      <Section heading="6. Sicherheit">
        <p>
          Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten gegen
          Manipulation, Verlust und unberechtigten Zugriff zu schützen.
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
