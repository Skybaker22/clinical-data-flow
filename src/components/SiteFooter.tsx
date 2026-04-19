import { Link } from "@tanstack/react-router";

export function SiteFooter() {
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
              Infrastructure for secure healthcare data collaboration
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="label-eyebrow mb-4">Site</p>
            <ul className="space-y-3 text-sm">
              <li><a href="/#agent" className="text-muted-foreground hover:text-foreground">Agent</a></li>
              <li><a href="/#workspace" className="text-muted-foreground hover:text-foreground">Workspace</a></li>
              <li><a href="/#audience" className="text-muted-foreground hover:text-foreground">For hospitals</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="label-eyebrow mb-4">Legal</p>
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
