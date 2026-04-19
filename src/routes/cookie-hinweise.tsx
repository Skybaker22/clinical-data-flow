import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/cookie-hinweise")({
  head: () => ({
    meta: [
      { title: "Cookie-Hinweise — DataX" },
      { name: "description", content: "Informationen zur Verwendung von Cookies auf datax.me." },
    ],
  }),
  component: CookieHinweise,
});

function CookieHinweise() {
  return (
    <LegalPage eyebrow="Legal" title="Cookie-Hinweise.">
      <Section heading="Verwendung von Cookies">
        <p>
          Diese Website verwendet ausschließlich technisch notwendige Cookies, die für den
          Betrieb der Website erforderlich sind. Eine Einwilligung ist hierfür gemäß § 25 Abs. 2
          Nr. 2 TTDSG nicht erforderlich.
        </p>
      </Section>

      <Section heading="Keine Tracking-Cookies">
        <p>
          Wir setzen keine Tracking-, Analyse- oder Marketing-Cookies ein und übermitteln keine
          Nutzungsdaten an Dritte.
        </p>
      </Section>

      <Section heading="Browser-Einstellungen">
        <p>
          Sie können das Setzen von Cookies jederzeit über die Einstellungen Ihres Browsers
          deaktivieren oder bestehende Cookies löschen. Die Funktion der Website kann dadurch
          eingeschränkt sein.
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
