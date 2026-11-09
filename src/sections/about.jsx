import {
  Lightbulb,
  User,
  Smartphone,
  Brain,
  ArrowUpRight,
} from "lucide-react";

import { Reveal } from "../components/reveal";
import { RevealGroup } from "../components/revealGroup";

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

export const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-x-hidden bg-background py-24 md:py-32"
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
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20"></div>