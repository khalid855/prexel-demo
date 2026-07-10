"use client";

import Link from "next/link";
import { ArrowUp, Disc3, Gamepad2, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 py-12">
      <div className="container-x grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <div className="mb-4 text-3xl font-black tracking-[0.16em] metal-text">PREXEL</div>
          <p className="max-w-sm text-sm leading-7 text-white/62">استوديو رقمي تجريبي لخدمات الديسكورد، الستريم، البراندنق، FiveM والتجارب الإبداعية المخصصة.</p>
        </div>
        <FooterList title="روابط" items={["الرئيسية", "خدماتنا", "أعمالنا", "الباقات"]} />
        <FooterList title="خدمات" items={["Discord", "Stream Packs", "3D", "FiveM"]} />
        <div>
          <h3 className="mb-4 font-bold">تواصل</h3>
          <div className="flex gap-2">
            {[Disc3, Mail, Gamepad2].map((Icon, index) => <span key={index} className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/5"><Icon className="h-4 w-4" /></span>)}
          </div>
          <button onClick={() => scrollTo({ top: 0, behavior: "smooth" })} className="mt-5 inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm">للأعلى <ArrowUp className="h-4 w-4" /></button>
        </div>
      </div>
      <div className="container-x mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45">
        <p>© 2026 PREXEL STORE Demo Concept.</p>
        <div className="flex gap-4"><Link href="#">سياسة الخصوصية</Link><Link href="#">الشروط</Link></div>
      </div>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-4 font-bold">{title}</h3>
      <ul className="space-y-3 text-sm text-white/58">{items.map((item) => <li key={item}><Link href="/#home" className="hover:text-white">{item}</Link></li>)}</ul>
    </div>
  );
}
