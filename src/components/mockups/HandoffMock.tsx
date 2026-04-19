export function HandoffMock() {
  return (
    <div className="bg-card border hairline rounded-md p-6 shadow-[0_24px_60px_-30px_rgba(20,40,80,0.15)]">
      <div className="flex items-center justify-between mb-5">
        <p className="label-eyebrow text-[9px]">Workspace · R-2041</p>
        <span className="font-mono text-[10px] px-2 py-1 border hairline rounded-sm text-status-done bg-status-done/5">
          ● READY FOR HANDOFF
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        <Stat label="Approvals" value="3 / 3" />
        <Stat label="Open items" value="0" />
        <Stat label="Release" value="Pending" />
      </div>

      <p className="label-eyebrow text-[9px] mb-3">Activity log</p>
      <div className="border hairline rounded-sm divide-y">
        {[
          ["09:14", "Intake completed", "system"],
          ["10:02", "Feasibility prepared", "j.weiss"],
          ["11:38", "Medical review approved", "dr.bauer"],
          ["12:50", "Governance review approved", "k.lang"],
          ["13:21", "DPO sign-off recorded", "compliance"],
          ["13:24", "Workspace locked for handoff", "system"],
        ].map(([time, msg, by]) => (
          <div key={time} className="flex items-center justify-between px-3 py-2 text-xs">
            <div className="flex gap-3">
              <span className="font-mono text-[10px] text-muted-foreground">{time}</span>
              <span className="text-foreground">{msg}</span>
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">{by}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border hairline rounded-sm p-3">
      <div className="label-eyebrow text-[9px] mb-1">{label}</div>
      <div className="font-display text-xl text-foreground">{value}</div>
    </div>
  );
}
