import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="border-b hairline bg-background/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="container-x flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-5 h-5 border border-foreground relative">
            <div className="absolute inset-1 bg-foreground" />
          </div>
          <span className="font-display text-lg tracking-tight">DataX</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link
            to="/product"
            className="text-muted-foreground hover:text-foreground transition-colors"
            activeProps={{ className: "text-foreground" }}
          >
            Product
          </Link>
          <Link
            to="/for-hospitals"
            className="text-muted-foreground hover:text-foreground transition-colors"
            activeProps={{ className: "text-foreground" }}
          >
            For Hospitals
          </Link>
          <Link
            to="/about"
            className="text-muted-foreground hover:text-foreground transition-colors"
            activeProps={{ className: "text-foreground" }}
          >
            About
          </Link>
        </nav>
        <Link to="/request-demo" className="btn-primary text-xs px-4 py-2">
          Request Demo
        </Link>
      </div>
    </header>
  );
}
