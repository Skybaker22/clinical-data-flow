import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "datax-cookie-consent";

type Consent = "all" | "necessary" | "rejected";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const choose = (value: Consent) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ value, ts: new Date().toISOString() }),
      );
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-Einstellungen"
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 md:pb-6"
    >
      <div className="container-x">
        <div className="ml-auto max-w-2xl rounded-lg border hairline bg-background/95 backdrop-blur shadow-lg p-5 md:p-6">
          <div className="flex flex-col gap-4">
            <div>
              <p className="label-eyebrow mb-2">Cookies</p>
              <h2 className="font-display text-lg text-foreground mb-2">
                Wir respektieren deine Privatsphäre.
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Wir verwenden notwendige Cookies, damit die Seite funktioniert. Mit
                deiner Zustimmung nutzen wir zusätzlich Cookies für Analyse und
                Reichweitenmessung. Mehr in den{" "}
                <Link
                  to="/cookie-hinweise"
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  Cookie-Hinweisen
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
              <button
                type="button"
                onClick={() => choose("rejected")}
                className="btn-ghost text-sm"
              >
                Ablehnen
              </button>
              <button
                type="button"
                onClick={() => choose("necessary")}
                className="btn-ghost text-sm"
              >
                Nur notwendige
              </button>
              <button
                type="button"
                onClick={() => choose("all")}
                className="btn-primary text-sm"
              >
                Akzeptieren
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
