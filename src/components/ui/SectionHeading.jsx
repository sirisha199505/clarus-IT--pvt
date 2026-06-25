import Reveal from "./Reveal.jsx";

/**
 * SectionHeading — consistent eyebrow + title + subtitle block used across
 * every section. `light` switches to white text for dark backgrounds.
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  light = false,
  align = "center",
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] ${
            light
              ? "bg-white/10 text-cyan-soft ring-1 ring-white/20"
              : "bg-brand-50 text-brand-700 ring-1 ring-brand-100"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-accent" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            light ? "text-brand-100/80" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
