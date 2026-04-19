import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/request-demo")({
  head: () => ({
    meta: [
      { title: "Request a Demo — DataX" },
      {
        name: "description",
        content: "Tell us a bit about your institution and current workflow.",
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
  const [submitted, setSubmitted] = useState(false);

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
          {submitted ? (
            <div className="border hairline rounded-sm p-10 bg-surface/50">
              <p className="label-eyebrow mb-3">Received</p>
              <h2 className="font-display text-2xl text-foreground mb-3">
                Thank you. We will get back to you shortly.
              </h2>
              <p className="text-sm text-muted-foreground">
                A member of the DataX team will reply to your work email.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-8"
            >
              <Field label="Name" name="name" required />
              <Field label="Institution" name="institution" required />
              <Field label="Role" name="role" />
              <Field label="Work email" name="email" type="email" required />
              <Field label="Message" name="message" textarea />

              <div className="pt-4">
                <button type="submit" className="btn-primary">Submit request</button>
              </div>
            </form>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const baseCls =
    "w-full bg-transparent border-0 border-b hairline focus:border-foreground outline-none py-2.5 text-foreground placeholder:text-muted-foreground/50 transition-colors";
  return (
    <label className="block">
      <span className="label-eyebrow block mb-2">
        {label} {required && <span className="text-foreground/40">*</span>}
      </span>
      {textarea ? (
        <textarea name={name} rows={4} className={baseCls} />
      ) : (
        <input type={type} name={name} required={required} className={baseCls} />
      )}
    </label>
  );
}
