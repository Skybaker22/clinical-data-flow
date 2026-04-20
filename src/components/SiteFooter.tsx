import { Link, useRouterState } from "@tanstack/react-router";

const COPY = {
  en: {
    tagline: "Infrastructure for secure healthcare data collaboration",
    site: "Site",
    siteLinks: [
      { href: "/en#agent", label: "Agent" },
      { href: "/en#workspace", label: "Workspace" },
      { href: "/en#audience", label: "For hospitals" },
    ],
    legal: "Legal",
  },
  de: {
    tagline: "Infrastruktur für sichere Zusammenarbeit mit Gesundheitsdaten",
    site: "Seite",
    siteLinks: [
      { href: "/#agent", label: "Agent" },
      { href: "/#workspace", label: "Workspace" },
      { href: "/#audience", label: "Für Krankenhäuser" },
    ],
    legal: "Rechtliches",
  },
} as const;

export function SiteFooter() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const t = isEnglish ? COPY.en : COPY.de;

  return (
    <footer className="border-t hairline mt-32">
      <div className="container-x py-16">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <div className="mb-4">
              <span className="font-display text-xl font-bold tracking-tight text-foreground">
                Data<span className="text-brand">X</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              {t.tagline}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="label-eyebrow mb-4">{t.site}</p>
            <ul className="space-y-3 text-sm">
              {t.siteLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-muted-foreground hover:text-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="label-eyebrow mb-4">{t.legal}</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/impressum" className="text-muted-foreground hover:text-foreground">Impressum</Link></li>
              <li><Link to="/datenschutz" className="text-muted-foreground hover:text-foreground">Datenschutz</Link></li>
              <li><Link to="/cookie-hinweise" className="text-muted-foreground hover:text-foreground">Cookie-Hinweise</Link></li>
              <li><Link to="/agb" className="text-muted-foreground hover:text-foreground">AGB</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t hairline mt-16 pt-8 flex justify-center">
          <p className="text-xs text-muted-foreground font-mono text-center">
            © 2026 DataX UG (haftungsbeschränkt)
          </p>
        </div>
      </div>
    </footer>
  );
}
