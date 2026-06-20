import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === "pointer");
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[999]">
      <div
        className={`absolute w-2 h-2 bg-white rounded-full transition-transform duration-100 -translate-x-1/2 -translate-y-1/2 ${
          isPointer ? "scale-150" : ""
        }`}
        style={{ left: position.x, top: position.y }}
      />
      <div
        className={`absolute w-8 h-8 border border-white/30 rounded-full transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2 ${
          isPointer ? "scale-150 bg-white/10" : ""
        }`}
        style={{ left: position.x, top: position.y }}
      />
    </div>
  );
}
