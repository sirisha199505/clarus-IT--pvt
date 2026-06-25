import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import { PROCESS_STEPS } from "../data/content.js";

export default function Process() {
  return (
    <section id="process" className="relative mesh-bg py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Process"
          title="A clear path from"
          highlight="enquiry to onboarding"
          subtitle="Five transparent stages. At every step you know exactly where you stand, what comes next, and who is supporting you."
        />

        <div className="relative mt-14">
          {/* connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-[3.25rem] hidden h-0.5 bg-gradient-to-r from-brand-200 via-cyan-accent to-brand-200 lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal
                key={step.step}
                delay={i * 110}
                className="relative flex flex-col items-center text-center"
              >
                {/* node */}
                <div className="relative z-10">
                  <span className="grid h-[6.5rem] w-[6.5rem] place-items-center rounded-full border-4 border-white bg-white shadow-card">
                    <span className="grid h-full w-full place-items-center rounded-full gradient-brand font-display text-2xl font-extrabold text-white">
                      {step.step}
                    </span>
                  </span>
                  {/* pulse ring */}
                  <span className="absolute inset-0 -z-10 rounded-full bg-cyan-accent/30 animate-pulse-ring" />
                </div>
                <h3 className="mt-5 text-base font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-slate-600">
                  {step.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
