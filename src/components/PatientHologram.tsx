import type { ReactElement } from "react";

/**
 * PatientHologram
 * A refined, anatomical "digital patient" hologram — point-cloud silhouette
 * with mesh connections, a pulsing heart core, scanning sweep line and
 * orbital data nodes. Pure SVG + CSS animation.
 */

// Higher-density humanoid coordinates on a 200 x 400 viewBox.
// Front view, anatomically proportioned: head ~r18, shoulders ~60w, hips ~50w.
const DOTS: Array<[number, number]> = [
  // ── Head (oval ~r 16x18 around 100,52) ──
  [100, 32], [92, 34], [108, 34],
  [84, 40], [100, 40], [116, 40],
  [80, 50], [90, 50], [110, 50], [120, 50],
  [78, 60], [100, 60], [122, 60],
  [80, 70], [90, 70], [110, 70], [120, 70],
  [85, 78], [100, 80], [115, 78],
  // Facial landmarks (eyes / nose hint)
  [93, 52], [107, 52], [100, 64],
  // ── Neck ──
  [95, 88], [100, 92], [105, 88],
  // ── Clavicle / shoulder line ──
  [72, 104], [82, 102], [92, 102], [100, 102], [108, 102], [118, 102], [128, 104],
  // ── Shoulder caps ──
  [66, 112], [134, 112],
  // ── Upper arms ──
  [60, 128], [140, 128], [56, 144], [144, 144],
  // ── Elbows ──
  [54, 162], [146, 162],
  // ── Forearms ──
  [52, 180], [148, 180], [52, 198], [148, 198],
  // ── Wrists / hands ──
  [52, 215], [148, 215], [50, 228], [150, 228], [54, 238], [146, 238],
  // ── Torso outline (ribcage → waist) ──
  [76, 118], [124, 118],
  [74, 132], [126, 132],
  [72, 148], [128, 148],
  [72, 164], [128, 164],
  [74, 180], [126, 180],
  [78, 196], [122, 196],
  [82, 212], [118, 212],
  // ── Sternum / spine column ──
  [100, 112], [100, 126], [100, 140], [100, 154], [100, 168], [100, 182], [100, 196],
  // ── Ribcage interior (lattice feel) ──
  [88, 124], [112, 124],
  [86, 138], [114, 138],
  [86, 152], [114, 152],
  [88, 166], [112, 166],
  [90, 180], [110, 180],
  // ── Heart position (slight left of center, upper torso) ──
  [94, 145], [97, 148], [93, 151],
  // ── Hips ──
  [82, 224], [92, 226], [100, 228], [108, 226], [118, 224],
  [78, 238], [122, 238],
  // ── Thighs ──
  [82, 254], [118, 254],
  [88, 254], [112, 254],
  [80, 274], [120, 274],
  [86, 274], [114, 274],
  [82, 294], [118, 294],
  [88, 294], [112, 294],
  // ── Knees ──
  [84, 312], [116, 312],
  // ── Shins ──
  [86, 330], [114, 330],
  [88, 348], [112, 348],
  [88, 366], [112, 366],
  // ── Ankles / feet ──
  [88, 382], [112, 382],
  [82, 390], [94, 390], [106, 390], [118, 390],
];

// Heart core position
const HEART: [number, number] = [95, 148];

// Orbital data nodes around the figure (decorative)
const ORBITS: Array<{ x: number; y: number; r: number; delay: number }> = [
  { x: 30, y: 80, r: 1.6, delay: 0 },
  { x: 170, y: 110, r: 2.0, delay: 0.6 },
  { x: 22, y: 200, r: 1.4, delay: 1.2 },
  { x: 178, y: 230, r: 1.8, delay: 1.8 },
  { x: 36, y: 320, r: 1.5, delay: 2.4 },
  { x: 168, y: 340, r: 1.7, delay: 3.0 },
  { x: 100, y: 14, r: 1.2, delay: 3.6 },
];

