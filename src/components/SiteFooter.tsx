import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t hairline mt-32">
      <div className="container-x py-16">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 border border-foreground relative">
                <div className="absolute inset-1 bg-foreground" />
              </div>
              <span className="font-display text-lg tracking-tight">DataX</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Infrastructure for secure healthcare data collaboration.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="label-eyebrow mb-4">Product</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/product" className="text-muted-foreground hover:text-foreground">Product</Link></li>
              <li><Link to="/for-hospitals" className="text-muted-foreground hover:text-foreground">For Hospitals</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link to="/request-demo" className="text-muted-foreground hover:text-foreground">Request Demo</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="label-eyebrow mb-4">Legal</p>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Impressum</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Datenschutz</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Cookie-Hinweise</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Cookie-Einstellungen</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">AGB</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t hairline mt-16 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            © 2026 DataX UG (haftungsbeschränkt) i.G.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Made for hospital workflows.
          </p>
        </div>
      </div>
    </footer>
  );
}
