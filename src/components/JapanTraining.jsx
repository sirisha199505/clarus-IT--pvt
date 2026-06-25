import { useState } from "react";
import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import Icon from "./ui/Icon.jsx";
import { JAPAN_STEPS } from "../data/content.js";

export default function JapanTraining() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="japan"
      className="relative overflow-hidden bg-brand-950 py-16 text-white lg:py-24"
    >
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-cyan-accent/20 blur-3xl" />
        {/* rising-sun motif */}
        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
        <div className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          light
          eyebrow="Japan Engineering Training & Placement"
          title="From engineering graduate to"
          highlight="working in Japan"
          subtitle="A complete, mentor-guided pathway built specifically for engineering graduates — covering language, technical readiness, employer matching, visa and relocation."
        />

        {/* interactive timeline */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* steps list */}
          <Reveal className="space-y-3">
            {JAPAN_STEPS.map((step, i) => {
              const isActive = i === active;
              return (
                <button
                  key={step.title}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${
                    isActive
                      ? "border-cyan-accent/50 bg-white/10 shadow-lg"
                      : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                  }`}
                >
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl text-sm font-bold transition-colors ${
                      isActive
                        ? "bg-gradient-to-br from-cyan-soft to-cyan-accent text-brand-950"
                        : "bg-white/10 text-brand-100"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-bold text-white">{step.title}</h3>
                    <p
                      className={`mt-1 text-sm leading-relaxed text-brand-100/80 transition-all ${
                        isActive ? "block" : "hidden sm:block"
                      }`}
                    >
                      {step.text}
                    </p>
                  </div>
                </button>
              );
            })}
          </Reveal>

          {/* active step visual */}
          <Reveal delay={120} className="relative">
            <div className="rounded-3xl glass-dark p-8 lg:p-10">
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-cyan-soft to-cyan-accent text-brand-950 shadow-xl">
                <Icon name={JAPAN_STEPS[active].icon} className="h-8 w-8" />
              </span>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-soft">
                Step {active + 1} of {JAPAN_STEPS.length}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                {JAPAN_STEPS[active].title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-brand-100/85">
                {JAPAN_STEPS[active].text}
              </p>

              {/* progress dots */}
              <div className="mt-8 flex items-center gap-2">
                {JAPAN_STEPS.map((s, i) => (
                  <span
                    key={s.title}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active ? "w-10 bg-cyan-accent" : "w-4 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
