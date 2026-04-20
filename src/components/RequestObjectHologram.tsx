import type { ReactElement } from "react";

/**
 * RequestObjectHologram
 *
 * A calm, product-led "request object" visual for the homepage hero.
 * Four stacked, frosted glass layers showing how a hospital research
 * request is transformed into a governed, review-ready handoff.
 */

type Lang = "en" | "de";

const COPY = {
  en: {
    l4Label: "04 · Handoff",
    l4Title: "Review-ready dataset",
    pillDeident: "De-identified",
    pillSealed: "Audit sealed",
    l3Label: "03 · Review",
    l3Title: "Governance workflow",
    stepDpo: "DPO",
    stepEthics: "Ethics",
    stepCustodian: "Custodian",
    l2Label: "02 · Structured",
    l2Title: "Cohort criteria",
    chipAge: "Age ≥ 65",
    l1Label: "01 · Request",
    l1Title: "Plain-language question",
    l1Body:
      '"Patients with heart failure over 65, reduced ejection fraction, admitted in the last 24 months."',
  },
  de: {
    l4Label: "04 · Übergabe",
    l4Title: "Prüfungsbereiter Datensatz",
    pillDeident: "Pseudonymisiert",
    pillSealed: "Audit versiegelt",
    l3Label: "03 · Prüfung",
    l3Title: "Governance-Workflow",
    stepDpo: "DSB",
    stepEthics: "Ethik",
    stepCustodian: "Datentreuhand",
    l2Label: "02 · Strukturiert",
    l2Title: "Kohortenkriterien",
    chipAge: "Alter ≥ 65",
    l1Label: "01 · Anfrage",
    l1Title: "Frage in natürlicher Sprache",
    l1Body:
      '„Patient:innen mit Herzinsuffizienz über 65, reduzierter Ejektionsfraktion, in den letzten 24 Monaten aufgenommen."',
  },
} as const;

function Connector({ index, delay }: { index: number; delay: string }) {
  const top = (index + 1) * 78 - 18;
  const z = -(index * 60 + 30);
  return (
    <div
      aria-hidden
      className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
      style={{
        top: `${top}px`,
        height: "36px",
        width: "1px",
        transform: `translate3d(-50%, 0, ${z}px)`,
        background:
          "linear-gradient(to bottom, transparent 0%, color-mix(in oklab, var(--color-foreground) 22%, transparent) 30%, color-mix(in oklab, var(--color-foreground) 22%, transparent) 70%, transparent 100%)",
        overflow: "hidden",
      }}
    >
      <span
        className="absolute left-1/2 -translate-x-1/2 block"
        style={{
          top: 0,
          width: "3px",
          height: "8px",
          borderRadius: "2px",
          background:
            "linear-gradient(to bottom, transparent, var(--color-brand), transparent)",
          filter: "blur(0.4px)",
          animation: `ROH-flow 3.4s ease-in-out ${delay} infinite`,
        }}
      />
    </div>
  );
}

