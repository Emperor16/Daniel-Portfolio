import { Children } from "react";
import { Reveal } from "./reveal";

export const RevealGroup = ({
  children,
  as: Component = "div",
  childAs = "div",
  direction = "up",
  distance = 24,
  delay = 0,
  stagger = 100,
  maxDelay = 500,
  duration = 700,
  threshold = 0.12,
  rootMargin = "0px 0px -8% 0px",
  once = true,
  className = "",
  itemClassName = "",
  ...props
}) => {
  const items = Children.toArray(children);

  return (
    <Component className={className} {...props}>
      {items.map((child, index) => {
        const staggeredDelay = Math.min(
          delay + index * stagger,
          maxDelay
        );

        return (
          <Reveal
            key={child.key ?? index}
            as={childAs}
            direction={direction}
            distance={distance}
            delay={staggeredDelay}
            duration={duration}
            threshold={threshold}
            rootMargin={rootMargin}
            once={once}
            className={itemClassName}
          >
            {child}
          </Reveal>
        );
      })}
    </Component>
  );
};