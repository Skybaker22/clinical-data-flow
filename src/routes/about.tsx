import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — DataX" },
      {
        name: "description",
        content: "DataX builds software for governed health data collaboration.",
      },
      { property: "og:title", content: "About DataX" },
      {
        property: "og:description",
        content: "Practical workflow infrastructure for hospitals.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="border-b hairline">
        <div className="container-x pt-20 md:pt-28 pb-20">
          <div className="max-w-3xl">
            <p className="label-eyebrow mb-6">About</p>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-foreground">
              About DataX.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              DataX builds software for governed health data collaboration.
            </p>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl">
              We focus on practical workflow infrastructure for hospitals handling research and
              data access requests.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-5">
            <p className="label-eyebrow mb-4">Principles</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
              How we think.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border border hairline">
          {[
            { t: "Hospital-centric", d: "Built around real hospital workflows." },
            { t: "Privacy-aware", d: "Designed for controlled environments." },
            { t: "Workflow-driven", d: "Focused on operational clarity." },
            { t: "Practical by design", d: "Built for real internal use." },
          ].map((p, i) => (
            <div key={p.t} className="bg-background p-10">
              <p className="font-mono text-[10px] text-muted-foreground mb-6">0{i + 1}</p>
              <h3 className="font-display text-2xl text-foreground mb-3">{p.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t hairline">
        <div className="container-x py-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h2 className="font-display text-3xl md:text-4xl text-foreground max-w-xl leading-tight">
            Talk to us.
          </h2>
          <Link to="/request-demo" className="btn-primary self-start md:self-auto">
            Request Demo
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
