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
