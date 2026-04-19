import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WorkflowMock } from "@/components/mockups/WorkflowMock";

export const Route = createFileRoute("/for-hospitals")({
  head: () => ({
    meta: [
      { title: "For Hospitals — DataX" },
      {
        name: "description",
        content:
          "DataX is built for university hospitals, medical informatics institutes, and Data Integration Centres.",
      },
      { property: "og:title", content: "DataX for Hospitals" },
      {
        property: "og:description",
        content: "Workflow software for hospital data request teams.",
      },
    ],
  }),
  component: ForHospitals,
});

function ForHospitals() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="border-b hairline">
        <div className="container-x pt-20 md:pt-28 pb-16">
          <div className="max-w-3xl">
            <p className="label-eyebrow mb-6">For Hospitals</p>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-foreground">
              Operational software for hospital data teams.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              For university hospitals, medical informatics institutes, Data Integration Centres,
              research IT, and hospital data offices.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-5">
            <p className="label-eyebrow mb-4">In practice</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
              A shared view of requests in motion.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Stakeholders see the same picture: who submitted what, where it sits, what's missing,
              and who is responsible next.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-px bg-border border hairline">
              {[
                ["Intake", "minutes"],
                ["Visibility", "shared"],
                ["Audit", "complete"],
                ["Handoff", "controlled"],
              ].map(([k, v]) => (
                <div key={k} className="bg-background p-5">
                  <p className="label-eyebrow text-[9px] mb-2">{k}</p>
                  <p className="font-display text-xl text-foreground">{v}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-7">
            <WorkflowMock />
          </div>
        </div>
      </section>

      <section className="border-t hairline bg-surface/40">
        <div className="container-x py-24">
          <div className="grid md:grid-cols-2 gap-px bg-border border hairline">
            {[
              { t: "University hospitals", d: "Recurring research and data access requests." },
              { t: "Medical Informatics", d: "Structured coordination and feasibility prep." },
              { t: "Data Integration Centres", d: "Operational visibility across stakeholders." },
              { t: "Hospital data offices", d: "Traceable, governance-aware execution." },
            ].map((a) => (
              <div key={a.t} className="bg-background p-10">
                <h3 className="font-display text-2xl text-foreground mb-3">{a.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t hairline">
        <div className="container-x py-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h2 className="font-display text-3xl md:text-4xl text-foreground max-w-xl leading-tight">
            See it applied to your workflow.
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
