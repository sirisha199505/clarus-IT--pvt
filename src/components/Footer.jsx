import Logo from "./ui/Logo.jsx";
import Icon from "./ui/Icon.jsx";
import { COMPANY, NAV_LINKS, SOCIALS } from "../data/content.js";

const PROGRAM_LINKS = [
  { label: "Satellite Education", href: "#satellite" },
  { label: "Japan Placement", href: "#japan" },
  { label: "Benefits of Japan", href: "#benefits" },
  { label: "Our Process", href: "#process" },
  { label: "Success Stories", href: "#success" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-950 text-brand-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-accent/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* brand */}
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-100/70">
              {COMPANY.legal} — your trusted partner for international education
              and engineering careers in Japan.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-brand-100 ring-1 ring-white/10 transition-all hover:-translate-y-0.5 hover:bg-cyan-accent hover:text-white"
                >
                  <Icon name={s.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* explore */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-brand-100/70 transition-colors hover:text-cyan-soft"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* programs */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Programs
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {PROGRAM_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-brand-100/70 transition-colors hover:text-cyan-soft"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li className="flex gap-3">
                <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-cyan-soft" />
                <span className="text-brand-100/70">{COMPANY.address}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="phone" className="h-5 w-5 shrink-0 text-cyan-soft" />
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="text-brand-100/70 transition-colors hover:text-cyan-soft"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="mail" className="h-5 w-5 shrink-0 text-cyan-soft" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-brand-100/70 transition-colors hover:text-cyan-soft"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs text-brand-100/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {COMPANY.legal}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-cyan-soft">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-cyan-soft">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
