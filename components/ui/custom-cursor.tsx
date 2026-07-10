"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  useEffect(() => {
    const move = (event: MouseEvent) => setPos({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div className="pointer-events-none fixed z-[80] hidden h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/35 mix-blend-difference lg:block" style={{ left: pos.x, top: pos.y }} />;
}
