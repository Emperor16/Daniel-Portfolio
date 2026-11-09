import {
  ArrowUpRight,
  ExternalLink,
  Github,
} from "lucide-react";

import { Reveal } from "../components/reveal";

const projects = [
  {
    title: "LMS Dashboard",
    category: "Learning Management System",
    description:
      "A comprehensive dashboard that helps educators manage learning content, monitor student activity, and organize essential academic workflows from one interface.",
    image: "/project1.webp",
    link: "#",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Emperor16/lms-dashboard",
  },
  {
    title: "E-Commerce Platform",
    category: "Digital Commerce",
    description:
      "A full-featured shopping platform designed around intuitive product discovery, secure payments, and a smooth purchasing experience.",
    image: "/project2.webp",
    link: "#",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/Emperor16/ecommerce-platform",
  },
  {
    title: "Task Management App",
    category: "Team Productivity",
    description:
      "A collaborative task management experience that helps teams organize responsibilities, track progress, and keep shared work moving forward.",
    image: "/project3.webp",
    link: "#",
    tags: ["React", "Firebase", "Material UI", "Redux"],
    github: "https://github.com/Emperor16/task-manager",
  },
  {
    title: "Analytics Dashboard",
    category: "Data Visualization",
    description:
      "A real-time analytics dashboard that translates complex information into clear, actionable visual insights for faster decision-making.",
    image: "/project4.webp",
    link: "#",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    github: "https://github.com/Emperor16/analytics-dashboard",
  },
];

