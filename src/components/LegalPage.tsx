import { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export function LegalPage({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="border-b hairline">
        <div className="container-x pt-20 md:pt-28 pb-12">
          <div className="max-w-3xl">
            <p className="label-eyebrow mb-6">{eyebrow}</p>
            <h1 className="font-display text-4xl md:text-5xl leading-[1.05] text-foreground">
              {title}
            </h1>
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20 flex-1">
        <div className="max-w-3xl prose-legal">
          {children}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
