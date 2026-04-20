/**
 * High-fidelity, CSS-only product mockups for the homepage cards.
 * - AgentMock: Discovery Agent intake
 * - WorkspaceMock: Discovery Workspace feasibility view
 * - ValueMock: Cohort Attrition Funnel
 *
 * All copy is driven by a `lang` prop ("en" | "de").
 */

type Lang = "en" | "de";

const AGENT_COPY = {
  en: {
    prompt: "What would you like to study?",
    sub: "Describe your patient cohort in plain language.",
    typed: "Patients ≥ 65 · T2DM · HbA1c > 7.5%",
    run: "▶ Run",
    tiles: [
      { icon: "⌕", title: "Scan sources", sub: "Connected DBs" },
      { icon: "≡", title: "Feasibility", sub: "Cohort + quality" },
      { icon: "✓", title: "Governance", sub: "Compliance" },
    ],
  },
  de: {
    prompt: "Was möchten Sie untersuchen?",
    sub: "Beschreiben Sie Ihre Patientenkohorte in natürlicher Sprache.",
    typed: "Patient:innen ≥ 65 · T2DM · HbA1c > 7,5 %",
    run: "▶ Start",
    tiles: [
      { icon: "⌕", title: "Quellen scannen", sub: "Verbundene DBs" },
      { icon: "≡", title: "Machbarkeit", sub: "Kohorte + Qualität" },
      { icon: "✓", title: "Governance", sub: "Compliance" },
    ],
  },
} as const;

