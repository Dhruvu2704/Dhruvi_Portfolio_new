import { useState, useEffect } from "react";

const links = [
  { label: "The Engineer", href: "#engineer" },
  { label: "Exhibitions", href: "#exhibitions" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      data-testid="navigation"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: scrolled ? "1px solid #1E1E22" : "1px solid transparent",
        backgroundColor: scrolled ? "rgba(11,11,13,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "1.5rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a
          href="#"
          className="exhibit-label"
          style={{ color: "#C9A96E", letterSpacing: "0.25em", fontSize: "0.7rem" }}
          data-testid="nav-logo"
        >
          DS.
        </a>
        <div style={{ display: "flex", gap: "2.5rem" }}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="exhibit-label"
              style={{ transition: "color 0.2s" }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#C9A96E"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#7A7570"; }}
              data-testid={`nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
