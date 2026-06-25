/**
 * Particles — minimal soft floating particles for premium depth.
 */
const FIELD = [
  { left: "10%", top: "30%", size: 4, delay: "0s", dur: "10s", c: "bg-white/50" },
  { left: "22%", top: "70%", size: 3, delay: "2s", dur: "12s", c: "bg-cyan-soft/60" },
  { left: "38%", top: "20%", size: 5, delay: "1s", dur: "11s", c: "bg-gold-soft/50" },
  { left: "55%", top: "60%", size: 3, delay: "3s", dur: "13s", c: "bg-white/40" },
  { left: "68%", top: "28%", size: 4, delay: "1.5s", dur: "10.5s", c: "bg-cyan-soft/50" },
  { left: "82%", top: "65%", size: 3, delay: "0.5s", dur: "12.5s", c: "bg-gold-soft/50" },
  { left: "90%", top: "40%", size: 4, delay: "2.5s", dur: "11.5s", c: "bg-white/40" },
];

export default function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {FIELD.map((p, i) => (
        <span
          key={i}
          className={`absolute rounded-full ${p.c}`}
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animation: `drift ${p.dur} ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}
