/**
 * Lightweight, CSS-only animated product visualizations.
 * Designed to sit inside the homepage product cards (3-column layout).
 * No external libs — purely keyframes from styles.css.
 */

/* 01 — Discovery Agent: typed prompt + criteria chips appearing + governance ✓ */
export function AgentMock() {
  return (
    <div className="font-mono text-[10px] space-y-2.5 select-none">
      <div className="rounded-sm border hairline bg-background/70 p-2.5">
        <div className="flex items-center gap-1.5 mb-1.5 text-muted-foreground">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[color:var(--color-brand)]" />
          <span>cohort prompt</span>
        </div>
        <div className="text-foreground leading-snug whitespace-nowrap overflow-hidden">
          <span
            className="inline-block overflow-hidden align-bottom whitespace-nowrap"
            style={{
              animation: "dx-type 3.4s steps(60, end) infinite",
            }}
          >
            Patients ≥ 65 · T2DM · HbA1c &gt; 7.5%
          </span>
          <span
            className="inline-block w-[1px] h-3 ml-0.5 align-middle bg-foreground"
            style={{ animation: "dx-caret 1s steps(1) infinite" }}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {[
          { label: "age ≥ 65", delay: "0.4s" },
          { label: "ICD E11", delay: "1.2s" },
          { label: "HbA1c", delay: "2s" },
        ].map((c) => (
          <span
            key={c.label}
            className="px-1.5 py-0.5 rounded-sm border hairline text-muted-foreground opacity-0"
            style={{
              animation: `dx-chip-in 0.5s ease-out ${c.delay} forwards`,
            }}
          >
            {c.label}
          </span>
        ))}
        <span
          className="px-1.5 py-0.5 rounded-sm font-medium opacity-0"
          style={{
            background:
              "color-mix(in oklab, var(--color-brand) 80%, transparent)",
            color: "oklch(0.18 0.02 200)",
            animation: "dx-chip-in 0.5s ease-out 2.6s forwards",
          }}
        >
          governance ✓
        </span>
      </div>
    </div>
  );
}

/* 02 — Discovery Workspace: variant feasibility bars growing + scan line */
export function WorkspaceMock() {
  const rows = [
    { name: "Variant A", score: 82, delay: "0.1s" },
    { name: "Variant B", score: 64, delay: "0.5s" },
    { name: "Variant C", score: 41, delay: "0.9s" },
  ];
  return (
    <div className="font-mono text-[10px] space-y-1.5 relative overflow-hidden rounded-sm">
      {/* Scan line */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-6 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent, color-mix(in oklab, var(--color-brand) 18%, transparent), transparent)",
          animation: "dx-scan 4.5s ease-in-out infinite",
        }}
      />
      {rows.map((r) => (
        <div
          key={r.name}
          className="rounded-sm border hairline bg-background/60 px-2 py-1.5 flex items-center gap-2 relative"
        >
          <span className="text-foreground w-14 shrink-0">{r.name}</span>
          <div className="flex-1 h-1.5 rounded-full bg-surface-2 overflow-hidden">
            <div
              className="h-full rounded-full origin-left"
              style={{
                ["--dx-w" as string]: `${r.score}%`,
                width: `${r.score}%`,
                background:
                  "linear-gradient(90deg, color-mix(in oklab, var(--color-brand) 60%, transparent), var(--color-brand))",
                animation: `dx-bar-grow 1.6s cubic-bezier(0.2, 0.8, 0.2, 1) ${r.delay} both`,
              }}
            />
          </div>
          <span className="text-muted-foreground w-9 text-right tabular-nums">
            {r.score}%
          </span>
        </div>
      ))}
    </div>
  );
}

/* 03 — Value: attrition funnel that fills in step-by-step */
export function ValueMock() {
  const stages = [
    { label: "Population", w: 100, n: "1,193", delay: "0.1s" },
    { label: "Age ≥ 65", w: 72, n: "859", delay: "0.5s" },
    { label: "T2DM", w: 38, n: "452", delay: "0.9s" },
    { label: "HbA1c > 7.5", w: 14, n: "168", delay: "1.3s" },
  ];
  return (
    <div className="font-mono text-[10px] space-y-1.5">
      {stages.map((s) => (
        <div key={s.label} className="flex items-center gap-2">
          <span className="text-muted-foreground w-16 shrink-0 truncate">
            {s.label}
          </span>
          <div className="flex-1 h-3 rounded-sm bg-surface-2/60 overflow-hidden relative">
            <div
              className="h-full origin-left rounded-sm"
              style={{
                width: `${s.w}%`,
                background:
                  "linear-gradient(90deg, color-mix(in oklab, var(--color-brand) 70%, transparent), color-mix(in oklab, var(--color-brand) 30%, transparent))",
                animation: `dx-funnel 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) ${s.delay} both`,
              }}
            />
          </div>
          <span className="text-foreground w-10 text-right tabular-nums">
            {s.n}
          </span>
        </div>
      ))}
    </div>
  );
}
