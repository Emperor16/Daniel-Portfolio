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

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] =
    useState(false);

  const [submitStatus, setSubmitStatus] =
    useState({
      type: null,
      message: "",
    });

  const submitForm = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    setSubmitStatus({
      type: null,
      message: "",
    });

    try {
      const serviceID =
        import.meta.env.VITE_EMAILJS_SERVICE_ID;

      const templateID =
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      const publicKey =
        import.meta.env.VITE_EMAILJS_PUBLIC_API_KEY;

      if (
        !serviceID ||
        !templateID ||
        !publicKey
      ) {
        throw new Error(
          "Email service is temporarily unavailable. Please try again later."
        );
      }

      await emailjs.send(
        serviceID,
        templateID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message:
          "Message sent successfully! I will get back to you shortly.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(
        "Error sending email:",
        error
      );

      setSubmitStatus({
        type: "error",
        message:
          error.message ||
          "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background py-24 md:py-32"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-48 top-1/4 h-96 w-96 rounded-full bg-primary/[0.05] blur-3xl" />

        <div className="absolute -right-40 bottom-1/4 h-80 w-80 rounded-full bg-highlight/[0.05] blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* ==================================
            HEADER
        =================================== */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Reveal
            direction="up"
            distance={14}
            duration={600}
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-primary" />

              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Get in touch
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
              Let’s build something{" "}
              <span className="font-serif font-normal italic text-primary">
                meaningful.
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
              Have a promising idea that needs
              engineering expertise, or want to
              strengthen your brand’s digital
              presence? Let’s make it happen.
            </p>
          </Reveal>
        </div>

        {/* ==================================
            TWO-COLUMN CONTACT AREA
        =================================== */}

        <div className="mx-auto grid max-w-5xl items-start gap-8 md:grid-cols-2 lg:gap-12">
          
          {/* Contact form */}
          <Reveal
            direction="left"
            distance={28}
            delay={180}
            duration={750}
          >
            <div className="rounded-3xl border border-border bg-background p-7 shadow-[0_20px_60px_rgba(17,19,24,0.06)] md:p-8">
              <form
                className="space-y-6"
                onSubmit={submitForm}
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-foreground"
                  >
                    Name
                  </label>

                  <input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    type="text"
                    id="name"
                    name="name"
                    className="
                      w-full
                      rounded-xl
                      border border-border
                      bg-secondary/40
                      px-4 py-3.5
                      text-foreground
                      outline-none
                      transition
                      duration-300
                      placeholder:text-muted-foreground/60
                      hover:border-primary/20
                      focus:border-primary/40
                      focus:bg-background
                      focus:ring-4
                      focus:ring-primary/10
                    "
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-foreground"
                  >
                    Email
                  </label>

                  <input
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    required
                    autoComplete="email"
                    placeholder="Your email"
                    type="email"
                    id="email"
                    name="email"
                    className="
                      w-full
                      rounded-xl
                      border border-border
                      bg-secondary/40
                      px-4 py-3.5
                      text-foreground
                      outline-none
                      transition
                      duration-300
                      placeholder:text-muted-foreground/60
                      hover:border-primary/20
                      focus:border-primary/40
                      focus:bg-background
                      focus:ring-4
                      focus:ring-primary/10
                    "
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-foreground"
                  >
                    Message
                  </label>

                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message:
                          e.target.value,
                      })
                    }
                    required
                    placeholder="Tell me about your idea, project or opportunity..."
                    id="message"
                    name="message"
                    rows={5}
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border border-border
                      bg-secondary/40
                      px-4 py-3.5
                      text-foreground
                      outline-none
                      transition
                      duration-300
                      placeholder:text-muted-foreground/60
                      hover:border-primary/20
                      focus:border-primary/40
                      focus:bg-background
                      focus:ring-4
                      focus:ring-primary/10
                    "
                  />
                </div>

                {/* Submit */}
                <Button
                  className="group w-full"
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading
                    ? "Sending..."
                    : "Send Message"}

                  <Send
                    className={`
                      h-5 w-5
                      transition-transform
                      duration-300
                      ${
                        isLoading
                          ? ""
                          : "group-hover:translate-x-1 group-hover:-translate-y-0.5"
                      }
                    `}
                    aria-hidden="true"
                  />
                </Button>

                {/* Submission feedback */}
                {submitStatus.type && (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`
                      flex items-start gap-3
                      rounded-xl
                      border
                      p-4
                      ${
                        submitStatus.type ===
                        "success"
                          ? "border-emerald-500/20 bg-emerald-50 text-emerald-700"
                          : "border-red-500/20 bg-red-50 text-red-700"
                      }
                    `}
                  >
                    {submitStatus.type ===
                    "success" ? (
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    )}

                    <p className="text-sm leading-6">
                      {submitStatus.message}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </Reveal>

          {/* ==================================
              CONTACT INFORMATION
          =================================== */}

          <div className="space-y-6">
            <Reveal
              direction="right"
              distance={28}
              delay={240}
              duration={750}
            >
              <div className="rounded-3xl border border-border bg-background p-7 shadow-[0_20px_60px_rgba(17,19,24,0.06)] md:p-8">
                <h3 className="mb-7 text-2xl font-bold tracking-[-0.025em] text-foreground">
                  Contact Information
                </h3>

                <RevealGroup
                  className="space-y-2"
                  direction="up"
                  distance={12}
                  stagger={80}
                  maxDelay={240}
                  duration={600}
                  threshold={0.1}
                >
                  {contactInfo.map((info) => {
                    const Icon = info.icon;

                    return (
                      <div
                        key={info.label}
                        className="group flex items-center gap-4 rounded-2xl p-3 transition duration-300 hover:bg-secondary/50"
                      >
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary transition duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                            {info.label}
                          </p>

                          {info.href ? (
                            <a
                              href={info.href}
                              className="mt-1 inline-flex items-center gap-1.5 break-all font-medium text-foreground transition-colors hover:text-primary"
                            >
                              {info.value}

                              <ArrowUpRight
                                className="h-3.5 w-3.5"
                                aria-hidden="true"
                              />
                            </a>
                          ) : (
                            <p className="mt-1 font-medium text-foreground">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </RevealGroup>
              </div>
            </Reveal>

            {/* Availability */}
            <Reveal
              direction="right"
              distance={22}
              delay={320}
              duration={700}
            >
              <div className="rounded-3xl border border-primary/10 bg-secondary/60 p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 motion-safe:animate-ping" />

                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                  </span>

                  <h3 className="text-xl font-semibold text-foreground">
                    I am currently available
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  I am available for freelance work
                  and internships. Contact me and
                  let’s build something meaningful
                  together.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};