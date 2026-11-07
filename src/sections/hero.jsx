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

     <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-10 pt-28 sm:px-8 lg:px-10 lg:pt-32">
  {/* Main hero grid */}
  <div className="grid flex-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
    {/* Left column */}
    <div className="max-w-3xl">
      {/* Your existing left-column content */}
    </div>

    {/* Right column */}
    <div className="relative mx-auto w-full max-w-[570px] lg:mx-0">
      {/* Your existing portrait and floating cards */}
    </div>
  </div>

  {/* Skills marquee and scroll indicator */}
  <div className="mt-16 pb-4 lg:mt-10">
    <p className="mb-7 text-center text-sm font-medium text-[#626672]">
      Tools and frameworks I work with
    </p>

    <div className="skills-marquee">
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
                className="flex shrink-0 items-center gap-12"
              >
                <span className="whitespace-nowrap text-xl font-semibold text-[#111318]/55 transition-colors duration-300 hover:text-[#6D28D9] sm:text-2xl">
                  {skill}
                </span>

                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B5CF6]/60"
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
      className="mx-auto mt-10 flex w-fit flex-col items-center gap-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#626672] transition-colors hover:text-[#6D28D9]"
    >
      Scroll
      <ChevronDown
        className="h-5 w-5 motion-safe:animate-bounce"
        aria-hidden="true"
      />
    </a>
  </div>
</div>
    </section>
  );
};