import { useCountUp } from "../../hooks/useCountUp.js";

/**
 * AnimatedCounter — counts up to `value` when scrolled into view.
 */
export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  className = "",
}) {
  const [ref, display] = useCountUp(value);
  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
