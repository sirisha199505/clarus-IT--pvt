import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import Icon from "./ui/Icon.jsx";
import { SUCCESS_STORIES } from "../data/content.js";

export default function SuccessStories() {
  return (
    <section id="success" className="relative bg-mist py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Success Stories"
          title="Real graduates,"
          highlight="real careers in Japan"
          subtitle="Behind every placement is a student who trusted the process. Here are a few of the journeys we're proud to have guided."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {SUCCESS_STORIES.map((s, i) => (
            <Reveal
              key={s.name}
              delay={i * 120}
              className="group relative flex flex-col rounded-3xl border border-slate-100 bg-gradient-to-b from-white to-slate-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card"
            >
              {/* quote mark */}
              <span className="font-display text-6xl leading-none text-brand-100 transition-colors group-hover:text-teal-200">
                &ldquo;
              </span>

              {/* rating */}
              <div className="-mt-4 flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Icon key={k} name="star" className="h-4 w-4 fill-gold" />
                ))}
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                {s.quote}
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <span className="grid h-12 w-12 place-items-center rounded-full gradient-brand font-bold text-white">
                  {s.initials}
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">{s.name}</p>
                  <p className="text-xs text-slate-500">{s.role}</p>
                </div>
                <span className="ml-auto rounded-full bg-brand-50 px-3 py-1 text-[0.65rem] font-semibold text-brand-700">
                  {s.program}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
