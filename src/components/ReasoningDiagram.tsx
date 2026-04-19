const layers = [
  {
    n: "01",
    title: "Resolve ambiguity",
    sub: "Clarify clinical intent",
    detail:
      "Plain-language questions become precise, reviewable criteria — codes, time windows, and inclusion logic.",
  },
  {
    n: "02",
    title: "Build cohort logic",
    sub: "Model criteria, trajectory and variants",
    detail:
      "The agent assembles deterministic cohort definitions and explores variants for feasibility and attrition.",
  },
  {
    n: "03",
    title: "Surface protected signals",
    sub: "Turn text into privacy-protected cohort features",
    detail:
      "Clinical text is converted into governed, privacy-preserving features ready for downstream analysis.",
  },
];

export function ReasoningDiagram() {
  return (
    <div className="grid md:grid-cols-3 gap-px bg-border border hairline">
      {layers.map((l) => (
        <div key={l.n} className="bg-background p-8 md:p-10 flex flex-col gap-5">
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
              LAYER {l.n}
            </span>
            <span
              aria-hidden
              className="h-px flex-1 ml-4 bg-gradient-to-r from-border to-transparent"
            />
          </div>

          <LayerGlyph index={l.n} />

          <div>
            <h3 className="font-display text-xl text-foreground leading-snug">
              {l.title}
            </h3>
            <p className="mt-1 text-sm text-brand font-mono">{l.sub}</p>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{l.detail}</p>
        </div>
      ))}
    </div>
  );
}

function LayerGlyph({ index }: { index: string }) {
  // Minimal, scientific SVG — three stacked discs that emphasize the active layer.
  const active = parseInt(index, 10);
  return (
    <svg
      viewBox="0 0 160 110"
      className="w-28 h-20"
      role="img"
      aria-hidden
    >
      <defs>
        <linearGradient id={`brand-${index}`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="var(--color-brand)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--color-brand)" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      {[0, 1, 2].map((i) => {
        const isActive = i + 1 === active;
        const y = 18 + i * 30;
        return (
          <g key={i}>
            <ellipse
              cx="80"
              cy={y + 10}
              rx="56"
              ry="9"
              fill={isActive ? `url(#brand-${index})` : "transparent"}
              stroke="var(--color-border-strong)"
              strokeWidth="1"
            />
            <ellipse
              cx="80"
              cy={y}
              rx="56"
              ry="9"
              fill="var(--color-background)"
              stroke="var(--color-border-strong)"
              strokeWidth="1"
            />
            <path
              d={`M24 ${y} v10 M136 ${y} v10`}
              stroke="var(--color-border-strong)"
              strokeWidth="1"
              fill="none"
            />
          </g>
        );
      })}
    </svg>
  );
}
