import { motion } from "framer-motion";
import Icon from "./ui/Icon.jsx";
import AnimatedCounter from "./ui/AnimatedCounter.jsx";
import WorldMap from "./ui/WorldMap.jsx";
import Particles from "./ui/Particles.jsx";
import { HERO_STATS } from "../data/content.js";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-charcoal pt-32 pb-24 lg:pt-40 lg:pb-28">
      {/* layered glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="orb h-96 w-96 bg-brand-600/30" style={{ top: "-6rem", left: "-4rem" }} />
        <div className="orb h-[28rem] w-[28rem] bg-cyan-deep/25" style={{ bottom: "-8rem", right: "-6rem" }} />
        <div className="orb h-72 w-72 bg-gold/10" style={{ top: "30%", left: "55%" }} />
      </div>
      <Particles />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <motion.span
            {...fade(0)}
            className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white"
          >
            <Icon name="globe" className="h-4 w-4 text-gold-soft" />
            Global Education & Careers
          </motion.span>

          <motion.h1
            {...fade(0.08)}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]"
          >
            Open doors to a{" "}
            <span className="text-gradient">world of opportunity</span>
            <span className="block">
              and a career in{" "}
              <span className="relative inline-block">
                <span className="text-gradient-gold">Japan</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C50 3 150 3 198 7"
                    stroke="#e3c873"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-emerald-50/80 sm:text-lg lg:mx-0"
          >
            Clarus guides ambitious engineering graduates through world-class
            Satellite Education and complete Japan training &amp; placement —
            with warm, personal mentorship from your first enquiry to your first
            day abroad.
          </motion.p>

          <motion.div
            {...fade(0.24)}
            className="mt-9 flex flex-col items-center gap-3.5 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href="#enquiry"
              className="group inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-3.5 text-sm font-bold text-brand-700 shadow-xl shadow-black/20 transition-transform hover:-translate-y-0.5"
            >
              Start your journey
              <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#japan"
              className="inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-white/30 transition-colors hover:bg-white/10"
            >
              Explore Japan placement
            </a>
          </motion.div>

          <motion.div
            {...fade(0.32)}
            className="mt-9 flex items-center justify-center gap-4 lg:justify-start"
          >
            <div className="flex -space-x-3">
              {["AK", "SR", "PM", "JN"].map((i, idx) => (
                <span
                  key={i}
                  className="grid h-10 w-10 place-items-center rounded-full border-2 border-charcoal bg-gradient-to-br from-cyan-accent to-brand-600 text-xs font-bold text-white"
                  style={{ zIndex: 10 - idx }}
                >
                  {i}
                </span>
              ))}
            </div>
            <p className="text-left text-sm text-emerald-50/80">
              <span className="font-bold text-white">2,500+ students</span>
              <br className="hidden sm:block" /> trust Clarus with their future
            </p>
          </motion.div>
        </div>

        {/* World map visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative rounded-[28px] glass-dark p-5 shadow-2xl">
            <div className="flex items-center justify-between px-1 pb-3">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
                Our global network
              </span>
              <span className="flex items-center gap-1.5 text-xs text-emerald-50/70">
                <span className="h-2 w-2 animate-pulse rounded-full bg-brand-400" />
                Live routes
              </span>
            </div>
            <div className="aspect-[1000/480] w-full">
              <WorldMap />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <div className="relative mx-auto mt-16 max-w-7xl px-5 lg:mt-20 lg:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[24px] glass-dark text-center lg:grid-cols-4">
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="px-6 py-7">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className="font-display text-3xl font-extrabold text-white sm:text-4xl"
              />
              <p className="mt-1.5 text-sm text-emerald-50/75">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
