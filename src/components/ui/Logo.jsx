/**
 * Logo — custom mark: a stylized "C" orbit/clarity glyph + wordmark.
 */
export default function Logo({ light = false, className = "" }) {
  return (
    <a href="#home" className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-10 w-10 place-items-center rounded-xl gradient-brand shadow-lg shadow-brand-600/30">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
          <path
            d="M16.5 7.2A6 6 0 1 0 17 16"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="18.5" cy="6.5" r="2" fill="#67e8f9" />
        </svg>
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-lg font-extrabold tracking-tight ${
            light ? "text-white" : "text-ink"
          }`}
        >
          Clarus<span className="text-cyan-accent">IT</span>
        </span>
        <span
          className={`block text-[0.62rem] font-semibold uppercase tracking-[0.22em] ${
            light ? "text-brand-200" : "text-slate-400"
          }`}
        >
          Solutions
        </span>
      </span>
    </a>
  );
}
