import {
  ArrowRight,
  Download,
  Sparkles,
  ChevronDown,
} from "lucide-react";

import { Reveal } from "../components/reveal";

const skills = [
  "TypeScript",
  "Next.js",
  "Node.js",
  "React Native",
  "Flutter",
  "Python",
  "MongoDB",
  "SQL",
  "Git",
  "GitHub Actions",
  "Figma",
];

const socialLinks = [
  {
    label: "GitHub",
    icon: "/icons/github.svg",
    href: "https://github.com/Emperor16",
  },
  {
    label: "X",
    icon: "/icons/X.svg",
    href: "https://x.com/DanielO23937500",
  },
  {
    label: "Instagram",
    icon: "/icons/instagram.svg",
    href: "https://www.instagram.com/daniel.ayodele.775/",
  },
];

const decorativeDots = [
  { left: "6%", top: "20%", size: 8 },
  { left: "18%", top: "78%", size: 5 },
  { left: "38%", top: "14%", size: 6 },
  { left: "51%", top: "70%", size: 8 },
  { left: "68%", top: "12%", size: 5 },
  { left: "83%", top: "76%", size: 7 },
  { left: "93%", top: "30%", size: 5 },
];

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-x-hidden bg-background text-foreground"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-40 -top-40 h-[540px] w-[540px] rounded-full bg-secondary blur-3xl" />

        <div className="absolute -left-72 top-1/2 h-[460px] w-[460px] rounded-full bg-highlight/[0.05] blur-3xl" />

        <div className="absolute right-[8%] top-[16%] h-64 w-64 rounded-full border border-primary/10" />

        <div className="absolute right-[11%] top-[20%] h-48 w-48 rounded-full border border-primary/10" />

        {decorativeDots.map((dot, index) => (
          <span
            key={index}
            className="absolute rounded-full bg-highlight/30"
            style={{
              left: dot.left,
              top: dot.top,
              width: dot.size,
              height: dot.size,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-10 pt-28 sm:px-8 lg:px-10 lg:pt-32">
        <div className="grid flex-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Left column */}
          <div className="max-w-3xl">
            {/* Developer badge */}
            <Reveal
              direction="up"
              distance={16}
              delay={100}
              duration={600}
              className="w-fit"
            >
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-primary shadow-sm">
                <Sparkles
                  className="h-4 w-4"
                  aria-hidden="true"
                />

                Full-Stack Web and Mobile Engineer
              </div>
            </Reveal>

            {/* Headline */}
            <Reveal
              direction="up"
              distance={24}
              delay={200}
              duration={750}
            >
              <h1 className="max-w-3xl text-[clamp(3.2rem,7vw,6.6rem)] font-bold leading-[0.94] tracking-[-0.055em] text-foreground">
                Every{" "}
                <span className="relative whitespace-nowrap text-primary">
                  service

                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-highlight/15"
                  />
                </span>

                <br />

                is built with

                <br />

                dexterity and

                <br />

                <span className="font-serif font-normal italic tracking-[-0.035em]">
                  excellence.
                </span>
              </h1>
            </Reveal>

            {/* Introduction */}
            <Reveal
              direction="up"
              distance={20}
              delay={320}
              duration={700}
            >
              <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
                Hi, I’m Daniel Ayodele, a full-stack and mobile engineer
                building results-driven digital products with TypeScript,
                Next.js, Node.js, and Flutter.
              </p>
            </Reveal>

            {/* CTA buttons */}
            <Reveal
              direction="up"
              distance={18}
              delay={430}
              duration={700}
            >
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-[0_14px_35px_rgba(109,40,217,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#5B21B6] hover:shadow-[0_18px_40px_rgba(109,40,217,0.32)] focus:outline-none focus-visible:ring-4 focus-visible:ring-highlight/30"
                >
                  Let’s work together

                  <ArrowRight
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href="/Ayodele_Daniel_Olamide_Resume.pdf"
                  download
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 font-semibold text-foreground shadow-sm transition duration-300 hover:-translate-y-1 hover:border-highlight/50 hover:bg-secondary hover:text-primary focus:outline-none focus-visible:ring-4 focus-visible:ring-highlight/20"
                >
                  <Download
                    className="h-5 w-5"
                    aria-hidden="true"
                  />

                  Download CV
                </a>
              </div>
            </Reveal>

            {/* Social links */}
            <Reveal
              direction="up"
              distance={16}
              delay={540}
              duration={650}
            >
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Connect with me
                </span>

                <div className="flex items-center gap-2">
                  {socialLinks.map(({ label, icon, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit Daniel on ${label}`}
                      title={label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-sm transition duration-300 hover:-translate-y-1 hover:border-highlight/40 hover:bg-secondary hover:text-primary focus:outline-none focus-visible:ring-4 focus-visible:ring-highlight/20"
                    >
                      <img
                        src={icon}
                        alt=""
                        aria-hidden="true"
                        className="h-5 w-5"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right column */}
          <div className="relative mx-auto w-full max-w-[570px] lg:mx-0">
            {/* Decorative layers */}
            <div
              aria-hidden="true"
              className="absolute -inset-8 -z-10 rounded-[4rem] bg-gradient-to-br from-secondary via-background to-highlight/10"
            />

            <div
              aria-hidden="true"
              className="absolute -right-6 top-16 -z-10 h-[75%] w-[90%] rotate-3 rounded-[3rem] border border-highlight/15 bg-secondary"
            />

            {/* Portrait */}
            <Reveal
              direction="right"
              distance={32}
              delay={250}
              duration={900}
            >
              <div className="relative rounded-[2.25rem] border border-border bg-background p-3 shadow-[0_30px_80px_rgba(59,33,94,0.16)]">
                <div className="relative overflow-hidden rounded-[1.7rem] bg-secondary">
                  <img
                    src="/daniel_profile1.webp"
                    alt="Portrait of Daniel Ayodele"
                    className="aspect-[4/5] w-full object-cover object-top"
                    fetchPriority="high"
                  />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-foreground/35 to-transparent" />
                </div>
              </div>
            </Reveal>

            {/* Experience card */}
            <Reveal
              direction="left"
              distance={20}
              delay={650}
              duration={650}
              className="absolute -left-4 top-8 z-20 sm:-left-10"
            >
              <div className="rounded-2xl border border-border bg-background/95 px-5 py-4 shadow-[0_18px_45px_rgba(59,33,94,0.14)] backdrop-blur-md">
                <div className="text-3xl font-bold tracking-tight text-primary">
                  5+
                </div>

                <div className="mt-0.5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  Years experience
                </div>
              </div>
            </Reveal>

            {/* Availability card */}
            <Reveal
              direction="up"
              distance={20}
              delay={760}
              duration={650}
              className="absolute -bottom-5 right-2 z-20 sm:-right-6"
            >
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/95 px-5 py-4 shadow-[0_18px_45px_rgba(59,33,94,0.14)] backdrop-blur-md">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />

                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                </span>

                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Available for work
                  </p>

                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Open to new opportunities
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Skills marquee */}
        <Reveal
          direction="fade"
          delay={700}
          duration={850}
          threshold={0.05}
        >
          <div className="mt-16 pb-4 lg:mt-10">
            <p className="mb-7 text-center text-sm font-medium text-muted-foreground">
              Tools and frameworks I work with
            </p>

            <div
              className="skills-marquee rounded-3xl bg-transparent py-5 transition-[background-color,box-shadow] duration-500 ease-out hover:bg-secondary/40 hover:shadow-[0_16px_45px_rgba(109,40,217,0.06)]"
              aria-label="Tools and frameworks I work with"
            >
              <div className="skills-marquee-track">
                {[0, 1].map((group) => (
                  <div
                    key={group}
                    className="skills-marquee-group"
                    aria-hidden={group === 1 ? true : undefined}
                  >
                    {skills.map((skill) => (
                      <div
                        key={`${group}-${skill}`}
                        className="group/skill flex shrink-0 items-center gap-12"
                      >
                        <span
                          className="
                            whitespace-nowrap
                            text-xl
                            font-semibold
                            text-foreground/55
                            transition-[color,transform,text-shadow]
                            duration-300
                            ease-out
                            group-hover/skill:-translate-y-0.5
                            group-hover/skill:scale-105
                            group-hover/skill:text-primary
                            group-hover/skill:[text-shadow:0_8px_20px_rgba(109,40,217,0.15)]
                          "
                        >
                          {skill}
                        </span>

                        <span
                          aria-hidden="true"
                          className="
                            h-1.5
                            w-1.5
                            shrink-0
                            rounded-full
                            bg-highlight/60
                            transition-[background-color,box-shadow,transform]
                            duration-300
                            ease-out
                            group-hover/skill:scale-125
                            group-hover/skill:bg-highlight
                            group-hover/skill:shadow-[0_0_12px_rgba(139,92,246,0.40)]
                          "
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#about"
              aria-label="Scroll to about section"
              className="mx-auto mt-10 flex w-fit flex-col items-center gap-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              Scroll

              <ChevronDown
                className="h-5 w-5 motion-safe:animate-bounce"
                aria-hidden="true"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};