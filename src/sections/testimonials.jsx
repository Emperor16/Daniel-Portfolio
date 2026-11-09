import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { Reveal } from "../components/reveal";

const testimonialsData = [
  {
    quote:
      "One thing that stood out to me, whilst he works under my unit, was his courage and his meticulousness to get the job done perfectly and one time",
    author: "Dr. Olalade Seyi",
    role: "Director of Software Development Unit (ITEMS)",
    avatar: null,
  },
  {
    quote:
      "Daniel's expertise in frontend development is unparalleled. He has a keen eye for design and a deep understanding of user experience, which made our website not only visually stunning but also highly functional.",
    author: "Eniola Ayodele",
    role: "CEO, Dorola Inc.",
    avatar: null,
  },
  {
    quote:
      "I had the opportunity to work with Daniel on a complex project, and his ability to navigate challenges and find innovative solutions was truly impressive.He is a valuable asset to any team.",
    author: "Dipeolu Ayobami Peter",
    role: "Founder, Nexsus",
    avatar: null,
  },
  {
    quote:
      "Daniel's ability to understand our vision and translate it into a seamless user experience is exceptional. He is not just a developer but a reliable person, I can count on at all times. Tested and proven worthy!",
    author: "Benjamin Adeyeye",
    role: "Senior UI/UX designer, Tripitify Inc.",
    avatar: null,
  },
  {
    quote:
      "Daniel's professionalism and attention to detail are second to none. He consistently understands my brand and optimmizing my website to boost my online prescence to reach aross borders 30+ clients reached out in 2 months outside Nigeria.",
    author: "Victoria, Kofo",
    role: "CEO, Dolly P Fashion World",
    avatar: null,
  },
  {
    quote:
      "Daniel's ability to collaborate and communicate effectively made our project a success.He is not only good and skillful at what he does , but also a great team player and makes the working with him fun.",
    author: "Tosin Oluremi",
    role: "Flutter, Mobile Developer",
    avatar: null,
  },
];

