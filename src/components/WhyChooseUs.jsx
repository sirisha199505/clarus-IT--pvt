import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import Icon from "./ui/Icon.jsx";
import { WHY_CHOOSE } from "../data/content.js";

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative bg-mist py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why students & parents"
          highlight="trust Clarus"
          subtitle="We compete on outcomes, transparency and genuine care — not slick promises. Here's what sets our approach apart."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 3) * 100}
              className="group relative flex gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <span className="absolute right-6 top-6 font-display text-4xl font-extrabold text-slate-100 transition-colors group-hover:text-brand-100">
                0{i + 1}
              </span>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:gradient-brand group-hover:text-white">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <div className="relative">
                <h3 className="text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
