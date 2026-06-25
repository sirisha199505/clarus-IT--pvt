import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import Icon from "./ui/Icon.jsx";
import { JAPAN_BENEFITS } from "../data/content.js";

export default function Benefits() {
  return (
    <section id="benefits" className="relative bg-mist py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Life in Japan"
          title="Benefits of studying &"
          highlight="working in Japan"
          subtitle="Japan rewards skilled engineers with stability, growth and respect. Here's why thousands of graduates choose it as the place to build their future."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {JAPAN_BENEFITS.map((b, i) => (
            <Reveal
              key={b.title}
              delay={(i % 3) * 100}
              className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-200 hover:shadow-glow"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-cyan-accent text-white shadow-lg shadow-cyan-accent/25">
                  <Icon name={b.icon} className="h-7 w-7" />
                </span>
                <h3 className="text-lg font-bold text-ink">{b.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {b.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
