import { motion } from "framer-motion";

/**
 * Reveal — scroll-triggered fade/slide-up using Framer Motion.
 * Same API as before: `delay` (ms), `className`, `as` (tag name).
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
      transition={{
        duration: 0.7,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
