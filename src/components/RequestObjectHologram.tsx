import type { ReactElement } from "react";

/**
 * RequestObjectHologram
 *
 * A calm, product-led "request object" visual for the homepage hero.
 * Four stacked, frosted glass layers showing how a hospital research
 * request is transformed into a governed, review-ready handoff.
 *
 * Design constraints:
 *  - Clinical, precise, hospital-grade
 *  - Frosted glass + thin grid lines + soft depth
 *  - Muted blue-grey accents, no rainbow / cyberpunk
 *  - Restrained motion (gentle float + subtle status pulse only)
 */
export function RequestObjectHologram(): ReactElement {
  return (
    <div
      aria-hidden
      className="relative w-full h-full min-h-[480px] flex items-center justify-center select-none"
      style={{ perspective: "1800px" }}
    >
      {/* Soft ambient halo — very restrained */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(55% 50% at 60% 45%, color-mix(in oklab, var(--color-brand) 10%, transparent) 0%, transparent 70%)",
        }}
      />

      {/* Faint baseline grid — clinical reference */}
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

      {/* Stack — gently floating */}
      <div
        className="relative w-[400px] max-w-full"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(22deg) rotateY(-14deg) rotateZ(0deg)",
          animation: "ROH-float 9s ease-in-out infinite",
        }}
      >
        {/* Connectors between layers — subtle vertical flow with traveling pulse */}
        <Connector index={0} delay="0s" />
        <Connector index={1} delay="1.1s" />
        <Connector index={2} delay="2.2s" />

        {/* Layer 4 — Review-ready handoff (deepest) */}
        <Layer
          index={3}
          label="04 · Handoff"
          title="Review-ready dataset"
          accent="ready"
        >
          <div className="flex items-center gap-2">
            <Pill>De-identified</Pill>
            <Pill>Audit sealed</Pill>
          </div>
          <div className="mt-2.5 flex items-center justify-between">
            <span className="text-[10px] tracking-wide text-foreground/60">
              SHA · 9f3a…b21c
            </span>
            <Dot tone="ready" pulse />
          </div>
        </Layer>

        {/* Layer 3 — Review workflow / approvals */}
        <Layer
          index={2}
          label="03 · Review"
          title="Governance workflow"
          accent="review"
        >
          <div className="grid grid-cols-3 gap-1.5">
            <Step label="DPO" state="done" />
            <Step label="Ethics" state="done" />
            <Step label="Custodian" state="active" />
          </div>
        </Layer>

        {/* Layer 2 — Structured criteria */}
        <Layer
          index={1}
          label="02 · Structured"
          title="Cohort criteria"
          accent="info"
        >
          <div className="flex flex-wrap gap-1.5">
            <Chip>ICD-10 · I50.*</Chip>
            <Chip>Age ≥ 65</Chip>
            <Chip>LVEF &lt; 40%</Chip>
          </div>
          <div className="mt-2.5 flex items-center justify-between">
            <Window />
            <span className="text-[10px] tabular-nums text-foreground/55">
              n ≈ 1,284
            </span>
          </div>
        </Layer>

        {/* Layer 1 — Unstructured request (top) */}
        <Layer
          index={0}
          label="01 · Request"
          title="Plain-language question"
          accent="muted"
        >
          <p className="text-[11px] leading-snug text-foreground/70">
            "Patients with heart failure over 65, reduced ejection fraction,
            admitted in the last 24 months."
          </p>
        </Layer>
      </div>

      {/* Local keyframes — restrained */}
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
  // Stack offsets — deeper layers sit lower & further back
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
      {/* Top hairline accent */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, color-mix(in oklab, ${accentColor} 60%, transparent), transparent)`,
        }}
      />

      <div className="px-4 pt-3 pb-3.5">
        {/* Header row */}
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
