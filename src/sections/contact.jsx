import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";

import { useState } from "react";
import emailjs from "@emailjs/browser";

import { Button } from "../components/button";
import { Reveal } from "../components/reveal";
import { RevealGroup } from "../components/revealGroup";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "danielayodele758@gmail.com",
    href: "mailto:danielayodele758@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "Not available",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria",
  },
];
