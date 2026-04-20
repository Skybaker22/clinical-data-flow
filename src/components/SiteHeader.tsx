import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/ThemeToggle";

export function SiteHeader() {
  return (
    <header className="relative z-10">
      <div className="container-x flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            Data<span className="text-brand">X</span>
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="mailto:info@datax.me?subject=Demo%20request%20%E2%80%94%20DataX"
            className="btn-brand text-xs px-4 py-2"
          >
            Request Demo
          </a>
        </div>
      </div>
    </header>
  );
}
