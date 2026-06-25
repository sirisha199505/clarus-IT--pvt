import { useEffect, useState } from "react";
import Icon from "./ui/Icon.jsx";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full gradient-brand text-white shadow-xl shadow-brand-600/40 transition-all duration-300 hover:-translate-y-1 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <Icon name="arrowDown" className="h-5 w-5 rotate-180" strokeWidth={2.2} />
    </button>
  );
}
