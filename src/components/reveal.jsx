import { useEffect, useRef, useState } from "react";

export const Reveal = ({
  children,
  as: Component = "div",
  direction = "up",
  distance = 24,
  delay = 0,
  duration = 700,
  threshold = 0.15,
  rootMargin = "0px 0px -8% 0px",
  once = true,
  className = "",
  style = {},
  ...props
}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

  // excellenece at his peak
  //fallback for browser whrer intersectionobeerver 
  //is unabaulble- 
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once, threshold, rootMargin]);

  const revealStyle = {
    "--reveal-distance": `${distance}px`,
    "--reveal-delay": `${delay}ms`,
    "--reveal-duration": `${duration}ms`,
    ...style,
  };

  return (
    <Component
      ref={elementRef}
      className={[
        "reveal",
        `reveal--${direction}`,
        isVisible ? "is-revealed" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={revealStyle}
      data-reveal-state={isVisible ? "visible" : "hidden"}
      {...props}
    >
      {children}
    </Component>
  );
};