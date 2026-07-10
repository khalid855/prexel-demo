"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return true;
    const skip = new URLSearchParams(window.location.search).get("skipLoader") === "1";
    return !skip && sessionStorage.getItem("prexel-loader-skip") !== "1";
  });

  useEffect(() => {
    if (!visible) return;
    const timer = window.setInterval(() => setProgress((value) => Math.min(value + 7, 100)), 85);
    const done = window.setTimeout(() => {
      sessionStorage.setItem("prexel-loader-skip", "1");
      setVisible(false);
    }, 1700);
    return () => {
      window.clearInterval(timer);
      window.clearTimeout(done);
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div className="fixed inset-0 z-[70] grid place-items-center bg-black" exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
          <div className="w min-w-[260px] text-center">
            <div className="sweep mx-auto mb-6 w-fit px-2 text-5xl font-black tracking-[0.18em] metal-text">PREXEL</div>
            <div className="h-1 overflow-hidden rounded-full bg-white/10">
              <motion.div className="h-full bg-gradient-to-l from-red-800 via-white to-zinc-500" animate={{ width: `${progress}%` }} />
            </div>
            <p className="mt-3 font-mono text-sm text-white/60">{progress}%</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
