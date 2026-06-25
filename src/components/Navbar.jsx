import { useEffect, useState } from "react";
import Logo from "./ui/Logo.jsx";
import Icon from "./ui/Icon.jsx";
import { NAV_LINKS } from "../data/content.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.18)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        <Logo light={!scrolled} />

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors hover:text-brand-600 ${
                  scrolled ? "text-slate-600" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${"+919000012345"}`}
            className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
              scrolled ? "text-brand-700 hover:text-brand-900" : "text-white hover:text-gold-soft"
            }`}
          >
            <Icon name="phone" className="h-4 w-4" />
            Talk to a counsellor
          </a>
          <a
            href="#enquiry"
            className="group inline-flex items-center gap-2 rounded-full gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-transform hover:-translate-y-0.5"
          >
            Apply now
            <Icon
              name="arrowRight"
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white/80 text-ink lg:hidden"
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full rounded bg-current transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded bg-current transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded bg-current transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#enquiry"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full gradient-brand px-5 py-3 text-base font-semibold text-white shadow-lg shadow-brand-600/30"
            >
              Apply now
              <Icon name="arrowRight" className="h-4 w-4" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
