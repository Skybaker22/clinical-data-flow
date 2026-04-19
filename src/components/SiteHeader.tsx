import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="relative z-10">
      <div className="container-x flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            Data<span className="text-brand">X</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/impressum" className="text-muted-foreground hover:text-foreground transition-colors">
            Impressum
          </Link>
          <Link to="/datenschutz" className="text-muted-foreground hover:text-foreground transition-colors">
            Datenschutz
          </Link>
        </nav>
        <a
          href="mailto:info@datax.me?subject=Demo%20request%20%E2%80%94%20DataX"
          className="btn-brand text-xs px-4 py-2"
        >
          Request Demo
        </a>
      </div>
    </header>
  );
}
