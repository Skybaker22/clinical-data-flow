/**
 * PatientHologram
 * A subtle, decorative SVG "digital patient" silhouette built from dots.
 * Dots gently pulse with staggered delays so the figure shimmers / breathes.
 * Pure SVG + CSS animation — no JS, no canvas, very cheap.
 */

// Hand-tuned coordinates approximating a humanoid silhouette (front view).
// Coordinate system: 200 x 400 viewBox.
const DOTS: Array<[number, number]> = [
  // Head (circle ~r 18 around 100,55)
  [100, 35], [88, 40], [112, 40], [80, 50], [120, 50],
  [76, 62], [124, 62], [80, 74], [120, 74], [88, 82], [112, 82], [100, 86],
  [100, 55], [92, 55], [108, 55], [96, 65], [104, 65],
  // Neck
  [96, 94], [104, 94], [100, 100],
  // Shoulders
  [70, 110], [85, 108], [100, 106], [115, 108], [130, 110],
  // Upper arms
  [62, 130], [138, 130], [58, 150], [142, 150],
  // Forearms
  [54, 175], [146, 175], [52, 200], [148, 200],
  // Hands
  [52, 220], [148, 220],
  // Torso outline
  [78, 125], [122, 125], [76, 145], [124, 145],
  [74, 165], [126, 165], [74, 185], [126, 185],
  [76, 205], [124, 205], [80, 225], [120, 225],
  // Torso interior (for "fill" feel)
  [90, 130], [110, 130], [100, 140],
  [88, 155], [100, 155], [112, 155],
  [90, 175], [110, 175], [100, 185],
  [88, 200], [112, 200], [100, 210],
  // Hips
  [86, 240], [114, 240], [100, 245],
  // Thighs
  [82, 260], [118, 260], [80, 285], [120, 285],
  [88, 270], [112, 270], [88, 295], [112, 295],
  // Knees
  [82, 310], [118, 310],
  // Shins
  [84, 330], [116, 330], [86, 350], [114, 350],
  [88, 370], [112, 370],
  // Feet
  [86, 388], [114, 388], [78, 392], [122, 392],
];

export function PatientHologram() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden"
    >
      {/* Soft brand halo behind the figure */}
      <div
        className="absolute right-[6%] top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-brand) 18%, transparent) 0%, transparent 65%)",
          filter: "blur(8px)",
          animation: "dx-halo 8s ease-in-out infinite",
        }}
      />

      <svg
        viewBox="0 0 200 400"
        className="relative h-[88%] max-h-[640px] w-auto opacity-[0.55] mr-[-2%] md:mr-[2%]"
        style={{
          filter:
            "drop-shadow(0 0 12px color-mix(in oklab, var(--color-brand) 35%, transparent))",
        }}
      >
        <defs>
          <radialGradient id="dotGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-brand)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--color-brand)" stopOpacity="0.2" />
          </radialGradient>
        </defs>

        {DOTS.map(([x, y], i) => {
          // Stagger each dot's pulse for a shimmering, breathing effect
          const delay = ((i * 137) % 4000) / 1000; // pseudo-random spread 0–4s
          const dur = 3 + ((i * 53) % 2000) / 1000; // 3–5s
          const r = 1.4 + ((i * 31) % 12) / 10; // 1.4 – 2.6
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
      </svg>
    </div>
  );
}