const getInitials = (name) => {
  const cleanName = name
    .replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.)\s+/i, "")
    .replace(/,/g, "")
    .trim();

  const parts = cleanName
    .split(/\s+/)
    .filter(Boolean);

  if (parts.length === 0) {
    return "?";
  }

  if (parts.length === 1) {
    return parts[0]
      .slice(0, 2)
      .toUpperCase();
  }

  return `${parts[0][0]}${
    parts[parts.length - 1][0]
  }`.toUpperCase();
};

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  /*
   * Controls the animation that happens INSIDE
   * the testimonial card.
   */
  const [slideState, setSlideState] =
    useState("visible");

  const [slideDirection, setSlideDirection] =
    useState("next");

  const transitionTimer = useRef(null);
  const isTransitioning = useRef(false);

  const changeTestimonial = (
    newIndex,
    direction
  ) => {
    if (
      isTransitioning.current ||
      newIndex === activeIdx
    ) {
      return;
    }

    isTransitioning.current = true;

    setSlideDirection(direction);
    setSlideState("leaving");

    /*
     * Wait for current content to leave.
     */
    transitionTimer.current = setTimeout(() => {
      setActiveIdx(newIndex);

      /*
       * Put new content slightly outside
       * its natural position.
       */
      setSlideState("entering");

      /*
       * Two frames guarantee the browser sees
       * the entering position before transitioning
       * to visible.
       */
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setSlideState("visible");

          transitionTimer.current =
            setTimeout(() => {
              isTransitioning.current = false;
            }, 400);
        });
      });
    }, 200);
  };

  const next = () => {
    const newIndex =
      (activeIdx + 1) %
      testimonialsData.length;

    changeTestimonial(
      newIndex,
      "next"
    );
  };

  const previous = () => {
    const newIndex =
      (
        activeIdx -
        1 +
        testimonialsData.length
      ) % testimonialsData.length;

    changeTestimonial(
      newIndex,
      "previous"
    );
  };

  const goToTestimonial = (index) => {
    if (index === activeIdx) return;

    const direction =
      index > activeIdx
        ? "next"
        : "previous";

    changeTestimonial(
      index,
      direction
    );
  };

  useEffect(() => {
    return () => {
      if (transitionTimer.current) {
        clearTimeout(
          transitionTimer.current
        );
      }
    };
  }, []);

  return (
    <section
      id="testimonials"
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* =========================
            TESTIMONIALS HEADER
        ========================== */}

        <div className="w-full max-w-3xl mx-auto mb-16 text-center flex flex-col items-center justify-center">
          
          <Reveal
            direction="up"
            distance={14}
            duration={600}
          >
            <span className="text-secondary-foreground text-sm font-medium tracking-wider capitalize block text-center w-full">
              What People Say..
            </span>
          </Reveal>

          <Reveal
            direction="up"
            distance={20}
            delay={80}
            duration={700}
          >
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground text-center w-full">
              Testimonials that{" "}
              
              <span className="italic font-normal font-serif text-black">
                Inspire Confidence
              </span>
            </h2>
          </Reveal>

          <Reveal
            direction="up"
            distance={18}
            delay={160}
            duration={700}
          >
            <p className="text-muted-foreground text-center max-w-xl mx-auto w-full">
              Hear from my clients and friends about
              my work and impact.
            </p>
          </Reveal>
        </div>

        {/* =========================
            TESTIMONIAL CAROUSEL
        ========================== */}

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            
            {/* Main testimonial */}

            <Reveal
              direction="up"
              distance={24}
              delay={180}
              duration={750}
            >
              <div className="glass p-8 rounded-3xl md:p-12 glow-border">
                
                {/* Quote icon stays stationary */}

                <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary-foreground" />
                </div>

                {/*
                  ONLY this content moves when
                  changing testimonial.
                */}

                <div
                  className={`
                    testimonial-content
                    testimonial-content--${slideState}
                    testimonial-content--${slideDirection}
                  `}
                  aria-live="polite"
                >
                  <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                    "
                    {
                      testimonialsData[
                        activeIdx
                      ].quote
                    }
                    "
                  </blockquote>

                  <div className="flex items-center gap-4">
                    
                    {/* 
                      Real approved image if available.
                      Otherwise initials.
                    */}

                    {testimonialsData[
                      activeIdx
                    ].avatar ? (
                      <img
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                        src={
                          testimonialsData[
                            activeIdx
                          ].avatar
                        }
                        alt={
                          testimonialsData[
                            activeIdx
                          ].author
                        }
                      />
                    ) : (
                      <div
                        aria-hidden="true"
                        className="
                          w-12 h-12
                          rounded-full
                          shrink-0
                          flex
                          items-center
                          justify-center
                          bg-primary/10
                          text-primary
                          text-sm
                          font-bold
                          tracking-[0.08em]
                          ring-2
                          ring-primary/20
                        "
                      >
                        {getInitials(
                          testimonialsData[
                            activeIdx
                          ].author
                        )}
                      </div>
                    )}

                    <div>
                      <div className="font-semibold text-lg">
                        {
                          testimonialsData[
                            activeIdx
                          ].author
                        }
                      </div>

                      <div className="text-sm text-muted-foreground">
                        {
                          testimonialsData[
                            activeIdx
                          ].role
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* =========================
                NAVIGATION
            ========================== */}

            <Reveal
              direction="up"
              distance={14}
              delay={260}
              duration={650}
            >
              <div className="flex items-center justify-center gap-4 mt-8">
                
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  onClick={previous}
                >
                  <ChevronLeft />
                </button>

                {/* Dots */}

                <div className="flex gap-2">
                  {testimonialsData.map(
                    (_, idx) => (
                      <button
                        type="button"
                        aria-label={`Show testimonial ${
                          idx + 1
                        }`}
                        key={idx}
                        onClick={() =>
                          goToTestimonial(
                            idx
                          )
                        }
                        className={`
                          w-2 h-2
                          rounded-full
                          transition-all
                          duration-300
                          ${
                            idx ===
                            activeIdx
                              ? "w-8 bg-primary"
                              : "bg-muted-foreground/30 hover:bg-muted-foreground"
                          }
                        `}
                      />
                    )
                  )}
                </div>

                <button
                  type="button"
                  aria-label="Next testimonial"
                  className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  onClick={next}
                >
                  <ChevronRight />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};