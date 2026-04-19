import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RequestIntakeMock } from "@/components/mockups/RequestIntakeMock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DataX — Structured workflows for governed clinical data requests" },
      {
        name: "description",
        content:
          "DataX helps hospitals handle research and data access requests through a clear, auditable, review-ready workflow.",
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
            <p className="label-eyebrow mb-6">DataX · Hospital workflow software</p>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-foreground">
              Structured workflows for governed clinical data requests.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              DataX helps hospitals handle research and data access requests through a clear,
              auditable, review-ready workflow.
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
            <RequestIntakeMock />
          </div>
        </div>
      </section>

      {/* What the product helps with */}
      <section className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-4">
            <p className="label-eyebrow mb-4">01 — Capabilities</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
              What the product helps with.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l hairline">
          {[
            { n: "01", t: "Request intake", d: "Capture unstructured requests in a clear format." },
            { n: "02", t: "Feasibility preparation", d: "Turn requests into reviewable inputs." },
            { n: "03", t: "Review coordination", d: "Support traceable stakeholder workflows." },
            { n: "04", t: "Secure handoff", d: "Prepare requests for controlled downstream handling." },
          ].map((b) => (
            <div key={b.n} className="border-r border-b hairline p-8 min-h-[200px]">
              <p className="font-mono text-[10px] text-muted-foreground tracking-wider mb-6">{b.n}</p>
              <h3 className="font-display text-xl text-foreground mb-3">{b.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y hairline bg-surface/40">
        <div className="container-x py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-4">
              <p className="label-eyebrow mb-4">02 — Workflow</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
                How it works.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-px bg-border">
            {[
              { n: "1", t: "Intake", d: "Receive a new request." },
              { n: "2", t: "Structure", d: "Organize the request into a usable format." },
              { n: "3", t: "Review", d: "Coordinate the relevant internal checks." },
              { n: "4", t: "Handoff", d: "Move forward in a traceable way." },
            ].map((s, i, a) => (
              <div key={s.n} className="bg-background p-8 relative">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-7 h-7 border border-foreground rounded-full flex items-center justify-center font-mono text-xs">
                    {s.n}
                  </span>
                  {i < a.length - 1 && (
                    <div className="hidden md:block flex-1 border-t border-dashed hairline" />
                  )}
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for */}
      <section className="container-x py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="label-eyebrow mb-6">03 — Audience</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight">
            Built for hospital research workflows.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Designed for teams handling recurring internal and external requests under governance
            constraints.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t hairline">
        <div className="container-x py-20 md:py-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="label-eyebrow mb-4">Get in touch</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight max-w-xl">
              Interested in the product?
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
