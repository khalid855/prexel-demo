"use client";

import { useState } from "react";
import { ArrowUpLeft, Check } from "lucide-react";
import { services } from "@/data/services";
import { DynamicIcon } from "@/components/ui/icons";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

type Service = (typeof services)[number];

export function ServicesGrid() {
  const [active, setActive] = useState<Service | null>(null);
  return (
    <section id="services" className="relative py-24">
      <div className="container-x">
        <div className="mb-12 max-w-3xl text-right">
          <p className="eyebrow mb-4">SERVICES</p>
          <h2 className="section-title">كل ما تحتاجه لبناء <span className="metal-text">هوية رقمية قوية</span></h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <button key={service.id} onClick={() => setActive(service)} className="group studio-panel min-h-[18rem] overflow-hidden rounded-lg p-5 text-right transition duration-500 hover:-translate-y-1 hover:border-white/24 focus:outline-none focus:ring-2 focus:ring-red-500/70" style={{ boxShadow: `0 0 0 1px ${service.accent}18, 0 24px 80px #0008` }}>
              <div className="mb-8 flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-md border border-white/10 bg-black/25 transition group-hover:scale-105" style={{ color: service.accent }}><DynamicIcon name={service.icon} className="h-5 w-5" /></span>
                <span className="font-mono text-sm text-white/38">{service.no}</span>
              </div>
              <h3 className="mb-3 text-xl font-black">{service.title}</h3>
              <p className="line-clamp-3 text-sm leading-7 text-white/58">{service.desc}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm text-white/70"><ArrowUpLeft className="h-4 w-4 transition group-hover:-translate-x-1 group-hover:-translate-y-1" /> تفاصيل الخدمة</span>
            </button>
          ))}
        </div>
      </div>
      <Modal open={!!active} title={active?.title ?? ""} onClose={() => setActive(null)}>
        {active ? (
          <div className="grid gap-6 md:grid-cols-[1fr_0.7fr]">
            <div>
              <p className="leading-8 text-white/68">{active.desc} يتم تنفيذ الخدمة بأسلوب مخصص حسب شخصية المجتمع، مع تسليم واضح وملفات منظمة قابلة للاستخدام مباشرة.</p>
              <div className="mt-5 grid gap-3">{active.includes.map((item) => <div key={item} className="flex items-center justify-end gap-3 rounded-md border border-white/10 bg-white/5 p-3 text-right"><span>{item}</span><Check className="h-4 w-4 shrink-0 text-red-300" /></div>)}</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/30 p-5">
              <p className="text-sm text-white/50">مدة التنفيذ التقديرية</p>
              <p className="mt-2 text-3xl font-black metal-text">{active.time}</p>
              <Button href="#contact" className="mt-6 w-full">اطلب الخدمة</Button>
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
