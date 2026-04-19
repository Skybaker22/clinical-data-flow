export function AgentMock() {
  return (
    <div className="space-y-2 font-mono text-[10px]">
      <div className="rounded border hairline bg-background/80 p-2.5">
        <p className="text-muted-foreground mb-1">› cohort prompt</p>
        <p className="text-foreground leading-snug">
          Patients ≥ 65 with Type 2 Diabetes, HbA1c &gt; 7.5%, on metformin, last 24 mo.
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5">
        <span className="px-1.5 py-0.5 rounded-sm border hairline text-muted-foreground">age ≥ 65</span>
        <span className="px-1.5 py-0.5 rounded-sm border hairline text-muted-foreground">ICD E11</span>
        <span
          className="px-1.5 py-0.5 rounded-sm font-medium"
          style={{
            background: "color-mix(in oklab, var(--color-brand) 80%, transparent)",
            color: "oklch(0.18 0.02 200)",
          }}
        >
          governance ✓
        </span>
      </div>
    </div>
  );
}

export function WorkspaceMock() {
  const rows = [
    { name: "Variant A", score: 82 },
    { name: "Variant B", score: 64 },
    { name: "Variant C", score: 41 },
  ];
  return (
    <div className="space-y-1.5 font-mono text-[10px]">
      {rows.map((r) => (
        <div
          key={r.name}
          className="rounded border hairline bg-background/70 px-2 py-1.5 flex items-center gap-2"
        >
          <span className="text-foreground w-14">{r.name}</span>
          <div className="flex-1 h-1.5 rounded-full bg-surface-2 overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${r.score}%`,
                background:
                  "linear-gradient(90deg, color-mix(in oklab, var(--color-brand) 80%, transparent), var(--color-brand))",
              }}
            />
          </div>
          <span className="text-muted-foreground w-9 text-right">{r.score}%</span>
        </div>
      ))}
    </div>
  );
}
