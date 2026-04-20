import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AgentMock, WorkspaceMock, ValueMock } from "@/components/ProductMocks";
import { RequestObjectHologram } from "@/components/RequestObjectHologram";

export const Route = createFileRoute("/de")({
  head: () => ({
    meta: [
      { title: "DataX — Data Discovery Agents für klinische Anfragen" },
      {
        name: "description",
        content:
          "DataX ist der agentische Discovery-Workspace für Forschungsteams in Krankenhäusern. Beschreiben Sie eine Kohorte in natürlicher Sprache — der Discovery-Agent prüft die Machbarkeit auf angebundenen klinischen Daten.",
      },
      { property: "og:title", content: "DataX — Data Discovery Agents für klinische Anfragen" },
      {
        property: "og:description",
        content:
          "Kohortensuche in natürlicher Sprache für Universitätskliniken, Institute für Medizinische Informatik und Datenintegrationszentren.",
      },
      { property: "og:url", content: "https://datax.me/de" },
      { property: "og:locale", content: "de_DE" },
      { property: "og:image", content: "https://datax.me/og-image.jpg" },
      { name: "twitter:image", content: "https://datax.me/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://datax.me/de" },
      { rel: "alternate", hrefLang: "en", href: "https://datax.me/" },
      { rel: "alternate", hrefLang: "de", href: "https://datax.me/de" },
      { rel: "alternate", hrefLang: "x-default", href: "https://datax.me/" },
    ],
  }),
  component: HomeDe,
});

function HomeDe() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-[520px] opacity-60"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, color-mix(in oklab, var(--color-brand) 18%, transparent) 0%, transparent 70%)",
        }}
      />

      <SiteHeader />

      <main className="flex-1 relative">
        <section className="container-x pt-12 md:pt-16 pb-10 relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            <div className="lg:col-span-7 relative">
              <h1 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
                Suchen Sie nach klinischer Evidenz.<br />
                <span className="text-muted-foreground">Lassen Sie den Agenten die Discovery übernehmen.</span>
              </h1>
              <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                DataX hilft Krankenhäusern, die richtigen Patient:innen zu finden,
                die richtigen Daten zusammenzustellen und datenschutzkonforme
                Auswertungen für die klinische Forschung vorzubereiten — ohne dass
                Patientendaten das Krankenhaus verlassen.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-6">
                <a
                  href="mailto:info@datax.me?subject=Demo-Anfrage%20%E2%80%94%20DataX"
                  className="btn-brand"
                >
                  Demo anfragen
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
              <RequestObjectHologram lang="de" />
            </div>
          </div>

          <div className="mt-20 md:mt-28 grid md:grid-cols-3 gap-4">
            <Card
              eyebrow="01 — Discovery-Agent"
              title="Klinische Fragen in natürlicher Sprache, strukturiert in Discovery-Läufe."
              pattern="grid"
              visual={<AgentMock lang="de" />}
            />
            <Card
              eyebrow="02 — Discovery-Workspace"
              title="Varianten, Machbarkeit und Attrition auf einer Oberfläche."
              pattern="dots"
              visual={<WorkspaceMock lang="de" />}
            />
            <Card
              eyebrow="03 — Mehrwert"
              title="Bessere Anfragen. Weniger Rückfragen."
              pattern="diagonal"
              visual={<ValueMock lang="de" />}
            />
          </div>

          <div className="mt-12 pt-8 border-t hairline">
            <p className="label-eyebrow mb-4">Entwickelt für</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3">
              {[
                "Universitätskliniken",
                "Institute für Medizinische Informatik",
                "Datenintegrationszentren",
                "Datenstellen in Krankenhäusern",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-brand shrink-0"
                  />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function Card({
  eyebrow,
  title,
  body,
  pattern,
  visual,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  pattern: "grid" | "dots" | "diagonal";
  visual?: React.ReactNode;
}) {
  const patternStyle: React.CSSProperties = (() => {
    const line = "color-mix(in oklab, var(--color-foreground) 22%, transparent)";
    const dot = "color-mix(in oklab, var(--color-foreground) 30%, transparent)";
    if (pattern === "grid") {
      return {
        backgroundImage: `linear-gradient(to right, ${line} 1px, transparent 1px), linear-gradient(to bottom, ${line} 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
      };
    }
    if (pattern === "dots") {
      return {
        backgroundImage: `radial-gradient(${dot} 1.4px, transparent 1.6px)`,
        backgroundSize: "14px 14px",
      };
    }
    return {
      backgroundImage: `repeating-linear-gradient(135deg, ${line} 0 1.5px, transparent 1.5px 12px)`,
    };
  })();

  return (
    <article
      className="relative rounded-md p-6 overflow-hidden group flex flex-col min-h-[420px] transition-all duration-300 hover:-translate-y-0.5"
      style={{
        background:
          "linear-gradient(180deg, color-mix(in oklab, var(--color-background) 92%, black) 0%, color-mix(in oklab, var(--color-background) 96%, black) 100%)",
        border: "1px solid var(--color-hairline)",
        boxShadow:
          "inset 0 1px 0 color-mix(in oklab, white 4%, transparent), 0 1px 0 color-mix(in oklab, black 40%, transparent)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.55]"
        style={{
          ...patternStyle,
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 40%, black 30%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 75% at 50% 40%, black 30%, transparent 90%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, var(--color-foreground) 18%, transparent), transparent)",
        }}
      />
      <div className="relative flex items-start gap-3">
        <p className="label-eyebrow">{eyebrow}</p>
      </div>
      <div className="relative mt-5">
        <h3 className="font-display text-lg md:text-xl leading-snug text-foreground">
          {title}
        </h3>
        {body && <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{body}</p>}
      </div>
      {visual && <div className="relative mt-auto pt-5 flex">{visual}</div>}
    </article>
  );
}
