import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AgentMock, WorkspaceMock, ValueMock } from "@/components/ProductMocks";
import { PatientHologram } from "@/components/PatientHologram";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DataX — Data Discovery Agents for Clinical Requests" },
      {
        name: "description",
        content:
          "DataX is the agentic discovery workspace for hospital research teams. Describe a cohort in plain language — the Discovery Agent assesses feasibility on connected clinical data.",
      },
      { property: "og:title", content: "DataX — Data Discovery Agents for Clinical Requests" },
      {
        property: "og:description",
        content:
          "Plain-language cohort discovery for university hospitals, medical informatics institutes and Data Integration Centres.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-[520px] opacity-60"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, color-mix(in oklab, var(--color-brand) 18%, transparent) 0%, transparent 70%)",
        }}
      />

      <SiteHeader />

      {/* Hero — sized to fit above the fold */}
      <main className="flex-1 relative">
        <section className="container-x pt-12 md:pt-16 pb-10 relative">
          {/* Digital patient hologram — decorative background */}
          <PatientHologram />
          <div className="max-w-3xl relative">
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Search for clinical evidence.<br />
              <span className="text-muted-foreground">Let the agent do the discovery.</span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              DataX is a founder-led research company building the future of secure
              health data collaboration — agentic systems for clinical discovery,
              built with hospitals.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-6">
              <a
                href="mailto:info@datax.me?subject=Demo%20request%20%E2%80%94%20DataX"
                className="btn-brand"
              >
                Request Demo
              </a>
              <div className="flex items-center gap-8 text-sm">
                <Stat value="2" label="core agents" />
                <Stat value="3" label="reasoning layers" />
                <Stat value="100%" label="traceable" />
              </div>
            </div>
          </div>

          {/* Product cards — three across */}
          <div className="mt-10 md:mt-14 grid md:grid-cols-3 gap-4">
            <Card
              eyebrow="01 — Discovery Agent"
              title="Plain-language clinical questions."
              tone="brand"
              visual={<AgentMock />}
            />
            <Card
              eyebrow="02 — Discovery Workspace"
              title="Variants, feasibility & attrition."
              tone="grid"
              visual={<WorkspaceMock />}
            />
            <Card
              eyebrow="03 — Value"
              title="Higher-quality requests, low-risk to start."
              tone="mesh"
              visual={<ValueMock />}
            />
          </div>

          {/* Trust strip */}
          <div className="mt-12 pt-8 border-t hairline">
            <p className="label-eyebrow mb-4">Built for</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3">
              {[
                "University hospitals",
                "Medical informatics institutes",
                "Data Integration Centres",
                "Hospital data offices",
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

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="font-display text-foreground text-lg">{value}</span>
      <span className="text-muted-foreground text-xs uppercase tracking-wider">{label}</span>
    </div>
  );
}

function Card({
  eyebrow,
  title,
  body,
  tone,
  visual,
}: {
  eyebrow: string;
  title: string;
  body: string;
  tone: "brand" | "surface";
  visual?: React.ReactNode;
}) {
  return (
    <article className="relative rounded-md border hairline p-6 bg-surface/60 backdrop-blur-sm overflow-hidden group transition-colors hover:bg-surface flex flex-col min-h-[420px]">
      {tone === "brand" && (
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(80% 60% at 0% 0%, color-mix(in oklab, var(--color-brand) 22%, transparent) 0%, transparent 60%)",
          }}
        />
      )}
      <div className="relative">
        <p className="label-eyebrow mb-4">{eyebrow}</p>
        <h3 className="font-display text-lg md:text-xl leading-snug text-foreground">
          {title}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{body}</p>
      </div>
      {visual && <div className="relative mt-auto pt-5">{visual}</div>}
    </article>
  );
}
