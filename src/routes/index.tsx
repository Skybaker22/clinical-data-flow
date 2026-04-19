import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductShot } from "@/components/ProductShot";
import { ReasoningDiagram } from "@/components/ReasoningDiagram";
import workspaceShot from "@/assets/product-workspace.png";
import agentShot from "@/assets/product-agent.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DataX — Agentic Discovery Workspace for clinical research" },
      {
        name: "description",
        content:
          "DataX is the agentic discovery workspace for hospital research teams. Describe a cohort in plain language — the Discovery Agent assesses feasibility on connected clinical data.",
      },
      { property: "og:title", content: "DataX — Agentic Discovery Workspace" },
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
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Hero */}
      <section id="top" className="border-b hairline">
        <div className="container-x pt-20 md:pt-28 pb-16 md:pb-24">
          <div className="max-w-3xl">
            <p className="label-eyebrow mb-6">Data Discovery Agents for Clinical Requests</p>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-foreground">
              Describe a cohort. Let the agent do the discovery.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              An agentic discovery workspace for hospital research teams. Ask in plain
              language — the Discovery Agent queries connected data sources, evaluates
              feasibility, and verifies governance.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="mailto:info@datax.me?subject=Demo%20request%20%E2%80%94%20DataX"
                className="btn-brand"
              >
                Request Demo
              </a>
              <a href="#workspace" className="btn-ghost">See the product</a>
            </div>
          </div>

          <div className="mt-16 md:mt-20">
            <ProductShot
              src={workspaceShot}
              alt="DataX Discovery Workspace showing a cohort feasibility assessment with variants, attrition funnel and a research agent panel."
              caption="Discovery Workspace · Feasibility & Attrition"
            />
          </div>
        </div>
      </section>

      {/* Discovery Agent */}
      <section id="agent" className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5">
            <p className="label-eyebrow mb-4">01 — Discovery Agent</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
              Plain-language clinical questions, structured into discovery runs.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Researchers describe a cohort in natural language. The agent turns it into
              deterministic criteria, scans connected sources, evaluates feasibility, and
              checks governance — every step traceable.
            </p>
          </div>
          <div className="md:col-span-7">
            <ProductShot
              src={agentShot}
              alt="DataX Discovery Agent intake screen with example cohort prompts and recent runs."
              caption="Discovery Agent · Natural-language intake"
            />
          </div>
        </div>
      </section>

      {/* How DataX reasons — adapted from deck */}
      <section id="reasoning" className="border-y hairline bg-surface/40">
        <div className="container-x py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-10 mb-14">
            <div className="md:col-span-6">
              <p className="label-eyebrow mb-4">02 — How DataX reasons</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
                Three layers, from clinical intent to protected signal.
              </h2>
            </div>
          </div>
          <ReasoningDiagram />
        </div>
      </section>

      {/* Discovery Workspace detail */}
      <section id="workspace" className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-6">
            <p className="label-eyebrow mb-4">03 — Discovery Workspace</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
              One workspace for variants, feasibility, and attrition.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Compare cohort variants side by side. See feasibility scores, attrition
              funnels, and missing information at a glance — with the research agent
              always one panel away.
            </p>
          </div>
        </div>
        <ul className="grid md:grid-cols-3 border-t border-l hairline">
          {[
            ["Variants", "Cohort variants with deterministic criteria"],
            ["Feasibility", "Score, coverage and data quality"],
            ["Attrition", "Inline funnel and missing information"],
          ].map(([k, v]) => (
            <li key={k} className="border-r border-b hairline p-8 bg-background">
              <p className="label-eyebrow mb-3">{k}</p>
              <p className="font-display text-lg text-foreground leading-snug">{v}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Built for */}
      <section id="audience" className="border-t hairline">
        <div className="container-x py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <p className="label-eyebrow mb-4">04 — Built for</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
                Hospital research and data teams.
              </h2>
            </div>
            <ul className="md:col-span-7 grid sm:grid-cols-2 gap-px bg-border border hairline self-start">
              {[
                "University hospitals",
                "Medical informatics institutes",
                "Data Integration Centres",
                "Hospital data offices",
              ].map((a) => (
                <li key={a} className="bg-background p-6">
                  <p className="font-display text-base text-foreground">{a}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Value */}
      <section id="value" className="border-t hairline bg-muted/30">
        <div className="container-x py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <p className="label-eyebrow mb-4">05 — Value</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
                What teams gain.
              </h2>
            </div>
            <ul className="md:col-span-7 grid gap-px bg-border border hairline self-start">
              {[
                ["Higher-quality, more structured requests", "Clinical intent captured precisely, ready for cohort logic."],
                ["Less manual back-and-forth clarification", "The agent resolves ambiguity up front instead of by email."],
                ["Low-risk value test", "Start small, validate on real data, expand when it works."],
              ].map(([title, desc]) => (
                <li key={title} className="bg-background p-6 flex gap-4 items-start">
                  <span
                    aria-hidden
                    className="mt-1 inline-block h-2.5 w-2.5 rounded-full shrink-0"
                    style={{ background: "var(--color-brand)" }}
                  />
                  <div>
                    <p className="font-display text-lg text-foreground leading-snug">{title}</p>
                    <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="border-t hairline">
        <div className="container-x py-20 md:py-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="label-eyebrow mb-4">Get in touch</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight max-w-xl">
              See the Discovery Agent on your data.
            </h2>
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
