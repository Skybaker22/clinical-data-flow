import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RequestIntakeMock } from "@/components/mockups/RequestIntakeMock";
import { CriteriaMock } from "@/components/mockups/CriteriaMock";
import { WorkflowMock } from "@/components/mockups/WorkflowMock";
import { HandoffMock } from "@/components/mockups/HandoffMock";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product — DataX" },
      {
        name: "description",
        content:
          "A product for hospital data request workflows. Structured intake, review coordination, and traceable execution.",
      },
      { property: "og:title", content: "DataX Product — Hospital data request workflows" },
      {
        property: "og:description",
        content: "Structured intake, review coordination, and traceable workflow execution.",
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
              A product for hospital data request workflows.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Built for teams managing research and data access requests across medical, technical,
              and governance stakeholders.
            </p>
            <p className="mt-4 text-sm text-muted-foreground max-w-2xl">
              DataX supports structured intake, review coordination, and traceable workflow
              execution.
            </p>
          </div>
        </div>
      </section>

      <FeatureSection
        index="01"
        title="Request Intake"
        copy="Capture free-text requests in a structured, operational format."
        mock={<RequestIntakeMock />}
      />
      <FeatureSection
        index="02"
        title="Feasibility Preparation"
        copy="Turn unclear requests into reviewable feasibility inputs."
        mock={<CriteriaMock />}
        reverse
      />
      <FeatureSection
        index="03"
        title="Review Workflow"
        copy="Coordinate workflow steps across the relevant hospital stakeholders."
        mock={<WorkflowMock />}
      />
      <FeatureSection
        index="04"
        title="Secure Handoff"
        copy="Support controlled downstream processing with traceability."
        mock={<HandoffMock />}
        reverse
      />

      {/* Why teams use it */}
      <section className="border-t hairline bg-surface/40">
        <div className="container-x py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-5">
              <p className="label-eyebrow mb-4">05 — Outcomes</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
                Why teams use it.
              </h2>
            </div>
          </div>
          <ul className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l hairline">
            {[
              "Less manual back-and-forth",
              "Clearer request objects",
              "More visible workflow status",
              "Better traceability",
            ].map((v, i) => (
              <li key={v} className="border-r border-b hairline p-8 min-h-[160px] bg-background">
                <p className="font-mono text-[10px] text-muted-foreground mb-6">
                  0{i + 1}
                </p>
                <p className="font-display text-xl text-foreground leading-snug">{v}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who it is for */}
      <section className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-5">
            <p className="label-eyebrow mb-4">06 — Audience</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
              Who it is for.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border border hairline">
          {[
            { t: "Medical Informatics", d: "For structured coordination of recurring requests." },
            { t: "Data Integration Centres", d: "For clearer intake and process visibility." },
            { t: "Research IT", d: "For operational workflow support." },
            { t: "Research Leadership", d: "For more reliable internal handling." },
          ].map((a) => (
            <div key={a.t} className="bg-background p-10">
              <h3 className="font-display text-2xl text-foreground mb-3">{a.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.d}</p>
            </div>
          ))}
        </div>
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

function FeatureSection({
  index,
  title,
  copy,
  mock,
  reverse,
}: {
  index: string;
  title: string;
  copy: string;
  mock: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <section className="border-t hairline">
      <div className="container-x py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className={`md:col-span-4 ${reverse ? "md:order-2" : ""}`}>
            <p className="label-eyebrow mb-4">{index}</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
              {title}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{copy}</p>
          </div>
          <div className={`md:col-span-8 ${reverse ? "md:order-1" : ""}`}>{mock}</div>
        </div>
      </div>
    </section>
  );
}
