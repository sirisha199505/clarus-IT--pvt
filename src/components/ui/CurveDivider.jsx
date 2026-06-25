/**
 * CurveDivider — elegant curved transition between two sections.
 * `top` = color of the outgoing section, `fill` = color of the incoming one.
 * `flip` mirrors the curve direction.
 */
export default function CurveDivider({ top, fill, flip = false }) {
  return (
    <div style={{ background: top }} className="relative -mt-px leading-[0]">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`block h-[60px] w-full sm:h-[90px] ${flip ? "rotate-180" : ""}`}
        aria-hidden="true"
      >
        <path
          fill={fill}
          d="M0,40 C320,120 520,0 720,40 C920,80 1120,120 1440,48 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}
