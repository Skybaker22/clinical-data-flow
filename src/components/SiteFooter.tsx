import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t hairline mt-32">
      <div className="container-x py-16">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="mb-4">
              <span className="font-display text-xl font-bold tracking-tight text-foreground">
                Data<span className="text-brand">X</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Infrastructure for secure healthcare data collaboration.
            </p>
            <a
              href="mailto:info@datax.me"
              className="inline-block mt-4 text-sm text-foreground hover:text-brand transition-colors font-mono"
            >
              info@datax.me
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="label-eyebrow mb-4">Product</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/product" className="text-muted-foreground hover:text-foreground">Product</Link></li>
              <li><Link to="/for-hospitals" className="text-muted-foreground hover:text-foreground">For Hospitals</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li>
                <a
                  href="mailto:info@datax.me?subject=Demo%20request%20%E2%80%94%20DataX"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Request Demo
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="label-eyebrow mb-4">Legal</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/impressum" className="text-muted-foreground hover:text-foreground">Impressum</Link></li>
              <li><Link to="/datenschutz" className="text-muted-foreground hover:text-foreground">Datenschutz</Link></li>
              <li><Link to="/cookie-hinweise" className="text-muted-foreground hover:text-foreground">Cookie-Hinweise</Link></li>
              <li><Link to="/agb" className="text-muted-foreground hover:text-foreground">AGB</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t hairline mt-16 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            © 2026 DataX UG (haftungsbeschränkt)
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Made for hospital workflows.
          </p>
        </div>
      </div>
    </footer>
  );
}
