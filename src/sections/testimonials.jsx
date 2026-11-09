import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";

import { Reveal } from "../components/reveal";

const testimonialsData = [
  {
    quote:
      "One thing that stood out to me while Daniel worked under my unit was his courage and meticulous approach to getting the job done properly and on time.",
    author: "Dr. Olalade Seyi",
    role: "Director of Software Development Unit (ITEMS)",
    avatar: null,
  },
  {
    quote:
      "Daniel's expertise in frontend development is exceptional. He has a keen eye for design and a strong understanding of user experience, which made our website both visually polished and highly functional.",
    author: "Eniola Ayodele",
    role: "CEO, Dorola Inc.",
    avatar: null,
  },
  {
    quote:
      "I had the opportunity to work with Daniel on a complex project, and his ability to navigate challenges and find innovative solutions was truly impressive. He is a valuable asset to any team.",
    author: "Dipeolu Ayobami Peter",
    role: "Founder, Nexsus",
    avatar: null,
  },
  {
    quote:
      "Daniel's ability to understand our vision and translate it into a seamless user experience is exceptional. He is not just a developer, but also a reliable person I can count on.",
    author: "Benjamin Adeyeye",
    role: "Senior UI/UX Designer, Tripitify Inc.",
    avatar: null,
  },
  {
    quote:
      "Daniel's professionalism and attention to detail are second to none. He consistently understood my brand and optimized my website to strengthen its online presence across borders.",
    author: "Victoria Kofo",
    role: "CEO, Dolly P Fashion World",
    avatar: null,
  },
  {
    quote:
      "Daniel's ability to collaborate and communicate effectively made our project a success. He is skilled at what he does, a strong team player, and enjoyable to work with.",
    author: "Tosin Oluremi",
    role: "Flutter & Mobile Developer",
    avatar: null,
  },
];

