"use client";

import Link from "next/link";
import { Menu, Volume2, VolumeX, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  ["الرئيسية", "/#home"],
  ["خدماتنا", "/#services"],
  ["أعمالنا", "/#portfolio"],
  ["الباقات", "/#packages"],
  ["من نحن", "/#why"],
  ["تواصل معنا", "/#contact"],
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"AR" | "EN">("AR");
  const [sound, setSound] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-40 transition-all duration-500", scrolled ? "border-b border-white/10 bg-black/72 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl" : "bg-transparent")}>
      <div className="container-x flex h-20 min-w-0 items-center justify-between gap-4">
        <Link href="/" className="sweep rounded px-1 text-xl font-black tracking-[0.08em] metal-text sm:text-2xl sm:tracking-[0.16em]">PREXEL</Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="relative rounded-md px-3 py-2 text-sm text-white/72 transition hover:bg-white/8 hover:text-white after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-right after:scale-x-0 after:bg-red-300 after:transition-transform hover:after:scale-x-100">{lang === "AR" ? label : href.includes("services") ? "Services" : href.includes("portfolio") ? "Work" : href.includes("packages") ? "Packages" : href.includes("contact") ? "Contact" : href.includes("why") ? "About" : "Home"}</Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <button className="rounded-md border border-white/15 px-3 py-2 text-sm text-white/75" onClick={() => setLang(lang === "AR" ? "EN" : "AR")}>{lang}</button>
          <button aria-label="sound toggle" className="rounded-md border border-white/15 p-2 text-white/75" onClick={() => setSound(!sound)}>{sound ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}</button>
          <Button href="/#contact" className="px-4">ابدأ مشروعك</Button>
        </div>
        <button aria-label="فتح القائمة" className="rounded-md border border-white/15 bg-white/5 p-2 transition hover:bg-white/10 lg:hidden" onClick={() => setOpen(true)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {open ? (
        <div className="fixed inset-0 z-50 bg-black/92 p-5 backdrop-blur-xl lg:hidden">
          <div className="mb-8 flex items-center justify-between">
            <span className="text-2xl font-black metal-text">PREXEL</span>
            <button aria-label="إغلاق القائمة" onClick={() => setOpen(false)} className="rounded-md border border-white/15 p-2"><X /></button>
          </div>
          <div className="grid gap-3">
            {nav.map(([label, href]) => (
              <Link onClick={() => setOpen(false)} key={href} href={href} className="rounded-md border border-white/10 bg-white/5 p-4 text-right text-lg transition hover:border-red-300/40 hover:bg-red-950/20">{label}</Link>
            ))}
            <Button href="/#contact" className="mt-3">ابدأ مشروعك</Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
