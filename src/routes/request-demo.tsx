import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/request-demo")({
  head: () => ({
    meta: [
      { title: "Request a Demo — DataX" },
      {
        name: "description",
        content: "Get in touch with the DataX team about hospital data request workflows.",
      },
      { property: "og:title", content: "Request a DataX Demo" },
      {
        property: "og:description",
        content: "Talk to the DataX team about hospital data request workflows.",
      },
    ],
  }),
  component: RequestDemo,
});

function RequestDemo() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="border-b hairline">
        <div className="container-x pt-20 md:pt-28 pb-12">
          <div className="max-w-2xl">
            <p className="label-eyebrow mb-6">Request a demo</p>
            <h1 className="font-display text-4xl md:text-5xl leading-[1.05] text-foreground">
              Request a demo.
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Tell us a bit about your institution and current workflow.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20 flex-1">
        <div className="max-w-2xl">
          <div className="border hairline rounded-sm p-10 bg-surface/50">
            <p className="label-eyebrow mb-3">Get in touch</p>
            <h2 className="font-display text-2xl text-foreground mb-4">
              Write to the DataX team directly.
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Send us a short note about your institution, role, and current workflow.
              A member of the team will reply to your work email.
            </p>
            <a
              href="mailto:info@datax.me?subject=Demo%20request%20%E2%80%94%20DataX"
              className="btn-brand"
            >
              info@datax.me
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
