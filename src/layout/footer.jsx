
const socialLinks = [
  {
    label: "GitHub",
    icon: "/icons/github.svg",
    href: "https://github.com/Emperor16",
    type: "svg",
  },
  {
    label: "X",
    icon: "/icons/X.svg",
    href: "https://x.com/DanielO23937500",
    type: "svg",
  },
  {
    label: "Instagram",
    icon: "/icons/instagram.svg",
    href: "https://www.instagram.com/daniel.ayodele.775/",
    type: "svg",
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {currentYear} Daniel Ayodele. All rights reserved.
          </p>

         <div className="flex items-center gap-4">
  {socialLinks.map(({ label, icon, href, type }) => {
    const Icon = icon;

    return (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E8E5F0] bg-white text-[#626672] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/40 hover:bg-[#F5F3FF] hover:text-[#6D28D9] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#8B5CF6]/20"
      >
        {type === "svg" ? (
          <img
            src={icon}
            alt=""
            aria-hidden="true"
            className="h-5 w-5"
          />
        ) : (
          <Icon
            className="h-5 w-5"
            aria-hidden="true"
          />
        )}
      </a>
    );
  })}
</div>
        </div>
      </div>
    </footer>
  );
};
