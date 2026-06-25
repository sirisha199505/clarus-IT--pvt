import { useState } from "react";
import Reveal from "./ui/Reveal.jsx";
import Icon from "./ui/Icon.jsx";
import {
  COMPANY,
  ENGINEERING_BRANCHES,
  PROGRAMS,
  COUNTRIES,
  GRAD_YEARS,
} from "../data/content.js";

const INITIAL = {
  fullName: "",
  email: "",
  phone: "",
  college: "",
  branch: "",
  gradYear: "",
  program: "",
  country: "",
  message: "",
};

function validate(values) {
  const errors = {};
  if (!values.fullName.trim()) errors.fullName = "Please enter your full name.";
  else if (values.fullName.trim().length < 3)
    errors.fullName = "Name looks too short.";

  if (!values.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "Enter a valid email address.";

  if (!values.phone.trim()) errors.phone = "Phone number is required.";
  else if (!/^[+]?[\d\s-]{8,15}$/.test(values.phone))
    errors.phone = "Enter a valid phone number.";

  if (!values.college.trim()) errors.college = "Please enter your college.";
  if (!values.branch) errors.branch = "Select your branch.";
  if (!values.gradYear) errors.gradYear = "Select your graduation year.";
  if (!values.program) errors.program = "Choose a program of interest.";
  if (!values.country) errors.country = "Select a country preference.";

  return errors;
}

function Field({ label, error, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-cyan-deep">*</span>}
      </span>
      {children}
      {error && (
        <span className="mt-1 flex items-center gap-1 text-xs font-medium text-rose-500">
          {error}
        </span>
      )}
    </label>
  );
}

export default function EnquiryForm() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const fieldClass = (name) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-slate-400 focus:ring-4 ${
      errors[name] && touched[name]
        ? "border-rose-300 focus:border-rose-400 focus:ring-rose-100"
        : "border-slate-200 focus:border-brand-400 focus:ring-brand-100"
    }`;

  const update = (name) => (e) => {
    const next = { ...values, [name]: e.target.value };
    setValues(next);
    if (touched[name]) setErrors(validate(next));
  };

  const blur = (name) => () => {
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    setTouched(
      Object.keys(INITIAL).reduce((a, k) => ({ ...a, [k]: true }), {})
    );
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    } else {
      // focus first invalid field
      const first = document.querySelector(`[name="${Object.keys(errs)[0]}"]`);
      first?.focus();
    }
  };

  const reset = () => {
    setValues(INITIAL);
    setErrors({});
    setTouched({});
    setSubmitted(false);
  };

  return (
    <section id="enquiry" className="relative overflow-hidden bg-brand-950 py-16 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-cyan-accent/20 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Left — context */}
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-accent" />
              Student Enquiry
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
              Take the first step toward{" "}
              <span className="bg-gradient-to-r from-cyan-soft to-white bg-clip-text text-transparent">
                your global career
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-100/85">
              Share a few details and a Clarus counsellor will reach out with a
              personalised roadmap. No cost, no obligation — just clarity.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                { icon: "phone", k: "Call us", v: COMPANY.phone },
                { icon: "mail", k: "Email", v: COMPANY.email },
                { icon: "clock", k: "Office hours", v: COMPANY.hours },
              ].map((c) => (
                <li key={c.k} className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-cyan-soft">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-brand-100/70">
                      {c.k}
                    </p>
                    <p className="text-sm font-semibold text-white">{c.v}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right — form card */}
          <Reveal delay={120}>
            <div className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-emerald-50 text-emerald-500">
                    <Icon name="check" className="h-10 w-10" strokeWidth={2.4} />
                  </span>
                  <h3 className="mt-6 text-2xl font-bold text-ink">
                    Thank you, {values.fullName.split(" ")[0]}!
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-slate-600">
                    Your enquiry has been received. A Clarus counsellor will
                    contact you within one business day with your personalised
                    roadmap.
                  </p>
                  <button
                    type="button"
                    onClick={reset}
                    className="mt-7 inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form noValidate onSubmit={handleSubmit} className="text-ink">
                  <h3 className="text-xl font-bold">Enquiry form</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Fields marked <span className="text-cyan-deep">*</span> are
                    required.
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Full name"
                      required
                      error={touched.fullName && errors.fullName}
                    >
                      <input
                        name="fullName"
                        type="text"
                        value={values.fullName}
                        onChange={update("fullName")}
                        onBlur={blur("fullName")}
                        placeholder="e.g. Ananya Sharma"
                        className={fieldClass("fullName")}
                      />
                    </Field>

                    <Field
                      label="Email address"
                      required
                      error={touched.email && errors.email}
                    >
                      <input
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={update("email")}
                        onBlur={blur("email")}
                        placeholder="you@example.com"
                        className={fieldClass("email")}
                      />
                    </Field>

                    <Field
                      label="Phone number"
                      required
                      error={touched.phone && errors.phone}
                    >
                      <input
                        name="phone"
                        type="tel"
                        value={values.phone}
                        onChange={update("phone")}
                        onBlur={blur("phone")}
                        placeholder="+91 90000 12345"
                        className={fieldClass("phone")}
                      />
                    </Field>

                    <Field
                      label="College / University"
                      required
                      error={touched.college && errors.college}
                    >
                      <input
                        name="college"
                        type="text"
                        value={values.college}
                        onChange={update("college")}
                        onBlur={blur("college")}
                        placeholder="Your institution"
                        className={fieldClass("college")}
                      />
                    </Field>

                    <Field
                      label="Engineering branch"
                      required
                      error={touched.branch && errors.branch}
                    >
                      <select
                        name="branch"
                        value={values.branch}
                        onChange={update("branch")}
                        onBlur={blur("branch")}
                        className={fieldClass("branch")}
                      >
                        <option value="">Select branch</option>
                        {ENGINEERING_BRANCHES.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field
                      label="Graduation year"
                      required
                      error={touched.gradYear && errors.gradYear}
                    >
                      <select
                        name="gradYear"
                        value={values.gradYear}
                        onChange={update("gradYear")}
                        onBlur={blur("gradYear")}
                        className={fieldClass("gradYear")}
                      >
                        <option value="">Select year</option>
                        {GRAD_YEARS.map((y) => (
                          <option key={y} value={y}>
                            {y}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field
                      label="Interested program"
                      required
                      error={touched.program && errors.program}
                    >
                      <select
                        name="program"
                        value={values.program}
                        onChange={update("program")}
                        onBlur={blur("program")}
                        className={fieldClass("program")}
                      >
                        <option value="">Select program</option>
                        {PROGRAMS.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field
                      label="Country preference"
                      required
                      error={touched.country && errors.country}
                    >
                      <select
                        name="country"
                        value={values.country}
                        onChange={update("country")}
                        onBlur={blur("country")}
                        className={fieldClass("country")}
                      >
                        <option value="">Select preference</option>
                        {COUNTRIES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <div className="mt-4">
                    <Field label="Message (optional)">
                      <textarea
                        name="message"
                        rows={4}
                        value={values.message}
                        onChange={update("message")}
                        placeholder="Tell us about your goals or any questions you have…"
                        className={`${fieldClass("message")} resize-none`}
                      />
                    </Field>
                  </div>

                  <button
                    type="submit"
                    className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl gradient-brand px-6 py-4 text-sm font-bold text-white shadow-lg shadow-brand-600/30 transition-transform hover:-translate-y-0.5"
                  >
                    Submit enquiry
                    <Icon
                      name="arrowRight"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  </button>
                  <p className="mt-3 text-center text-xs text-slate-400">
                    🔒 Your information is kept private and used only to contact
                    you about your enquiry.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
