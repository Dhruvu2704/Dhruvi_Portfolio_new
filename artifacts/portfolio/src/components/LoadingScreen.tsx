import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [lines, setLines] = useState<string[]>([]);
  const messages = [
    "INITIALIZING SYSTEM...",
    "LOADING MODULES...",
    "DHRUVI_SRIVASTAVA.EXE READY",
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < messages.length) {
        setLines((prev) => [...prev, messages[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center font-mono text-primary">
      <div className="w-full max-w-md p-6">
        {lines.map((line, i) => (
          <div key={i} className="mb-2 opacity-80 animate-in fade-in">
            &gt; {line}
          </div>
        ))}
        {lines.length < messages.length && (
          <div className="animate-pulse">&gt; _</div>
        )}
      </div>
    </div>
  );
}
