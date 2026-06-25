import SectionHeading from "./ui/SectionHeading.jsx";
import Icon from "./ui/Icon.jsx";
import { PARTNERS } from "../data/content.js";

export default function Partners() {
  // duplicate the list so the marquee loops seamlessly
  const loop = [...PARTNERS, ...PARTNERS];

  return (
    <section id="partners" className="relative overflow-hidden bg-mist py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Partner Institutions & Companies"
          title="A network you can"
          highlight="rely on"
          subtitle="We collaborate with accredited institutions and respected employers across Japan to open genuine, verified opportunities for our students."
        />
      </div>

      {/* marquee */}
      <div className="relative mt-12">
        {/* edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-mist to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-mist to-transparent" />

        <div className="flex w-max animate-marquee gap-4">
          {loop.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex shrink-0 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name="building" className="h-5 w-5" />
              </span>
              <span className="whitespace-nowrap text-sm font-semibold text-slate-700">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
