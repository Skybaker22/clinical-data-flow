import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="border-b hairline bg-background/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="container-x flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            Data<span className="text-brand">X</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="/#agent" className="text-muted-foreground hover:text-foreground transition-colors">
            Agent
          </a>
          <a href="/#workspace" className="text-muted-foreground hover:text-foreground transition-colors">
            Workspace
          </a>
          <a href="/#reasoning" className="text-muted-foreground hover:text-foreground transition-colors">
            How it reasons
          </a>
          <a href="/#audience" className="text-muted-foreground hover:text-foreground transition-colors">
            For hospitals
          </a>
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
