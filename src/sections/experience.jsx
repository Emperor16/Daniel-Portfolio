import { BriefcaseBusiness, CalendarDays } from "lucide-react";

import { Reveal } from "../components/reveal";

const experience = [
  {
    period: "2023 - Present",
    role: "Lead Frontend Engineer",
    company: "CelebratePal",
    description:
      "Leading frontend architecture, coordinating deliverables, and monitoring product performance and user retention.",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
    current: true,
  },
  {
    period: "2022 - 2023",
    role: "Frontend Engineer",
    company: "ITEMS - UI",
    description:
      "Led frontend architecture and developed user-facing interfaces for business products.",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
    current: false,
  },
  {
    period: "2021 - 2022",
    role: "Full-Stack Developer",
    company: "Trueminds Limited",
    description:
      "Developed and maintained web applications for clients across different business needs.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    current: false,
  },
  {
    period: "2020 - 2021",
    role: "Junior Developer",
    company: "Solatium Limited",
    description:
      "Built responsive web interfaces while developing practical experience with modern frontend workflows.",
    technologies: ["JavaScript", "React", "CSS", "Git"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-background py-24 md:py-32"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-56 top-1/3 h-[480px] w-[480px] rounded-full bg-secondary/75 blur-3xl" />

        <div className="absolute -right-56 bottom-10 h-[440px] w-[440px] rounded-full bg-highlight/[0.04] blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-24">
          <Reveal
            direction="up"
            distance={14}
            duration={600}
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-primary" />

              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Career journey
              </span>

              <span className="h-px w-8 bg-primary" />
            </div>
          </Reveal>

          <Reveal
            direction="up"
            distance={22}
            delay={80}
            duration={700}
          >
            <h2 className="text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-foreground md:text-5xl lg:text-[3.5rem]">
              Experience that{" "}
              <span className="font-serif font-normal italic text-primary">
                supports the work.
              </span>
            </h2>
          </Reveal>

          <Reveal
            direction="up"
            distance={18}
            delay={160}
            duration={700}
          >
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
              Each role has strengthened how I think about engineering,
              collaboration, ownership, and building digital products around
              real user needs.
            </p>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-6xl">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="
              absolute bottom-0 left-[7px] top-0
              w-px
              bg-gradient-to-b
              from-primary
              via-highlight/35
              to-transparent
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          <div className="space-y-12 md:space-y-16">
            {experience.map((item, index) => {
              const isLeft = index % 2 === 0;
              const itemNumber = String(index + 1).padStart(2, "0");

              return (
                <div
                  key={`${item.company}-${item.period}`}
                  className="relative grid md:grid-cols-2"
                >
                  {/* Timeline marker */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute left-0 top-7 z-20
                      flex h-[15px] w-[15px]
                      -translate-x-0
                      items-center justify-center
                      rounded-full
                      border-[3px] border-background
                      bg-primary
                      shadow-[0_0_0_4px_rgba(109,40,217,0.10)]
                      md:left-1/2
                      md:-translate-x-1/2
                    "
                  >
                    {item.current && (
                      <span className="absolute inset-0 rounded-full bg-primary motion-safe:animate-ping" />
                    )}
                  </div>

                  {/* Experience card */}
                  <Reveal
                    direction={isLeft ? "left" : "right"}
                    distance={28}
                    duration={750}
                    threshold={0.12}
                    className={`
                      ml-8
                      md:ml-0
                      ${
                        isLeft
                          ? "md:col-start-1 md:pr-14"
                          : "md:col-start-2 md:pl-14"
                      }
                    `}
                  >
                    <article
                      className={`
                        group relative overflow-hidden
                        rounded-[1.5rem]
                        border border-border
                        bg-background
                        p-6
                        text-left
                        shadow-[0_12px_40px_rgba(17,19,24,0.05)]
                        transition-[transform,border-color,box-shadow,background-color]
                        duration-300
                        hover:-translate-y-1
                        hover:border-primary/20
                        hover:bg-secondary/20
                        hover:shadow-[0_22px_55px_rgba(109,40,217,0.09)]
                        md:p-7
                        ${isLeft ? "md:text-right" : ""}
                      `}
                    >
                      {/* Decorative sequence number */}
                      <span