import { useEffect, useRef, useState } from "react";

export const CountUp = ({
  value,
  suffix = "",
  duration = 1400,
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const startCounting = () => {
      if (hasAnimated.current) return;

      hasAnimated.current = true;

      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;

        const progress = Math.min(
          elapsed / duration,
          1
        );

        /*
         * Ease-out curve:
         * moves quickly at first,
         * then settles gently on the final value.
         */
        const easedProgress =
          1 - Math.pow(1 - progress, 3);

        const nextValue = Math.round(
          easedProgress * value
        );

        setCount(nextValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    /*
     * Respect reduced-motion preferences.
     * Show the final number immediately.
     */
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (reducedMotion.matches) {
      setCount(value);
      hasAnimated.current = true;
      return;
    }

    /*
     * Start shortly after the metric becomes visible.
     */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting();
          observer.disconnect();
        }
      },
      {
        threshold: 0.4,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [value, duration]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
};