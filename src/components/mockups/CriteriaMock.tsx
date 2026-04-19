export function CriteriaMock() {
  return (
    <div className="bg-card border hairline rounded-md p-6 shadow-[0_24px_60px_-30px_rgba(20,40,80,0.15)]">
      <div className="flex items-center justify-between mb-5">
        <p className="label-eyebrow text-[9px]">Feasibility criteria</p>
        <span className="font-mono text-[10px] text-muted-foreground">v0.3 · draft</span>
      </div>

      <div className="space-y-4 text-xs">
        <Block title="Diagnosis" chips={["I48.0", "I48.1", "I48.2", "I48.91"]} />
        <Block title="Treatment" chips={["Anticoagulation", "Rhythm control", "Rate control"]} />
        <Block title="Time window" chips={["2019-01-01 → 2024-12-31"]} />
        <Block
          title="Inclusion / Exclusion"
          chips={["Age ≥ 18", "EHR available", "−Pregnancy", "−<6mo follow-up"]}
        />
        <Block title="Variables" chips={["Demographics", "Labs", "Medications", "Outcomes"]} />
      </div>
    </div>
  );
}

function Block({ title, chips }: { title: string; chips: string[] }) {
  return (
    <div className="grid grid-cols-12 gap-3 items-start py-2 border-b hairline last:border-0">
      <div className="col-span-3 label-eyebrow text-[9px] pt-1">{title}</div>
      <div className="col-span-9 flex flex-wrap gap-1.5">
        {chips.map((c) => {
          const negative = c.startsWith("−");
          return (
            <span
              key={c}
              className={`font-mono text-[10px] px-2 py-1 border hairline rounded-sm ${
                negative ? "text-muted-foreground bg-surface-2" : "text-foreground bg-surface"
              }`}
            >
              {c}
            </span>
          );
        })}
      </div>
    </div>
  );
}
