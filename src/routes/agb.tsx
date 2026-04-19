import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/agb")({
  head: () => ({
    meta: [
      { title: "AGB — DataX" },
      { name: "description", content: "Allgemeine Geschäftsbedingungen der DataX UG (haftungsbeschränkt)." },
    ],
  }),
  component: AGB,
});

function AGB() {
  return (
    <LegalPage eyebrow="Legal" title="Allgemeine Geschäftsbedingungen.">
      <Section heading="1. Geltungsbereich">
        <p>
          Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der
          DataX UG (haftungsbeschränkt) (nachfolgend „DataX") und ihren Kunden über die
          Bereitstellung von Software und Dienstleistungen.
        </p>
      </Section>

      <Section heading="2. Vertragsgegenstand">
        <p>
          DataX stellt Software für die strukturierte Bearbeitung von Datenanfragen in
          Krankenhäusern und Forschungsorganisationen bereit. Der konkrete Leistungsumfang ergibt
          sich aus der jeweiligen individuellen Vereinbarung.
        </p>
      </Section>

      <Section heading="3. Pflichten des Kunden">
        <p>
          Der Kunde verpflichtet sich, die Software ausschließlich im Rahmen der vereinbarten
          Nutzungsbedingungen einzusetzen und die geltenden datenschutz- und
          gesundheitsrechtlichen Vorschriften einzuhalten.
        </p>
      </Section>

      <Section heading="4. Vergütung">
        <p>
          Die Höhe der Vergütung sowie deren Fälligkeit werden in der individuellen Vereinbarung
          geregelt. Sofern nichts anderes vereinbart ist, sind Rechnungen innerhalb von 14 Tagen
          ab Rechnungsstellung ohne Abzug zahlbar.
        </p>
      </Section>

      <Section heading="5. Haftung">
        <p>
          DataX haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für Schäden aus
          der Verletzung des Lebens, des Körpers oder der Gesundheit. Im Übrigen ist die Haftung
          auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
        </p>
      </Section>

      <Section heading="6. Schlussbestimmungen">
        <p>
          Es gilt das Recht der Bundesrepublik Deutschland. Sollten einzelne Bestimmungen dieser
          AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
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
