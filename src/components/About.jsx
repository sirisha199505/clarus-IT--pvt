import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import Icon from "./ui/Icon.jsx";
import { ABOUT_POINTS } from "../data/content.js";

export default function About() {
  return (
    <section id="about" className="relative mesh-bg py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Visual */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative mb-6">
              <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 to-brand-600 px-8 pt-8 pb-20 shadow-glow">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "cap", k: "Education", v: "Global degrees" },
                    { icon: "language", k: "Language", v: "JLPT N5–N2" },
                    { icon: "briefcase", k: "Careers", v: "Japan jobs" },
                    { icon: "shield", k: "Support", v: "End-to-end" },
                  ].map((c) => (
                    <div
                      key={c.k}
                      className="rounded-2xl glass-dark p-5 transition-transform hover:-translate-y-1"
                    >
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/15 text-cyan-soft">
                        <Icon name={c.icon} className="h-6 w-6" />
                      </span>
                      <p className="mt-3 text-sm font-semibold text-white">
                        {c.k}
                      </p>
                      <p className="text-xs text-brand-100/80">{c.v}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* floating accent */}
              <div className="absolute -bottom-5 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl bg-white p-4 shadow-card">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-brand text-white">
                    <Icon name="award" className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-medium text-slate-600">
                    <span className="font-bold text-ink">15+ years</span> helping
                    Indian engineers build careers abroad
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="About Clarus"
              title="A trusted partner for"
              highlight="global education & careers"
              subtitle="Clarus IT Solutions Private Limited is an international education and career solutions company dedicated to connecting ambitious engineering graduates with life-changing opportunities. We bring clarity, structure and genuine accountability to a journey that can otherwise feel overwhelming."
            />

            <div className="mt-8 space-y-4">
              {ABOUT_POINTS.map((point, i) => (
                <Reveal
                  key={point.title}
                  delay={i * 120}
                  className="group flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:border-brand-100 hover:shadow-card"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:gradient-brand group-hover:text-white">
                    <Icon name={point.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-ink">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {point.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
