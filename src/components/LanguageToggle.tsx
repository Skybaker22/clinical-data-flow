import { Link, useRouterState } from "@tanstack/react-router";

export function LanguageToggle() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isGerman = pathname === "/de" || pathname.startsWith("/de/");

  return (
    <div
      className="inline-flex items-center rounded-md border hairline overflow-hidden text-xs font-mono"
      role="group"
      aria-label="Language"
    >
      <Link
        to="/"
        className={`px-2.5 py-1.5 transition-colors ${
          !isGerman
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-current={!isGerman ? "page" : undefined}
        hrefLang="en"
      >
        EN
      </Link>
      <Link
        to="/de"
        className={`px-2.5 py-1.5 transition-colors ${
          isGerman
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-current={isGerman ? "page" : undefined}
        hrefLang="de"
      >
        DE
      </Link>
    </div>
  );
}
