import { useEffect, useRef, useState } from "react";

/**
 * useCountUp — animates a number from 0 to `end` once the element is on screen.
 * Returns [ref, displayValue].
 */
export function useCountUp(end, { duration = 2000, decimals = 0 } = {}) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        let raf;
        let startTime = null;
        const step = (ts) => {
          if (startTime === null) startTime = ts;
          const progress = Math.min((ts - startTime) / duration, 1);
          // easeOutExpo for a premium decelerating feel
          const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          setValue(end * eased);
          if (progress < 1) raf = requestAnimationFrame(step);
          else setValue(end);
        };
        raf = requestAnimationFrame(step);
        observer.disconnect();
        return () => cancelAnimationFrame(raf);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  const display =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString();

  return [ref, display];
}
