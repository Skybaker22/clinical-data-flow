import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductShot } from "@/components/ProductShot";
import workspaceShot from "@/assets/product-workspace.png";
import agentShot from "@/assets/product-agent.png";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product — DataX Agentic Discovery Workspace" },
      {
        name: "description",
        content:
          "The DataX product: an Agentic Discovery Workspace and Discovery Agent for hospital research teams. Plain-language cohort intake, feasibility, attrition and governance in one workflow.",
      },
      { property: "og:title", content: "DataX Product — Agentic Discovery Workspace" },
      {
        property: "og:description",
        content: "Agentic discovery for clinical cohorts: plain-language intake, feasibility, attrition and governance.",
      },
    ],
  }),
  component: Product,
});

function Product() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Hero */}
      <section className="border-b hairline">
        <div className="container-x pt-20 md:pt-28 pb-16">
          <div className="max-w-3xl">
            <p className="label-eyebrow mb-6">Product</p>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-foreground">
              The Agentic Discovery Workspace for clinical research.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Two surfaces working together: a Discovery Agent that turns plain-language questions
              into structured discovery runs, and a Discovery Workspace where variants, feasibility
              and attrition are compared side by side.
            </p>
          </div>
        </div>
      </section>

      {/* Feature 1 — Discovery Agent */}
      <section className="border-t hairline">
        <div className="container-x py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-4">
              <p className="label-eyebrow mb-4">01 — Discovery Agent</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
                Ask in plain language.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Describe the cohort you want to study. The agent scans data sources, evaluates
                feasibility and verifies governance — and keeps a record of every run.
              </p>
            </div>
            <div className="md:col-span-8">
              <ProductShot
                src={agentShot}
                alt="DataX Discovery Agent intake with example query about Type 2 Diabetes patients and HbA1c values."
                caption="Discovery Agent · Intake"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2 — Workspace */}
      <section className="border-t hairline">
        <div className="container-x py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-4 md:order-2">
              <p className="label-eyebrow mb-4">02 — Discovery Workspace</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
                Compare variants. See feasibility.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                The workspace shows cohort variants with feasibility scores, attrition funnels,
                missing information and an inline research agent for refinement.
              </p>
            </div>
            <div className="md:col-span-8 md:order-1">
              <ProductShot
                src={workspaceShot}
                alt="DataX Discovery Workspace with feasibility score, cohort variants, missing information and attrition funnel."
                caption="Discovery Workspace · Feasibility"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What the agent does */}
      <section className="border-t hairline bg-surface/40">
        <div className="container-x py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-5">
              <p className="label-eyebrow mb-4">03 — What the agent does</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
                Structured work, every step traceable.
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border border hairline">
            {[
              { t: "Scan data sources", d: "Automatically query connected clinical databases." },
              { t: "Evaluate feasibility", d: "Score cohort size, coverage and data quality." },
              { t: "Check governance", d: "Verify compliance, privacy and access policies." },
            ].map((a) => (
              <div key={a.t} className="bg-background p-10">
                <h3 className="font-display text-2xl text-foreground mb-3">{a.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-5">
            <p className="label-eyebrow mb-4">04 — Outcomes</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
              Why teams use it.
            </h2>
          </div>
        </div>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l hairline">
          {[
            "Faster cohort discovery",
            "Comparable variants",
            "Visible feasibility",
            "Auditable governance",
          ].map((v, i) => (
            <li key={v} className="border-r border-b hairline p-8 min-h-[160px] bg-background">
              <p className="font-mono text-[10px] text-muted-foreground mb-6">0{i + 1}</p>
              <p className="font-display text-xl text-foreground leading-snug">{v}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t hairline">
        <div className="container-x py-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h2 className="font-display text-3xl md:text-4xl text-foreground max-w-xl leading-tight">
            Schedule a demo.
          </h2>
          <a
            href="mailto:info@datax.me?subject=Demo%20request%20%E2%80%94%20DataX"
            className="btn-brand self-start md:self-auto"
          >
            Request Demo
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