const getInitials = (name) => {
  const cleanName = name
    .replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.)\s+/i, "")
    .trim();

  const nameParts = cleanName.split(/\s+/);

  if (nameParts.length === 1) {
    return nameParts[0].slice(0, 2).toUpperCase();
  }

  return `${nameParts[0][0]}${
    nameParts[nameParts.length - 1][0]
  }`.toUpperCase();
};

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationPhase, setAnimationPhase] =
    useState("visible");
  const [direction, setDirection] = useState("next");

  const transitionTimerRef = useRef(null);
  const isTransitioningRef = useRef(false);

  const activeTestimonial =
    testimonialsData[activeIndex];

  const changeTestimonial = (
    nextIndex,
    nextDirection
  ) => {
    if (
      nextIndex === activeIndex ||
      isTransitioningRef.current
    ) {
      return;
    }

    isTransitioningRef.current = true;
    setDirection(nextDirection);
    setAnimationPhase("leaving");

    transitionTimerRef.current = window.setTimeout(
      () => {
        setActiveIndex(nextIndex);
        setAnimationPhase("entering");

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setAnimationPhase("visible");

            transitionTimerRef.current =
              window.setTimeout(() => {
                isTransitioningRef.current = false;
              }, 400);
          });
        });
      },
      220
    );
  };

  const next = () => {
    const nextIndex =
      (activeIndex + 1) % testimonialsData.length;

    changeTestimonial(nextIndex, "next");
  };

  const previous = () => {
    const previousIndex =
      (activeIndex - 1 + testimonialsData.length) %
      testimonialsData.length;

    changeTestimonial(previousIndex, "previous");
  };

  const selectTestimonial = (selectedIndex) => {
    if (selectedIndex === activeIndex) return;

    const selectedDirection =
      selectedIndex > activeIndex
        ? "next"
        : "previous";

    changeTestimonial(
      selectedIndex,
      selectedDirection
    );
  };

  useEffect(() => {
    return () => {
      if (transitionTimerRef.current) {
        window.clearTimeout(
          transitionTimerRef.current
        );
      }
    };
  }, []);

  const transitionClass = [
    "testimonial-slide",
    `testimonial-slide--${animationPhase}`,
    `testimonial-slide--${direction}`,
  ].join(" ");

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-secondary/30 py-24 md:py-32"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-highlight/[0.05] blur-3xl" />

        <div className="absolute -right-56 top-20 h-[420px] w-[420px] rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Section header */}
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <Reveal
            direction="up"
            distance={14}
            duration={600}
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-primary" />

              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                What people say
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
              Words from people I’ve{" "}
              <span className="font-serif font-normal italic text-primary">
                worked with.
              </span>
            </h2>
          </Reveal>

          <Reveal
            direction="up"
            distance={18}
            delay={160}
            duration={700}
          >
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-muted-foreground">
              Reflections on the quality, collaboration,
              and care I bring to the work.
            </p>
          </Reveal>
        </div>

        {/* Testimonial carousel */}
        <Reveal
          direction="up"
          distance={26}
          delay={180}
          duration={800}
        >
          <div
            className="mx-auto max-w-5xl"
            aria-roledescription="carousel"
            aria-label="Client and colleague testimonials"
          >
            <div className="relative">
              {/* Decorative offset layer */}
              <div
                aria-hidden="true"
                className="absolute -bottom-4 left-5 right-5 top-4 rounded-[2rem] border border-primary/10 bg-secondary md:-bottom-5 md:left-10 md:right-10"
              />

              {/* Main testimonial card */}
              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-background px-6 py-9 shadow-[0_30px_80px_rgba(17,19,24,0.08)] sm:px-9 md:min-h-[430px] md:px-14 md:py-12">
                {/* Quote icon */}
                <div className="absolute right-6 top-6 text-primary/[0.06] md:right-10 md:top-8">
                  <Quote
                    className="h-20 w-20 md:h-28 md:w-28"
                    strokeWidth={1.2}
                    aria-hidden="true"
                  />
                </div>

                {/* Counter */}
                <div className="relative mb-10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-primary" />

                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                      Testimonial
                    </span>
                  </div>

                  <div
                    className="flex items-baseline gap-1 font-semibold tabular-nums"
                    aria-label={`Testimonial ${
                      activeIndex + 1
                    } of ${testimonialsData.length}`}
                  >
                    <span className="text-lg text-foreground">
                      {String(
                        activeIndex + 1
                      ).padStart(2, "0")}
                    </span>

                    <span
                      className="text-sm text-muted-foreground"
                      aria-hidden="true"
                    >
                      /
                      {String(
                        testimonialsData.length
                      ).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Animated content */}
                <div
                  className={transitionClass}
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <blockquote className="relative max-w-4xl text-xl font-medium leading-[1.65] tracking-[-0.02em] text-foreground sm:text-2xl md:text-[1.75rem]">
                    “{activeTestimonial.quote}”
                  </blockquote>

                  <div className="relative mt-10 border-t border-border pt-7">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                      {/* Person */}
                      <div className="flex items-center gap-4">
                        {activeTestimonial.avatar ? (
                          <img
                            src={
                              activeTestimonial.avatar
                            }
                            alt={
                              activeTestimonial.author
                            }
                            className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-primary/15"
                          />
                        ) : (
                          <div
                            aria-hidden="true"
                            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold tracking-[0.08em] text-primary ring-1 ring-primary/10"
                          >
                            {getInitials(
                              activeTestimonial.author
                            )}
                          </div>
                        )}

                        <div>
                          <p className="text-lg font-semibold text-foreground">
                            {activeTestimonial.author}
                          </p>

                          <p className="mt-1 text-sm leading-6 text-muted-foreground">
                            {activeTestimonial.role}
                          </p>
                        </div>
                      </div>

                      {/* Navigation arrows */}
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={previous}
                          aria-label="Show previous testimonial"
                          className="group flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-secondary hover:text-primary focus:outline-none focus-visible:ring-4 focus-visible:ring-highlight/20"
                        >
                          <ChevronLeft
                            className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5"
                            aria-hidden="true"
                          />
                        </button>

                        <button
                          type="button"
                          onClick={next}
                          aria-label="Show next testimonial"
                          className="group flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_12px_30px_rgba(109,40,217,0.20)] transition duration-300 hover:-translate-y-1 hover:bg-[#5B21B6] hover:shadow-[0_16px_35px_rgba(109,40,217,0.28)] focus:outline-none focus-visible:ring-4 focus-visible:ring-highlight/30"
                        >
                          <ChevronRight
                            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {testimonialsData.map(
                (testimonial, index) => {
                  const isActive =
                    index === activeIndex;

                  return (
                    <button
                      key={testimonial.author}
                      type="button"
                      onClick={() =>
                        selectTestimonial(index)
                      }
                      aria-label={`Show testimonial ${
                        index + 1
                      } from ${
                        testimonial.author
                      }`}
                      aria-current={
                        isActive ? "true" : undefined
                      }
                      className={`
                        group flex items-center gap-2
                        rounded-full
                        border px-3 py-2
                        transition-all duration-300
                        focus:outline-none
                        focus-visible:ring-4
                        focus-visible:ring-highlight/20
                        ${
                          isActive
                            ? "border-primary/20 bg-secondary text-primary"
                            : "border-transparent text-muted-foreground hover:border-border hover:bg-background hover:text-foreground"
                        }
                      `}
                    >
                      <span
                        className={`
                          flex h-7 w-7 items-center justify-center
                          rounded-full
                          text-[0.65rem] font-bold
                          tracking-[0.06em]
                          transition-colors duration-300
                          ${
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-muted-foreground group-hover:text-primary"
                          }
                        `}
                      >
                        {getInitials(
                          testimonial.author
                        )}
                      </span>

                      <span
                        className={`
                          overflow-hidden whitespace-nowrap
                          text-xs font-semibold
                          transition-[max-width,opacity]
                          duration-300
                          ${
                            isActive
                              ? "max-w-32 opacity-100"
                              : "max-w-0 opacity-0"
                          }
                        `}
                      >
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>
                    </button>
                  );
                }
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};