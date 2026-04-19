export function RequestIntakeMock() {
  return (
    <div className="bg-card border hairline rounded-md shadow-[0_1px_0_rgba(0,0,0,0.02),0_24px_60px_-30px_rgba(20,40,80,0.18)] overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center justify-between px-4 py-3 border-b hairline bg-surface">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-border-strong" />
          <div className="w-2 h-2 rounded-full bg-border-strong" />
          <div className="w-2 h-2 rounded-full bg-border-strong" />
        </div>
        <div className="font-mono text-[10px] text-muted-foreground tracking-wider">
          datax / requests / R-2041
        </div>
        <div className="w-12" />
      </div>

      <div className="grid grid-cols-12">
        {/* Sidebar */}
        <aside className="col-span-3 border-r hairline bg-surface/50 p-4 space-y-1 text-xs">
          <p className="label-eyebrow mb-3 text-[9px]">Workspace</p>
          {["Inbox", "Intake", "In review", "Clarification", "Approved", "Archive"].map((item, i) => (
            <div
              key={item}
              className={`flex items-center justify-between px-2 py-1.5 rounded ${
                i === 1 ? "bg-foreground/5 text-foreground font-medium" : "text-muted-foreground"
              }`}
            >
              <span>{item}</span>
              <span className="font-mono text-[10px]">{[12, 4, 7, 2, 18, 124][i]}</span>
            </div>
          ))}
        </aside>

        {/* Main panel */}
        <div className="col-span-9 p-6">
          <div className="flex items-start justify-between mb-5">
            <div>
              <p className="font-mono text-[10px] text-muted-foreground tracking-wider mb-1.5">
                R-2041 · INTAKE
              </p>
              <h3 className="text-base font-medium text-foreground tracking-tight">
                Retrospective cohort — atrial fibrillation outcomes
              </h3>
            </div>
            <span className="text-[10px] font-mono px-2 py-1 border hairline rounded-sm text-status-active bg-status-active/5">
              ● UNDER REVIEW
            </span>
          </div>

          <div className="space-y-4 text-xs">
            <Field label="Requester" value="Dr. M. Bauer · Cardiology" />
            <Field label="Study goal" value="Compare 12-month outcomes across treatment cohorts (2019–2024)." />
            <Field label="Request type" value="Retrospective · Aggregate + variable-level" />
            <div className="grid grid-cols-2 gap-4">
              <Field label="Inclusion" value="ICD-10 I48.x, age ≥ 18" />
              <Field label="Time window" value="01/2019 — 12/2024" />
            </div>
          </div>

          {/* Audit trail */}
          <div className="mt-6 pt-5 border-t hairline">
            <p className="label-eyebrow mb-3 text-[9px]">Audit trail</p>
            <div className="space-y-2 font-mono text-[10px] text-muted-foreground">
              <div className="flex gap-3"><span className="text-foreground/60">14:02</span><span>Request submitted by m.bauer@</span></div>
              <div className="flex gap-3"><span className="text-foreground/60">14:18</span><span>Routed to Data Integration Centre</span></div>
              <div className="flex gap-3"><span className="text-foreground/60">15:41</span><span>Feasibility review opened</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-12 gap-3 py-2 border-b hairline last:border-0">
      <div className="col-span-3 label-eyebrow text-[9px] pt-0.5">{label}</div>
      <div className="col-span-9 text-foreground/90">{value}</div>
    </div>
  );
}
