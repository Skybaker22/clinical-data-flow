import { Link, useRouterState } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isGerman = pathname === "/de" || pathname.startsWith("/de/");
  const ctaLabel = isGerman ? "Demo anfragen" : "Request Demo";
  const ctaSubject = isGerman
    ? "Demo-Anfrage%20%E2%80%94%20DataX"
    : "Demo%20request%20%E2%80%94%20DataX";

  return (
    <header className="relative z-10">
      <div className="container-x flex items-center justify-between h-16">
        <Link to={isGerman ? "/de" : "/"} className="flex items-center">
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            Data<span className="text-brand">X</span>
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <a
            href={`mailto:info@datax.me?subject=${ctaSubject}`}
            className="btn-brand text-xs px-4 py-2"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
