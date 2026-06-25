import { useState } from "react";
import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import Icon from "./ui/Icon.jsx";
import { FAQS } from "../data/content.js";

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-colors ${
        isOpen ? "border-brand-200 bg-white shadow-card" : "border-slate-200 bg-white"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base font-semibold text-ink">{faq.q}</span>
        <span
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-300 ${
            isOpen ? "rotate-45 gradient-brand text-white" : "bg-brand-50 text-brand-600"
          }`}
        >
          <Icon name="plus" className="h-5 w-5" strokeWidth={2.2} />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative bg-mist py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* left intro */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title="Questions?"
              highlight="We have answers"
              subtitle="Everything students and parents commonly ask about our programs, Japan placement and support."
            />
            <Reveal
              delay={150}
              className="mt-8 rounded-3xl gradient-brand p-7 text-white"
            >
              <Icon name="chat" className="h-9 w-9 text-cyan-soft" />
              <h3 className="mt-4 text-xl font-bold">Still unsure?</h3>
              <p className="mt-2 text-sm text-brand-100/90">
                Speak directly with a counsellor. We'll answer every question
                with honest, personalised guidance.
              </p>
              <a
                href="#enquiry"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-700 transition-transform hover:-translate-y-0.5"
              >
                Ask a counsellor
                <Icon name="arrowRight" className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          {/* accordion */}
          <Reveal delay={120} className="space-y-3.5">
            {FAQS.map((faq, i) => (
              <FaqItem
                key={faq.q}
                faq={faq}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