export function PatientHologram() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden"
    >
      {/* Soft brand halo */}
      <div
        className="absolute right-[2%] top-1/2 -translate-y-1/2 w-[760px] h-[760px] rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-brand) 22%, transparent) 0%, transparent 65%)",
          filter: "blur(12px)",
          animation: "dx-halo 8s ease-in-out infinite",
        }}
      />

      <svg
        viewBox="0 0 200 410"
        className="relative h-[120%] max-h-[920px] w-auto opacity-[0.82] mr-[-6%] md:mr-[-2%]"
        style={{
          filter:
            "drop-shadow(0 0 22px color-mix(in oklab, var(--color-brand) 45%, transparent))",
        }}
      >
        <defs>
          <radialGradient id="dotGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-brand)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--color-brand)" stopOpacity="0.15" />
          </radialGradient>
          <radialGradient id="heartGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-brand)" stopOpacity="1" />
            <stop offset="60%" stopColor="var(--color-brand)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--color-brand)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="scanGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--color-brand)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--color-brand)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--color-brand)" stopOpacity="0" />
          </linearGradient>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.8" />
          </filter>
        </defs>

        {/* Outer aura ring */}
        <circle
          cx="100"
          cy="205"
          r="180"
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth="0.3"
          strokeDasharray="2 6"
          opacity="0.25"
          style={{ animation: "dx-spin 60s linear infinite", transformOrigin: "100px 205px" }}
        />
        <circle
          cx="100"
          cy="205"
          r="160"
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth="0.25"
          strokeDasharray="1 4"
          opacity="0.2"
          style={{ animation: "dx-spin 90s linear infinite reverse", transformOrigin: "100px 205px" }}
        />

        {/* Mesh connections */}
        <g stroke="var(--color-brand)" strokeWidth={0.3} fill="none">
          {(() => {
            const MAX_DIST = 22;
            const lines: ReactElement[] = [];
            for (let i = 0; i < DOTS.length; i++) {
              for (let j = i + 1; j < DOTS.length; j++) {
                const [x1, y1] = DOTS[i];
                const [x2, y2] = DOTS[j];
                const dx = x1 - x2;
                const dy = y1 - y2;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d > MAX_DIST) continue;
                const baseOpacity = 0.15 + (1 - d / MAX_DIST) * 0.4;
                const delay = (((i + j) * 91) % 6000) / 1000;
                const dur = 5 + (((i * 17 + j * 23) % 4000) / 1000);
                lines.push(
                  <line
                    key={`${i}-${j}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    style={{
                      opacity: baseOpacity,
                      animation: `dx-line-drift ${dur}s ease-in-out ${delay}s infinite`,
                    }}
                  />,
                );
              }
            }
            return lines;
          })()}
        </g>

        {/* Scanning sweep line */}
        <rect
          x="40"
          y="0"
          width="120"
          height="14"
          fill="url(#scanGrad)"
          opacity="0.7"
          style={{ animation: "dx-scan 6s ease-in-out infinite" }}
        />

        {/* Heart pulse rings */}
        <circle
          cx={HEART[0]}
          cy={HEART[1]}
          r="3"
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth="0.6"
          style={{
            animation: "dx-heart-ring 1.6s ease-out infinite",
            transformOrigin: `${HEART[0]}px ${HEART[1]}px`,
          }}
        />
        <circle
          cx={HEART[0]}
          cy={HEART[1]}
          r="3"
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth="0.5"
          style={{
            animation: "dx-heart-ring 1.6s ease-out 0.5s infinite",
            transformOrigin: `${HEART[0]}px ${HEART[1]}px`,
            opacity: 0.7,
          }}
        />
        {/* Heart core */}
        <circle
          cx={HEART[0]}
          cy={HEART[1]}
          r="4"
          fill="url(#heartGrad)"
          filter="url(#softGlow)"
          style={{
            animation: "dx-heart-beat 1.6s ease-in-out infinite",
            transformOrigin: `${HEART[0]}px ${HEART[1]}px`,
          }}
        />

        {/* Body dots */}
        {DOTS.map(([x, y], i) => {
          const delay = ((i * 137) % 4000) / 1000;
          const dur = 3 + ((i * 53) % 2000) / 1000;
          const r = 1.3 + ((i * 31) % 12) / 10;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={r}
              fill="url(#dotGrad)"
              style={{
                transformOrigin: `${x}px ${y}px`,
                animation: `dx-dot-pulse ${dur}s ease-in-out ${delay}s infinite`,
              }}
            />
          );
        })}

        {/* Orbital data nodes with connector lines to figure */}
        {ORBITS.map((o, i) => (
          <g key={i}>
            <line
              x1={o.x}
              y1={o.y}
              x2={100}
              y2={205}
              stroke="var(--color-brand)"
              strokeWidth="0.2"
              strokeDasharray="1 3"
              opacity="0.25"
              style={{ animation: `dx-line-drift 7s ease-in-out ${o.delay}s infinite` }}
            />
            <circle
              cx={o.x}
              cy={o.y}
              r={o.r}
              fill="var(--color-brand)"
              style={{
                transformOrigin: `${o.x}px ${o.y}px`,
                animation: `dx-dot-pulse 3.5s ease-in-out ${o.delay}s infinite`,
              }}
            />
            <circle
              cx={o.x}
              cy={o.y}
              r={o.r + 2}
              fill="none"
              stroke="var(--color-brand)"
              strokeWidth="0.3"
              opacity="0.4"
              style={{
                transformOrigin: `${o.x}px ${o.y}px`,
                animation: `dx-heart-ring 3s ease-out ${o.delay}s infinite`,
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
