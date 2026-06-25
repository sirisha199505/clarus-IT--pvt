import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import Icon from "./ui/Icon.jsx";
import { SATELLITE_FEATURES } from "../data/content.js";

export default function SatelliteEducation() {
  return (
    <section id="satellite" className="relative bg-mist py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Satellite Education Programs"
          title="World-class learning,"
          highlight="delivered to you"
          subtitle="Study a globally recognized engineering curriculum through live, interactive satellite classrooms — without leaving your city. Learn from partner-campus faculty, in mentored cohorts, on a schedule that fits your life."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SATELLITE_FEATURES.map((feature, i) => (
            <Reveal
              key={feature.title}
              delay={(i % 3) * 100}
              className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-glow"
            >
              {/* hover gradient wash */}
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="grid h-14 w-14 place-items-center rounded-2xl gradient-brand text-white shadow-lg shadow-brand-600/30">
                <Icon name={feature.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">
                {feature.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                {feature.text}
              </p>
            </Reveal>
          ))}
        </div>

        {/* highlight banner */}
        <Reveal className="mt-12 overflow-hidden rounded-3xl gradient-brand">
          <div className="relative flex flex-col items-center justify-between gap-6 px-8 py-10 text-center sm:flex-row sm:text-left lg:px-12">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-cyan-accent/30 blur-3xl" />
            <div className="relative max-w-xl">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Not sure where to begin?
              </h3>
              <p className="mt-2 text-brand-100/90">
                Talk to a Clarus counsellor and discover the satellite track
                that matches your branch and goals — completely free.
              </p>
            </div>
            <a
              href="#enquiry"
              className="relative inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand-700 shadow-xl transition-transform hover:-translate-y-0.5"
            >
              Book free consultation
              <Icon name="arrowRight" className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
