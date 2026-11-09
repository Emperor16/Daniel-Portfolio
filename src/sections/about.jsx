import { Lightbulb, User, Smartphone, Brain, ArrowUpRight } from "lucide-react";

import { Reveal } from "../components/reveal";
import { RevealGroup } from "../components/revealGroup";
import { CountUp } from "../components/countUp";

const highlights = [
  {
    icon: Smartphone,
    title: "Flutter Developer",
    description:
      "I build cross-platform mobile applications with Flutter, creating consistent and thoughtful experiences across iOS and Android.",
  },
  {
    icon: User,
    title: "Curious Learner",
    description:
      "I learn quickly, stay curious, and continuously expand my skills so I can adapt to new technologies and unfamiliar challenges.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "I enjoy breaking complex problems into practical solutions, with a focus on creating products that are useful, efficient, and intentional.",
  },
  {
    icon: Brain,
    title: "Excellence Driven",
    description:
      "I care about the details. From architecture to the final interaction, I aim to build work that is reliable, polished, and continually improving.",
  },
];

const metrics = [
  {
    value: 10,
    suffix: "+",
    label: "Products built",
  },
  {
    value: 10,
    suffix: "K+",
    label: "Registered users",
  },
  {
    value: 50,
    suffix: "",
    label: "Product goal",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-x-hidden bg-background py-24 md:py-0"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-56 top-20 h-[420px] w-[420px] rounded-full bg-secondary/80 blur-3xl" />

        <div className="absolute -right-48 bottom-0 h-[400px] w-[400px] rounded-full bg-highlight/[0.04] blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* =================================
              LEFT COLUMN
          ================================= */}
          <div>
            {/* Section eyebrow */}
            <Reveal direction="up" distance={14} duration={600}>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />

                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  About me
                </span>
              </div>
            </Reveal>

            {/* Heading */}
            <Reveal direction="up" distance={22} delay={80} duration={700}>
              <h2 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-foreground md:text-5xl lg:text-[3.5rem]">
                Building ideas into{" "}
                <span className="font-serif font-normal italic text-primary">
                  useful digital experiences.
                </span>
              </h2>
            </Reveal>

            {/* Biography */}
            <Reveal direction="up" distance={20} delay={180} duration={700}>
              <div className="mt-8 max-w-xl space-y-5 text-[1.05rem] leading-8 text-muted-foreground">
                <p>
                  Hello, Business driven person. I am Daniel a Computer science graduate and software engineer
                  focused on turning real problems into scalable web and mobile
                  products.
                </p>

                <p>
                  I learn by building. My goal is to create 50 problem-solving
                  products while continually sharpening my engineering,
                  collaboration, and product-thinking skills.
                </p>
              </div>
              
            </Reveal>

            {/* Impact metrics */}
            <Reveal direction="up" distance={18} delay={260} duration={700}>
              <div className="mt-8 border-y border-border py-2">
                <div className="grid grid-cols-3">
                  {metrics.map((metric, index) => (
                    <div
                      key={metric.label}
                      className={`
            group relative
            ${index !== 0 ? "border-l border-border" : ""}
            ${index === 0 ? "pr-4" : "px-4"}
          `}
                    >
                      <div className="text-3xl font-bold tabular-nums tracking-[-0.04em] text-primary transition-transform duration-300 group-hover:-translate-y-0.5 md:text-4xl">
                        <CountUp
                          value={metric.value}
                          suffix={metric.suffix}
                          duration={1400}
                        />
                      </div>

                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:text-sm sm:normal-case sm:tracking-normal">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Mission statement */}
            <Reveal direction="up" distance={18} delay={360} duration={700}>
              <div className="group relative mt-9 overflow-hidden rounded-2xl border border-border bg-secondary/55 p-6 transition duration-300 hover:border-primary/20 hover:bg-secondary">
                {/* Violet accent */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 top-0 w-1 bg-primary"
                />

                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      My mission
                    </p>

                    <p className="text-lg font-medium leading-7 text-foreground">
                      Build useful, thoughtful products that solve real problems
                      and create better digital experiences.
                    </p>
                  </div>

                  <ArrowUpRight
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* =================================
              RIGHT COLUMN
          ================================= */}
          <RevealGroup
            className="grid gap-5 sm:grid-cols-2 lg:min-h-[620px] lg:auto-rows-fr"
            direction="up"
            distance={24}
            delay={100}
            stagger={100}
            duration={700}
            threshold={0.1}
            itemClassName="h-full"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`
                    group relative h-full overflow-hidden
                    rounded-[1.5rem]
                    border border-border
                    bg-background
                    p-6
                    shadow-[0_10px_35px_rgba(17,19,24,0.04)]
                    transition-[transform,border-color,box-shadow,background-color]
                    duration-300
                    hover:-translate-y-1.5
                    hover:border-primary/20
                    hover:bg-secondary/30
                    hover:shadow-[0_20px_50px_rgba(109,40,217,0.09)]
                    ${index % 2 !== 0 ? "sm:translate-y-8" : ""}
                  `}
                >
                  {/* Decorative number */}
                  <span
                    aria-hidden="true"
                    className="absolute right-5 top-4 font-serif text-5xl italic text-primary/[0.06] transition-colors duration-300 group-hover:text-primary/[0.10]"
                  >
                    0{index + 1}
                  </span>

                  {/* Icon */}
                  <div className="relative mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary transition-[transform,background-color] duration-300 group-hover:-rotate-3 group-hover:scale-105 group-hover:bg-primary">
                    <Icon className="h-6 w-6 transition-colors duration-300 group-hover:text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-semibold tracking-[-0.02em] text-foreground">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>

                  {/* Bottom accent */}
                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-gradient-to-r from-primary to-highlight transition-transform duration-500 group-hover:scale-x-100"
                  />
                </article>
              );
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
};