export function RequestObjectHologram({ lang = "en" }: { lang?: Lang } = {}): ReactElement {
  const t = COPY[lang];
  return (
    <div
      aria-hidden
      className="relative w-full h-full min-h-[480px] flex items-center justify-center select-none"
      style={{ perspective: "1800px" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(55% 50% at 60% 45%, color-mix(in oklab, var(--color-brand) 10%, transparent) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, var(--color-foreground) 14%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--color-foreground) 14%, transparent) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 70% 65% at 55% 50%, black 35%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 65% at 55% 50%, black 35%, transparent 85%)",
        }}
      />

      <div
        className="relative w-[400px] max-w-full ml-auto translate-x-[150px] -translate-y-[70px]"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(22deg) rotateY(-14deg) rotateZ(0deg)",
          animation: "ROH-float 9s ease-in-out infinite",
        }}
      >
        <Connector index={0} delay="0s" />
        <Connector index={1} delay="1.1s" />
        <Connector index={2} delay="2.2s" />

        <Layer index={3} label={t.l4Label} title={t.l4Title} accent="ready">
          <div className="flex items-center gap-2">
            <Pill>{t.pillDeident}</Pill>
            <Pill>{t.pillSealed}</Pill>
          </div>
          <div className="mt-2.5 flex items-center justify-between">
            <span className="text-[10px] tracking-wide text-foreground/60">
              SHA · 9f3a…b21c
            </span>
            <Dot tone="ready" pulse />
          </div>
        </Layer>

        <Layer index={2} label={t.l3Label} title={t.l3Title} accent="review">
          <div className="grid grid-cols-3 gap-1.5">
            <Step label={t.stepDpo} state="done" />
            <Step label={t.stepEthics} state="done" />
            <Step label={t.stepCustodian} state="active" />
          </div>
        </Layer>

        <Layer index={1} label={t.l2Label} title={t.l2Title} accent="info">
          <div className="flex flex-wrap gap-1.5">
            <Chip>ICD-10 · I50.*</Chip>
            <Chip>{t.chipAge}</Chip>
            <Chip>LVEF &lt; 40%</Chip>
          </div>
          <div className="mt-2.5 flex items-center justify-between">
            <Window />
            <span className="text-[10px] tabular-nums text-foreground/55">
              n ≈ 1.284
            </span>
          </div>
        </Layer>

        <Layer index={0} label={t.l1Label} title={t.l1Title} accent="muted">
          <p className="text-[11px] leading-snug text-foreground/70">{t.l1Body}</p>
        </Layer>
      </div>

      <style>{`
        @keyframes ROH-float {
          0%, 100% { transform: rotateX(22deg) rotateY(-14deg) translateY(0px); }
          50%      { transform: rotateX(22deg) rotateY(-14deg) translateY(-6px); }
        }
        @keyframes ROH-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.55; transform: scale(0.85); }
        }
        @keyframes ROH-flow {
          0%   { transform: translateY(-100%); opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

/* ─────────── Subcomponents ─────────── */

type Accent = "muted" | "info" | "review" | "ready";

function Layer({
  index,
  label,
  title,
  accent,
  children,
}: {
  index: number;
  label: string;
  title: string;
  accent: Accent;
  children: React.ReactNode;
}) {
  const offsetY = index * 78;
  const z = -index * 60;
  const accentColor =
    accent === "ready"
      ? "var(--color-brand)"
      : accent === "review"
      ? "var(--color-status-active)"
      : accent === "info"
      ? "var(--color-status-active)"
      : "color-mix(in oklab, var(--color-foreground) 35%, transparent)";

  return (
    <div
      className="absolute left-1/2 top-0 -translate-x-1/2 w-[360px] rounded-md"
      style={{
        transform: `translate3d(-50%, ${offsetY}px, ${z}px)`,
        background:
          "linear-gradient(180deg, color-mix(in oklab, var(--color-foreground) 6%, transparent) 0%, color-mix(in oklab, var(--color-foreground) 2%, transparent) 100%)",
        backdropFilter: "blur(14px) saturate(120%)",
        WebkitBackdropFilter: "blur(14px) saturate(120%)",
        border: "1px solid color-mix(in oklab, var(--color-foreground) 12%, transparent)",
        boxShadow: [
          "inset 0 1px 0 color-mix(in oklab, white 8%, transparent)",
          "inset 0 -1px 0 color-mix(in oklab, black 30%, transparent)",
          `0 ${10 + index * 4}px ${28 + index * 6}px -12px color-mix(in oklab, black 60%, transparent)`,
        ].join(", "),
      }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, color-mix(in oklab, ${accentColor} 60%, transparent), transparent)`,
        }}
      />

      <div className="px-4 pt-3 pb-3.5">
        <div className="flex items-center justify-between mb-2">
          <span
            className="text-[9.5px] tracking-[0.14em] uppercase font-mono"
            style={{ color: "color-mix(in oklab, var(--color-foreground) 55%, transparent)" }}
          >
            {label}
          </span>
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ background: accentColor, opacity: 0.85 }}
          />
        </div>

        <h4 className="text-[12.5px] font-display text-foreground/90 leading-tight mb-2">
          {title}
        </h4>

        {children}
      </div>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-mono tabular-nums"
      style={{
        background: "color-mix(in oklab, var(--color-foreground) 5%, transparent)",
        border: "1px solid color-mix(in oklab, var(--color-foreground) 14%, transparent)",
        color: "color-mix(in oklab, var(--color-foreground) 78%, transparent)",
      }}
    >
      {children}
    </span>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px]"
      style={{
        background: "color-mix(in oklab, var(--color-brand) 12%, transparent)",
        border: "1px solid color-mix(in oklab, var(--color-brand) 35%, transparent)",
        color: "color-mix(in oklab, var(--color-foreground) 85%, transparent)",
      }}
    >
      <span
        className="inline-block w-1 h-1 rounded-full"
        style={{ background: "var(--color-brand)" }}
      />
      {children}
    </span>
  );
}

function Step({ label, state }: { label: string; state: "done" | "active" | "pending" }) {
  const tone =
    state === "done"
      ? "var(--color-status-done)"
      : state === "active"
      ? "var(--color-status-active)"
      : "color-mix(in oklab, var(--color-foreground) 25%, transparent)";

  return (
    <div
      className="flex items-center gap-1.5 px-1.5 py-1 rounded-sm"
      style={{
        background: "color-mix(in oklab, var(--color-foreground) 4%, transparent)",
        border: "1px solid color-mix(in oklab, var(--color-foreground) 10%, transparent)",
      }}
    >
      <span
        className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
        style={{
          background: tone,
          animation: state === "active" ? "ROH-pulse 2.2s ease-in-out infinite" : undefined,
        }}
      />
      <span className="text-[10px] text-foreground/75 truncate">{label}</span>
    </div>
  );
}

function Dot({ tone, pulse }: { tone: "ready"; pulse?: boolean }) {
  const color = tone === "ready" ? "var(--color-brand)" : "var(--color-foreground)";
  return (
    <span
      className="inline-block w-1.5 h-1.5 rounded-full"
      style={{
        background: color,
        animation: pulse ? "ROH-pulse 2.4s ease-in-out infinite" : undefined,
      }}
    />
  );
}

function Window() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-[9.5px] font-mono text-foreground/55">2022</span>
      <span
        className="inline-block w-14 h-px"
        style={{ background: "color-mix(in oklab, var(--color-foreground) 30%, transparent)" }}
      />
      <span className="text-[9.5px] font-mono text-foreground/55">2024</span>
    </div>
  );
}
