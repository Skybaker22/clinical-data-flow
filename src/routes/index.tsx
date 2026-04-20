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
              DataX helps hospitals answer clinical research questions by finding
              matching patients, extracting relevant records, and creating
              de-identified datasets — all inside the hospital's own infrastructure.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-6">
              <a
                href="mailto:info@datax.me?subject=Demo%20request%20%E2%80%94%20DataX"
                className="btn-brand"
              >
                Request Demo
              </a>
            </div>
          </div>

          {/* Product cards — three across */}
          <div className="mt-20 md:mt-28 grid md:grid-cols-3 gap-4">
            <Card
              eyebrow="01 — Discovery Agent"
              title="Plain-language clinical questions, structured into discovery runs."
              tone="teal"
              visual={<AgentMock />}
            />
            <Card
              eyebrow="02 — Discovery Workspace"
              title="Variants, feasibility and attrition in one canvas."
              tone="blue"
              visual={<WorkspaceMock />}
            />
            <Card
              eyebrow="03 — Value"
              title="Higher-quality requests. Less back-and-forth."
              tone="amber"
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

function Card({
  eyebrow,
  title,
  body,
  tone,
  visual,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  tone: "teal" | "blue" | "amber";
  visual?: React.ReactNode;
}) {
  const toneConfig = {
    teal: {
      hue: "var(--color-brand)",
      bg: "linear-gradient(160deg, color-mix(in oklab, var(--color-brand) 14%, var(--color-background)) 0%, color-mix(in oklab, var(--color-brand) 4%, var(--color-background)) 60%, var(--color-background) 100%)",
      border: "color-mix(in oklab, var(--color-brand) 30%, var(--color-hairline))",
    },
    blue: {
      hue: "var(--color-status-active)",
      bg: "linear-gradient(160deg, color-mix(in oklab, var(--color-status-active) 16%, var(--color-background)) 0%, color-mix(in oklab, var(--color-status-active) 5%, var(--color-background)) 60%, var(--color-background) 100%)",
      border: "color-mix(in oklab, var(--color-status-active) 32%, var(--color-hairline))",
    },
    amber: {
      hue: "var(--color-status-pending)",
      bg: "linear-gradient(160deg, color-mix(in oklab, var(--color-status-pending) 14%, var(--color-background)) 0%, color-mix(in oklab, var(--color-status-pending) 4%, var(--color-background)) 60%, var(--color-background) 100%)",
      border: "color-mix(in oklab, var(--color-status-pending) 28%, var(--color-hairline))",
    },
  }[tone];

  return (
    <article
      className="relative rounded-md p-6 overflow-hidden group flex flex-col min-h-[420px] transition-all duration-300 hover:-translate-y-0.5"
      style={{
        background: toneConfig.bg,
        border: `1px solid ${toneConfig.border}`,
        boxShadow:
          "inset 0 1px 0 color-mix(in oklab, white 4%, transparent), 0 1px 0 color-mix(in oklab, black 40%, transparent)",
      }}
    >
      {/* Raster grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, var(--color-foreground) 10%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--color-foreground) 10%, transparent) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 90%)",
        }}
      />
      {/* Top hairline accent */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, color-mix(in oklab, ${toneConfig.hue} 70%, transparent), transparent)`,
        }}
      />
      <div
        aria-hidden
        className="absolute -top-24 -right-16 w-64 h-64 rounded-full pointer-events-none opacity-50 blur-3xl"
        style={{
          background: `radial-gradient(circle, color-mix(in oklab, ${toneConfig.hue} 30%, transparent) 0%, transparent 70%)`,
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
      {visual && <div className="relative mt-auto pt-5">{visual}</div>}
    </article>
  );
}
