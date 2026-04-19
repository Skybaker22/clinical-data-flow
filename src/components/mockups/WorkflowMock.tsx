const stages = [
  { key: "submitted", label: "Submitted", count: 8, active: false },
  { key: "review", label: "Under review", count: 5, active: true },
  { key: "clarif", label: "Clarification", count: 2, active: false },
  { key: "approved", label: "Approved", count: 3, active: false },
  { key: "archive", label: "Archived", count: 41, active: false },
];

const sample = [
  { id: "R-2041", title: "AFib outcomes cohort", owner: "DIC", stage: 1 },
  { id: "R-2039", title: "Sepsis early-warning eval", owner: "Med. Inf.", stage: 1 },
  { id: "R-2037", title: "Oncology biomarker pull", owner: "Research IT", stage: 2 },
];

export function WorkflowMock() {
  return (
    <div className="bg-card border hairline rounded-md p-6 shadow-[0_24px_60px_-30px_rgba(20,40,80,0.15)]">
      <p className="label-eyebrow text-[9px] mb-5">Review workflow</p>

      {/* Stage row */}
      <div className="grid grid-cols-5 gap-2 mb-6">
        {stages.map((s) => (
          <div
            key={s.key}
            className={`border rounded-sm p-3 ${
              s.active ? "border-foreground bg-foreground/[0.03]" : "hairline"
            }`}
          >
            <div className="font-mono text-[9px] text-muted-foreground tracking-wider uppercase mb-1">
              {s.label}
            </div>
            <div className="font-display text-2xl text-foreground">{s.count}</div>
          </div>
        ))}
      </div>

      {/* List */}
      <div className="border hairline rounded-sm overflow-hidden">
        <div className="grid grid-cols-12 px-3 py-2 bg-surface border-b hairline label-eyebrow text-[9px]">
          <div className="col-span-2">ID</div>
          <div className="col-span-6">Request</div>
          <div className="col-span-2">Owner</div>
          <div className="col-span-2">Stage</div>
        </div>
        {sample.map((r) => (
          <div key={r.id} className="grid grid-cols-12 px-3 py-2.5 text-xs border-b hairline last:border-0 items-center">
            <div className="col-span-2 font-mono text-[10px] text-muted-foreground">{r.id}</div>
            <div className="col-span-6 text-foreground">{r.title}</div>
            <div className="col-span-2 text-muted-foreground">{r.owner}</div>
            <div className="col-span-2">
              <span className="font-mono text-[10px] px-1.5 py-0.5 border hairline rounded-sm text-status-active bg-status-active/5">
                ● {stages[r.stage].label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