export const Project = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-secondary/30 py-24 md:py-20"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-56 top-24 h-[500px] w-[500px] rounded-full bg-highlight/[0.05] blur-3xl" />

        <div className="absolute -left-56 bottom-32 h-[460px] w-[460px] rounded-full bg-primary/[0.04] blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <Reveal
            direction="up"
            distance={14}
            duration={600}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />

              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Selected work
              </span>
            </div>
          </Reveal>

          <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.65fr]">
            <Reveal
              direction="up"
              distance={22}
              delay={80}
              duration={700}
            >
              <h2 className="max-w-3xl text-4xl font-bold leading-[1.06] tracking-[-0.04em] text-foreground md:text-5xl lg:text-[3.75rem]">
                Products designed to create{" "}
                <span className="font-serif font-normal italic text-primary">
                  meaningful results.
                </span>
              </h2>
            </Reveal>

            <Reveal
              direction="up"
              distance={18}
              delay={160}
              duration={700}
            >
              <p className="max-w-xl text-base leading-7 text-muted-foreground lg:justify-self-end">
                A selection of web and mobile products where thoughtful
                engineering, practical problem-solving, and user experience
                come together.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Project case studies */}
        <div className="space-y-20 md:space-y-28">
          {projects.map((project, index) => {
            const isReversed = index % 2 !== 0;
            const projectNumber = String(index + 1).padStart(2, "0");

            return (
              <article
                key={project.title}
                className="relative"
              >
                <div
                  className={`
                    grid items-center gap-10
                    lg:grid-cols-[1.08fr_0.92fr]
                    lg:gap-16
                    ${isReversed ? "lg:grid-cols-[0.92fr_1.08fr]" : ""}
                  `}
                >
                  {/* Project image */}
                  <Reveal
                    direction={isReversed ? "right" : "left"}
                    distance={32}
                    duration={850}
                    className={isReversed ? "lg:order-2" : ""}
                  >
                    <div className="group relative">
                      {/* Offset background layer */}
                      <div
                        aria-hidden="true"
                        className={`
                          absolute top-5 h-full w-full rounded-[2rem]
                          border border-primary/10 bg-secondary
                          transition-transform duration-500
                          ${
                            isReversed
                              ? "-left-5 group-hover:-translate-x-1"
                              : "left-5 group-hover:translate-x-1"
                          }
                        `}
                      />

                      {/* Image frame */}
                      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-background p-2 shadow-[0_25px_70px_rgba(17,19,24,0.10)]">
                        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-secondary">
                          <img
                            src={project.image}
                            alt={`${project.title} project interface`}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                          />

                          {/* Soft image overlay */}
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent opacity-70" />

                          {/* Image action */}
                          <a
                            href={project.link}
                            target={
                              project.link !== "#"
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              project.link !== "#"
                                ? "noopener noreferrer"
                                : undefined
                            }
                            aria-label={`View ${project.title}`}
                            className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-background text-foreground shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground focus:outline-none focus-visible:ring-4 focus-visible:ring-highlight/30"
                          >
                            <ArrowUpRight
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </a>
                        </div>
                      </div>

                      {/* Project number */}
                      <div
                        aria-hidden="true"
                        className={`
                          absolute -top-8 z-20
                          font-serif text-7xl italic
                          leading-none text-primary/[0.10]
                          md:text-8xl
                          ${
                            isReversed
                              ? "-right-3"
                              : "-left-3"
                          }
                        `}
                      >
                        {projectNumber}
                      </div>
                    </div>
                  </Reveal>

                  {/* Project information */}
                  <Reveal
                    direction={isReversed ? "left" : "right"}
                    distance={26}
                    delay={120}
                    duration={750}
                    className={
                      isReversed
                        ? "lg:order-1"
                        : ""
                    }
                  >
                    <div className="max-w-xl">
                      {/* Category and number */}
                      <div className="mb-5 flex items-center gap-4">
                        <span className="text-xs font-bold tracking-[0.18em] text-primary">
                          {projectNumber}
                        </span>

                        <span className="h-px w-8 bg-border" />

                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-3xl font-bold tracking-[-0.035em] text-foreground md:text-4xl">
                        {project.title}
                      </h3>

                      <p className="mt-5 text-base leading-8 text-muted-foreground">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mt-7 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-muted-foreground transition duration-300 hover:border-primary/30 hover:bg-secondary hover:text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Project actions */}
                      <div className="mt-8 flex flex-wrap items-center gap-4">
                        {project.link !== "#" ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-[0_12px_30px_rgba(109,40,217,0.20)] transition duration-300 hover:-translate-y-1 hover:bg-[#5B21B6] hover:shadow-[0_16px_35px_rgba(109,40,217,0.28)] focus:outline-none focus-visible:ring-4 focus-visible:ring-highlight/30"
                          >
                            View live project

                            <ExternalLink
                              className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5"
                              aria-hidden="true"
                            />
                          </a>
                        ) : (
                          <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-muted px-6 py-3 font-semibold text-muted-foreground">
                            Live preview soon
                          </span>
                        )}

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 font-semibold text-foreground transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-secondary hover:text-primary focus:outline-none focus-visible:ring-4 focus-visible:ring-highlight/20"
                        >
                          <Github
                            className="h-4 w-4"
                            aria-hidden="true"
                          />

                          View source

                          <ArrowUpRight
                            className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* Project separator */}
                {index !== projects.length - 1 && (
                  <Reveal
                    direction="fade"
                    delay={160}
                    duration={800}
                  >
                  </Reveal>
                )}
              </article>
            );
          })}
        </div>

        {/* View all projects */}
        <Reveal
          direction="up"
          distance={18}
          duration={700}
          threshold={0.2}
        >
          <div className="mt-20 flex flex-col items-center pt-12 text-center md:mt-0">
            <p className="mb-5 max-w-lg text-sm leading-6 text-muted-foreground">
              Want to explore more experiments, applications, and ongoing
              builds?
            </p>

            <a
              href="https://github.com/Emperor16?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-border bg-background px-7 py-3.5 font-semibold text-foreground shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_16px_35px_rgba(109,40,217,0.20)] focus:outline-none focus-visible:ring-4 focus-visible:ring-highlight/20"
            >
              <Github
                className="h-5 w-5"
                aria-hidden="true"
              />

              Explore all repositories

              <ArrowUpRight
                className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};