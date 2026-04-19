import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductShot } from "@/components/ProductShot";
import workspaceShot from "@/assets/product-workspace.png";
import agentShot from "@/assets/product-agent.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DataX — Agentic Discovery Workspace for clinical research" },
      {
        name: "description",
        content:
          "DataX is the agentic discovery workspace for hospital research teams. Describe a cohort in plain language, and the Discovery Agent scans connected clinical data sources to assess feasibility.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Hero */}
      <section className="border-b hairline">
        <div className="container-x pt-20 md:pt-28 pb-16 md:pb-24">
          <div className="max-w-3xl">
            <p className="label-eyebrow mb-6">DataX · Agentic Discovery Workspace</p>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-foreground">
              Describe a cohort. Let the agent do the discovery.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              DataX is an agentic discovery workspace for hospital research teams. Ask a clinical
              question in plain language — the Discovery Agent queries connected data sources,
              evaluates feasibility, and verifies governance.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="mailto:info@datax.me?subject=Demo%20request%20%E2%80%94%20DataX"
                className="btn-brand"
              >
                Request Demo
              </a>
              <Link to="/product" className="btn-ghost">View Product</Link>
            </div>
          </div>

          <div className="mt-16 md:mt-20">
            <ProductShot
              src={workspaceShot}
              alt="DataX Discovery Workspace showing a cohort feasibility assessment with variants, attrition funnel, and a research agent panel."
              caption="Discovery Workspace · Feasibility & Attrition"
            />
          </div>
        </div>
      </section>

      {/* The two pillars */}
      <section className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-6">
            <p className="label-eyebrow mb-4">01 — The product</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight">
              An Agentic Discovery Workspace, powered by a Discovery Agent.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 self-end">
            <p className="text-muted-foreground leading-relaxed">
              Two surfaces, one workflow: a workspace for the researcher, and an agent that does
              the structured work behind it.
            </p>
          </div>
        </div>

        {/* Pillar 1 — Discovery Agent */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center pt-8">
          <div className="md:col-span-5">
            <p className="label-eyebrow mb-4">Discovery Agent</p>
            <h3 className="font-display text-2xl md:text-3xl text-foreground leading-tight">
              Plain-language clinical questions, structured into discovery runs.
            </h3>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Researchers describe a cohort in natural language. The agent turns it into
              deterministic criteria, scans connected sources, evaluates feasibility, and checks
              governance — every step traceable.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><span className="text-brand font-mono">→</span> Scan connected clinical data sources</li>
              <li className="flex gap-3"><span className="text-brand font-mono">→</span> Evaluate feasibility, coverage and data quality</li>
              <li className="flex gap-3"><span className="text-brand font-mono">→</span> Verify compliance, privacy and access policies</li>
            </ul>
          </div>
          <div className="md:col-span-7">
            <ProductShot
              src={agentShot}
              alt="DataX Discovery Agent intake screen asking 'What would you like to study?' with example cohort prompts and recent runs."
              caption="Discovery Agent · Natural-language intake"
            />
          </div>
        </div>
      </section>

      {/* Pillar 2 — Workspace */}
      <section className="border-y hairline bg-surface/40">
        <div className="container-x py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-7 md:order-1 order-2">
              <ProductShot
                src={workspaceShot}
                alt="DataX Discovery Workspace with cohort variants, feasibility score, missing information panel and attrition funnel."
                caption="Discovery Workspace · Variants & Attrition"
              />
            </div>
            <div className="md:col-span-5 md:order-2 order-1">
              <p className="label-eyebrow mb-4">Discovery Workspace</p>
              <h3 className="font-display text-2xl md:text-3xl text-foreground leading-tight">
                One workspace for variants, feasibility, and attrition.
              </h3>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Compare cohort variants side by side. See feasibility scores, attrition funnels,
                and missing information at a glance — with the research agent always one panel
                away.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3"><span className="text-brand font-mono">→</span> Cohort variants with deterministic criteria</li>
                <li className="flex gap-3"><span className="text-brand font-mono">→</span> Feasibility score and attrition funnel</li>
                <li className="flex gap-3"><span className="text-brand font-mono">→</span> Inline research agent for refinement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Built for */}
      <section className="container-x py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="label-eyebrow mb-6">02 — Audience</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight">
            Built for hospital research and data teams.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            University hospitals, medical informatics institutes, Data Integration Centres,
            research IT and hospital data offices.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t hairline">
        <div className="container-x py-20 md:py-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="label-eyebrow mb-4">Get in touch</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight max-w-xl">
              See the Discovery Agent on your data.
            </h2>
            <p className="mt-3 text-muted-foreground">Request a conversation.</p>
          </div>
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
