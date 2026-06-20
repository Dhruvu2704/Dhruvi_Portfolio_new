import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        borderBottom: `1px solid ${scrolled ? "hsl(0 0% 88%)" : "transparent"}`,
        backgroundColor: scrolled ? "rgba(249,249,249,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
      data-testid="navigation"
    >
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <a
          href="#"
          className="section-label"
          style={{ color: "hsl(0 0% 5%)", letterSpacing: "0.15em" }}
          data-testid="nav-logo"
        >
          DS.
        </a>
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="section-label transition-colors hover:text-foreground"
              data-testid={`nav-link-${link.label.toLowerCase()}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
