import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Twitter,
  Sparkles,
  ChevronDown,
} from "lucide-react";

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
    icon: Github,
    href: "https://github.com/Emperor16",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ayodele-daniel-33484a3a8/",
  },
  {
    label: "X / Twitter",
    icon: Twitter,
    href: "https://x.com/DanielO23937500",
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
      className="relative isolate min-h-screen overflow-x-hidden bg-white text-[#111318]"
    >
      {/* Soft background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-40 -top-40 h-[540px] w-[540px] rounded-full bg-[#F5F3FF] blur-3xl" />
        <div className="absolute -left-72 top-1/2 h-[460px] w-[460px] rounded-full bg-[#8B5CF6]/[0.05] blur-3xl" />

        <div className="absolute right-[8%] top-[16%] h-64 w-64 rounded-full border border-[#6D28D9]/10" />
        <div className="absolute right-[11%] top-[20%] h-48 w-48 rounded-full border border-[#6D28D9]/10" />

        {decorativeDots.map((dot, index) => (
          <span
            key={index}
            className="absolute rounded-full bg-[#8B5CF6]/30"
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
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#E8E5F0] bg-[#F5F3FF] px-4 py-2 text-sm font-medium text-[#6D28D9] shadow-sm">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Full-Stack web developer and Mobile Engineer
            </div>

            <h1 className="max-w-3xl text-[clamp(3.2rem,7vw,6.6rem)] font-bold leading-[0.94] tracking-[-0.055em] text-[#111318]">
              Every{" "}
              <span className="relative whitespace-nowrap text-[#6D28D9]">
                service
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#8B5CF6]/15"
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

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#626672]">
              I’m Daniel Ayodele, a full-stack and mobile engineer building
              result giving digital products with TypeScript, Next.js, Node.js
              and Flutter.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#6D28D9] px-7 py-3.5 font-semibold text-black shadow-[0_14px_35px_rgba(109,40,217,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#5B21B6] hover:shadow-[0_18px_40px_rgba(109,40,217,0.32)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#8B5CF6]/30"
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
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-[#E8E5F0] bg-white px-7 py-3.5 font-semibold text-[#111318] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/50 hover:bg-[#F5F3FF] hover:text-[#6D28D9] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#8B5CF6]/20"
              >
                <Download className="h-5 w-5" aria-hidden="true" />
                Download CV
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <span className="text-sm font-medium text-[#626672]">
                Connect with me
              </span>

              <div className="flex items-center gap-2">
                {socialLinks.map(({ label, icon: Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E8E5F0] bg-white text-[#626672] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/40 hover:bg-[#F5F3FF] hover:text-[#6D28D9] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#8B5CF6]/20"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="relative mx-auto w-full max-w-[570px] lg:mx-0">
            <div
              aria-hidden="true"
              className="absolute -inset-8 -z-10 rounded-[4rem] bg-gradient-to-br from-[#F5F3FF] via-white to-[#8B5CF6]/10"
            />

            <div
              aria-hidden="true"
              className="absolute -right-6 top-16 -z-10 h-[75%] w-[90%] rotate-3 rounded-[3rem] border border-[#8B5CF6]/15 bg-[#F5F3FF]"
            />

            <div className="relative rounded-[2.25rem] border border-[#E8E5F0] bg-white p-3 shadow-[0_30px_80px_rgba(59,33,94,0.16)]">
              <div className="relative overflow-hidden rounded-[1.7rem] bg-[#F5F3FF]">
                <img
                  src="/daniel_profile1.webp"
                  alt="Portrait of Daniel Ayodele"
                  className="aspect-[4/5] w-full object-cover object-top"
                  fetchPriority="high"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#111318]/35 to-transparent" />
              </div>
            </div>

            {/* Experience card */}
            <div className="absolute -left-4 top-8 rounded-2xl border border-[#E8E5F0] bg-white/95 px-5 py-4 shadow-[0_18px_45px_rgba(59,33,94,0.14)] backdrop-blur-md sm:-left-10">
              <div className="text-3xl font-bold tracking-tight text-[#6D28D9]">
                5+
              </div>
              <div className="mt-0.5 text-xs font-medium uppercase tracking-[0.14em] text-[#626672]">
                Years experience
              </div>
            </div>

            {/* Availability card */}
            <div className="absolute -bottom-5 right-2 flex items-center gap-3 rounded-2xl border border-[#E8E5F0] bg-white/95 px-5 py-4 shadow-[0_18px_45px_rgba(59,33,94,0.14)] backdrop-blur-md sm:-right-6">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              </span>

              <div>
                <p className="text-sm font-semibold text-[#111318]">
                  Available for work
                </p>
                <p className="mt-0.5 text-xs text-[#626672]">
                  Open to new opportunities
                </p>
              </div>
            </div>
          </div>
        </div>

        

        <a
          href="#about"
          aria-label="Scroll to about section"
          className="mx-auto mt-2 hidden flex-col items-center gap-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#626672] transition-colors hover:text-[#6D28D9] lg:flex"
        >
          Scroll
          <ChevronDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};