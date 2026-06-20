import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Engineer from "@/components/Engineer";
import Exhibitions from "@/components/Exhibitions";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  const [cursor, setCursor] = useState({ x: -9999, y: -9999 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setCursor({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const spotlightStyle = {
    background: `radial-gradient(600px circle at ${cursor.x}px ${cursor.y}px, rgba(201,169,110,0.055) 0%, transparent 70%)`,
  };

  return (
    <div style={{ background: "#0B0B0D", minHeight: "100vh", position: "relative" }}>
      <div className="grain-overlay" />
      <div className="spotlight-cursor" style={spotlightStyle} />
      <Navigation />
      <main style={{ position: "relative", zIndex: 10 }}>
        <Hero />
        <Engineer />
        <Exhibitions />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
