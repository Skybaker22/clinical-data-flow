import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import productAgent from "@/assets/product-agent.png";
import productWorkspace from "@/assets/product-workspace.png";

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
        <section className="container-x pt-12 md:pt-16 pb-10">
          <div className="max-w-3xl">
            <p className="label-eyebrow mb-5">Data Discovery Agents for Clinical Requests</p>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Describe a cohort.<br />
              <span className="text-muted-foreground">Let the agent do the discovery.</span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              An agentic discovery workspace for hospital research teams. Ask in plain
              language — the Discovery Agent queries connected sources, evaluates
              feasibility, and verifies governance.
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

          {/* Product cards */}
          <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-5">
            <Card
              eyebrow="01 — Discovery Agent"
              title="Plain-language clinical questions, structured into discovery runs."
              body="Natural-language intake. The agent turns intent into deterministic criteria, scans connected sources, and verifies governance — every step traceable."
              tone="brand"
              image={productAgent}
              imageAlt="DataX Discovery Agent — plain-language cohort intake"
            />
            <Card
              eyebrow="02 — Discovery Workspace"
              title="Variants, feasibility and attrition in one canvas."
              body="Compare cohort variants side by side. See feasibility scores, attrition funnels and missing information at a glance — research agent one panel away."
              tone="surface"
              image={productWorkspace}
              imageAlt="DataX Discovery Workspace — variants, feasibility and attrition"
            />
            <Card
              eyebrow="03 — Value"
              title="Higher-quality requests. Less back-and-forth. Low-risk to start."
              body="Clinical intent captured precisely. Ambiguity resolved up front by the agent. Validate on real data, expand when it works."
              tone="surface"
              className="md:col-span-2"
            />
          </div>

          {/* Trust strip */}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
            <span className="label-eyebrow">Built for</span>
            <span>University hospitals</span>
            <span className="opacity-30">·</span>
            <span>Medical informatics institutes</span>
            <span className="opacity-30">·</span>
            <span>Data Integration Centres</span>
            <span className="opacity-30">·</span>
            <span>Hospital data offices</span>
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
  image,
  imageAlt,
  className,
}: {
  eyebrow: string;
  title: string;
  body: string;
  tone: "brand" | "surface";
  image?: string;
  imageAlt?: string;
  className?: string;
}) {
  return (
    <article
      className={`relative rounded-md border hairline p-6 md:p-7 bg-surface/60 backdrop-blur-sm overflow-hidden group transition-colors hover:bg-surface flex flex-col ${className ?? ""}`}
    >
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
      {image && (
        <div className="relative mt-6 rounded-md border hairline overflow-hidden bg-background/60 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)]">
          <img
            src={image}
            alt={imageAlt ?? ""}
            loading="lazy"
            className="block w-full h-auto"
          />
        </div>
      )}
    </article>
  );
}

