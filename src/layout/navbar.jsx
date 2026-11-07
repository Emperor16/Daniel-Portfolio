import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Project" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 pt-4">
        <nav
          className={`
            pointer-events-auto
            relative
            rounded-[1.5rem]
            border border-white/10
            backdrop-blur-xl
            transition-all duration-500 ease-out
            ${
              isScrolled
                ? "bg-background/75 shadow-xl shadow-black/10"
                : "bg-background/45 shadow-lg shadow-black/5"
            }
          `}
        >
          {/* Main navbar */}
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            {/* Logo */}
            <a
              href="#"
              className="shrink-0 text-xl font-bold tracking-tight transition-colors hover:text-primary"
            >
              DAN <span className="text-primary">.</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center gap-1 rounded-full border border-white/5 bg-white/5 p-1">
                {navLinks.map((link) => (
                  <a
                    href={link.href}
                    key={link.href}
                    className="
                      rounded-full
                      px-4 py-2
                      text-sm
                      text-muted-foreground
                      transition-all duration-300
                      hover:bg-white/10
                      hover:text-foreground
                    "
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="
                  inline-flex items-center justify-center
                  rounded-full
                  bg-primary
                  px-5 py-2.5
                  text-sm font-medium
                  text-primary-foreground
                  shadow-lg shadow-primary/20
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-primary/90
                  hover:shadow-primary/30
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary
                "
              >
                Contact Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="
                md:hidden
                flex h-10 w-10
                items-center justify-center
                rounded-full
                bg-white/5
                text-foreground
                transition-colors
                hover:bg-white/10
                cursor-pointer
              "
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() =>
                setIsMobileMenuOpen((prev) => !prev)
              }
            >
              {isMobileMenuOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`
              grid md:hidden
              transition-all duration-300 ease-out
              ${
                isMobileMenuOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }
            `}
          >
            <div className="overflow-hidden">
              <div className="border-t border-white/10 px-4 pb-4 pt-3">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      href={link.href}
                      key={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="
                        rounded-xl
                        px-4 py-3
                        text-sm
                        text-muted-foreground
                        transition-colors
                        hover:bg-white/10
                        hover:text-foreground
                      "
                    >
                      {link.label}
                    </a>
                  ))}

                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="
                      mt-3
                      inline-flex
                      items-center
                      justify-center
                      rounded-xl
                      bg-primary
                      px-4 py-3
                      text-sm font-medium
                      text-primary-foreground
                      transition-colors
                      hover:bg-primary/90
                    "
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};