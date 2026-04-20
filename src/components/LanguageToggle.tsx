import { Link, useRouterState } from "@tanstack/react-router";

export function LanguageToggle() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");

  return (
    <div
      className="inline-flex items-center rounded-md border hairline overflow-hidden text-xs font-mono"
      role="group"
      aria-label="Language"
    >
      <Link
        to="/"
        className={`px-2.5 py-1.5 transition-colors ${
          !isEnglish
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-current={!isEnglish ? "page" : undefined}
        hrefLang="de"
      >
        DE
      </Link>
      <Link
        to="/en"
        className={`px-2.5 py-1.5 transition-colors ${
          isEnglish
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-current={isEnglish ? "page" : undefined}
        hrefLang="en"
      >
        EN
      </Link>
    </div>
  );
}
