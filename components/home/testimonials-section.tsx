"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % testimonials.length), 3800);
    return () => window.clearInterval(timer);
  }, [paused]);
  return (
    <section className="bg-black/25 py-24">
      <div className="container-x">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="text-right">
            <p className="eyebrow mb-4">DEMO REVIEWS</p>
            <h2 className="section-title">آراء عملاء تجريبية</h2>
          </div>
          <div className="studio-panel rounded-lg px-5 py-3"><span className="text-3xl font-black metal-text">4.9 / 5</span></div>
        </div>
        <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="overflow-hidden">
          <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(${index * 100}%)`, direction: "ltr" }}>
            {testimonials.map((item) => (
              <article key={item.name} className="min-w-full px-1" dir="rtl">
                <div className="studio-panel grid gap-6 rounded-lg p-6 md:grid-cols-[auto_1fr] md:items-center">
                  <div className="grid h-20 w-20 place-items-center rounded-lg bg-gradient-to-br from-red-950 to-zinc-800 text-2xl font-black">{item.avatar}</div>
                  <div>
                    <div className="mb-2 flex justify-end gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-red-300 text-red-300" />)}</div>
                    <p className="text-2xl font-bold leading-10">“{item.quote}”</p>
                    <p className="mt-4 text-sm text-white/55">{item.name} · {item.service}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-5 flex justify-center gap-2">{testimonials.map((t, i) => <button aria-label={t.name} key={t.name} onClick={() => setIndex(i)} className={`h-2.5 rounded-full transition ${i === index ? "w-8 bg-red-400" : "w-2.5 bg-white/20"}`} />)}</div>
      </div>
    </section>
  );
}