/* -------------------------------------------------------------------------- */
/* 01 — Discovery Agent                                                        */
/* -------------------------------------------------------------------------- */
export function AgentMock({ lang = "en" }: { lang?: Lang } = {}) {
  const t = AGENT_COPY[lang];
  // Keep the original English `>` glyph rendered as text where needed
  const typedText = t.typed;
  return (
    <div className="w-full rounded-md border hairline bg-background/80 p-4 text-[11px] font-sans select-none shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] flex flex-col min-h-[260px]">
      <div className="text-center mb-3">
        <div
          className="mx-auto mb-2 w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: "color-mix(in oklab, var(--color-brand) 22%, transparent)",
            border: "1px solid color-mix(in oklab, var(--color-brand) 55%, transparent)",
          }}
        >
          <span className="text-[12px]" style={{ color: "var(--color-brand)" }}>✦</span>
        </div>
        <p className="text-foreground font-medium leading-tight text-[12px]">{t.prompt}</p>
        <p className="text-muted-foreground text-[10px] mt-1 leading-snug">{t.sub}</p>
      </div>

      <div className="rounded-sm border hairline bg-surface/60 px-2.5 py-2 flex items-center gap-2 mb-3">
        <span className="text-muted-foreground font-mono text-[10px] shrink-0">›</span>
        <span className="flex-1 text-foreground whitespace-nowrap overflow-hidden text-[10px]">
          <span
            className="inline-block overflow-hidden align-bottom whitespace-nowrap"
            style={{ animation: "dx-type 3.4s steps(60, end) infinite" }}
          >
            {typedText}
          </span>
          <span
            className="inline-block w-[1px] h-3 ml-0.5 align-middle bg-foreground"
            style={{ animation: "dx-caret 1s steps(1) infinite" }}
          />
        </span>
        <span
          className="px-2 py-0.5 rounded-sm text-[9px] font-semibold shrink-0"
          style={{ background: "var(--color-brand)", color: "oklch(0.18 0.02 200)" }}
        >
          {t.run}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-[9px]">
        {t.tiles.map((tile, i) => (
          <div
            key={tile.title}
            className="rounded-sm border hairline bg-surface/40 p-2 opacity-0"
            style={{ animation: `dx-chip-in 0.6s ease-out ${0.4 + i * 0.4}s forwards` }}
          >
            <div className="flex items-center gap-1 mb-1">
              <span style={{ color: "var(--color-brand)" }}>{tile.icon}</span>
              <span className="text-foreground font-medium">{tile.title}</span>
            </div>
            <p className="text-muted-foreground leading-snug">{tile.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 02 — Discovery Workspace                                                    */
/* -------------------------------------------------------------------------- */
const WORKSPACE_COPY = {
  en: {
    title: "Discovery Workspace",
    query: "Patients ≥65 · T2DM · HbA1c >7.0",
    rerun: "▶ Re-run",
    variants: [
      { name: "Balanced Core", pct: 40, count: "2 patients", active: true },
      { name: "Strict Clinical", pct: 39, count: "1 patient", active: false },
      { name: "Broad Screening", pct: 78, count: "+96", active: false },
    ],
    feasibility: "Feasibility Score",
    metrics: [
      { label: "Cohort Yield", v: 30, delay: "0.1s" },
      { label: "Evidence Support", v: 26, delay: "0.4s" },
      { label: "Criteria Clarity", v: 60, delay: "0.7s" },
      { label: "Site Spread", v: 28, delay: "1.0s" },
    ],
  },
  de: {
    title: "Discovery Workspace",
    query: "Patient:innen ≥65 · T2DM · HbA1c >7,0",
    rerun: "▶ Neu starten",
    variants: [
      { name: "Ausgewogen", pct: 40, count: "2 Patient:innen", active: true },
      { name: "Streng klinisch", pct: 39, count: "1 Patient:in", active: false },
      { name: "Breites Screening", pct: 78, count: "+96", active: false },
    ],
    feasibility: "Machbarkeits-Score",
    metrics: [
      { label: "Kohorten-Yield", v: 30, delay: "0.1s" },
      { label: "Evidenzbasis", v: 26, delay: "0.4s" },
      { label: "Kriterienklarheit", v: 60, delay: "0.7s" },
      { label: "Standortverteilung", v: 28, delay: "1.0s" },
    ],
  },
} as const;

export function WorkspaceMock({ lang = "en" }: { lang?: Lang } = {}) {
  const t = WORKSPACE_COPY[lang];
  return (
    <div className="w-full rounded-md border hairline bg-background/80 p-4 text-[11px] font-sans select-none shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] relative overflow-hidden flex flex-col min-h-[260px]">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent, color-mix(in oklab, var(--color-brand) 14%, transparent), transparent)",
          animation: "dx-scan 5s ease-in-out infinite",
        }}
      />

      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-foreground font-semibold leading-none text-[12px]">{t.title}</p>
          <p className="text-muted-foreground text-[10px] mt-1 font-mono truncate max-w-[200px]">
            {t.query}
          </p>
        </div>
        <span
          className="px-2 py-0.5 rounded-sm text-[9px] font-semibold"
          style={{ background: "var(--color-brand)", color: "oklch(0.18 0.02 200)" }}
        >
          {t.rerun}
        </span>
      </div>

      <div className="flex gap-1.5 mb-3 text-[9px]">
        {t.variants.map((v) => (
          <div
            key={v.name}
            className={`flex-1 rounded-sm border hairline px-2 py-1.5 leading-tight ${v.active ? "bg-surface" : ""}`}
            style={
              v.active
                ? { borderColor: "color-mix(in oklab, var(--color-brand) 60%, transparent)" }
                : undefined
            }
          >
            <div className="flex items-center gap-1">
              <span className="font-bold tabular-nums text-[11px]" style={{ color: "var(--color-brand)" }}>
                {v.pct}%
              </span>
            </div>
            <p className="text-foreground font-medium mt-0.5 truncate">{v.name}</p>
            <p className="text-muted-foreground text-[8px] mt-0.5">{v.count}</p>
          </div>
        ))}
      </div>

      <div className="rounded-sm border hairline bg-surface/40 p-2.5">
        <div className="flex items-center justify-between mb-2">
          <p className="text-foreground font-medium text-[10px]">{t.feasibility}</p>
          <span className="text-[16px] font-bold tabular-nums" style={{ color: "var(--color-brand)" }}>
            40%
          </span>
        </div>
        <div className="space-y-1.5">
          {t.metrics.map((m) => (
            <div key={m.label} className="flex items-center gap-2 text-[9px]">
              <span className="text-muted-foreground w-24 truncate shrink-0">{m.label}</span>
              <div className="flex-1 h-1.5 rounded-full bg-surface-2 overflow-hidden">
                <div
                  className="h-full rounded-full origin-left"
                  style={{
                    width: `${m.v}%`,
                    background:
                      "linear-gradient(90deg, color-mix(in oklab, var(--color-brand) 50%, transparent), var(--color-brand))",
                    animation: `dx-bar-grow 1.6s cubic-bezier(0.2,0.8,0.2,1) ${m.delay} both`,
                  }}
                />
              </div>
              <span className="text-foreground tabular-nums w-6 text-right">{m.v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 03 — Cohort Attrition Funnel                                                */
/* -------------------------------------------------------------------------- */
const VALUE_COPY = {
  en: {
    title: "Cohort Attrition Funnel",
    stagesLabel: "4 stages",
    stages: [
      { label: "Dataset population", w: 100, n: "1,193", delay: "0.1s", drop: "" },
      { label: "Age ≥ 65", w: 72, n: "859", delay: "0.5s", drop: "−28%" },
      { label: "Diagnosis: Diabetes", w: 38, n: "452", delay: "0.9s", drop: "−47%" },
      { label: "HbA1c > 7.0", w: 14, n: "168", delay: "1.3s", drop: "−63%" },
    ],
    finalLabel: "Final cohort",
    finalValue: "168 patients · 86% attrition",
  },
  de: {
    title: "Kohorten-Eingrenzung",
    stagesLabel: "4 Stufen",
    stages: [
      { label: "Ausgangspopulation", w: 100, n: "1.193", delay: "0.1s", drop: "" },
      { label: "Alter ≥ 65", w: 72, n: "859", delay: "0.5s", drop: "−28 %" },
      { label: "Mit Diabetesdiagnose", w: 38, n: "452", delay: "0.9s", drop: "−47 %" },
      { label: "HbA1c > 7,0", w: 14, n: "168", delay: "1.3s", drop: "−63 %" },
    ],
    finalLabel: "Finale Kohorte",
    finalValue: "168 Patient:innen · 86 % Reduktion",
  },
} as const;

export function ValueMock({ lang = "en" }: { lang?: Lang } = {}) {
  const t = VALUE_COPY[lang];
  return (
    <div className="w-full rounded-md border hairline bg-background/80 p-4 text-[11px] font-sans select-none shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] flex flex-col min-h-[260px]">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span style={{ color: "var(--color-brand)" }}>⏷</span>
          <p className="text-foreground font-semibold text-[12px]">{t.title}</p>
        </div>
        <span className="text-muted-foreground font-mono text-[10px]">{t.stagesLabel}</span>
      </div>

      <div className="space-y-2.5">
        {t.stages.map((s) => (
          <div key={s.label}>
            <div className="flex items-center justify-between mb-1 text-[9px]">
              <span className="text-muted-foreground">{s.label}</span>
              <span className="text-muted-foreground font-mono">{s.drop}</span>
            </div>
            <div className="flex-1 h-4 rounded-sm bg-surface-2/60 overflow-hidden">
              <div
                className="h-full rounded-sm flex items-center justify-end pr-2"
                style={{
                  width: `${s.w}%`,
                  background:
                    "linear-gradient(90deg, color-mix(in oklab, var(--color-brand) 65%, transparent), color-mix(in oklab, var(--color-brand) 30%, transparent))",
                  animation: `dx-funnel 1.2s cubic-bezier(0.2,0.8,0.2,1) ${s.delay} both`,
                }}
              >
                <span className="text-[9px] font-bold tabular-nums text-foreground">{s.n}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 pt-2.5 border-t hairline flex items-center justify-between text-[9px]">
        <span className="text-muted-foreground">{t.finalLabel}</span>
        <span className="font-bold tabular-nums" style={{ color: "var(--color-brand)" }}>
          {t.finalValue}
        </span>
      </div>
    </div>
  );
}
