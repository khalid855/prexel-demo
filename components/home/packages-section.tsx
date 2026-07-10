import { Check } from "lucide-react";
import { packages } from "@/data/packages";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PackagesSection() {
  return (
    <section id="packages" className="bg-black/30 py-24">
      <div className="container-x">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="text-right">
            <p className="eyebrow mb-4">PACKAGES</p>
            <h2 className="section-title">باقات واضحة كبداية <span className="metal-text">للعرض التجريبي</span></h2>
          </div>
          <div className="w-fit rounded-md border border-white/10 bg-white/5 p-1 text-sm"><span className="inline-block rounded bg-red-900/60 px-4 py-2">شهري</span><span className="inline-block px-4 py-2 text-white/55">مخصص</span></div>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div key={pkg.name} className={cn("studio-panel rounded-lg p-6 transition duration-500 hover:-translate-y-1", pkg.featured && "relative border-red-400/50 bg-red-950/16 lg:-translate-y-4")}>
              {pkg.featured ? <span className="mb-4 inline-flex rounded-full bg-red-800 px-3 py-1 text-xs font-bold">{pkg.tag}</span> : <span className="mb-4 inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">{pkg.tag}</span>}
              <h3 className="text-2xl font-black">{pkg.name}</h3>
              <p className="mt-4 text-4xl font-black metal-text">{pkg.price}</p>
              <div className="mt-6 grid gap-3">{pkg.features.map((feature) => <div key={feature} className="flex items-center justify-end gap-3 text-sm text-white/72"><span>{feature}</span><Check className="h-4 w-4 shrink-0 text-red-300" /></div>)}</div>
              <Button href="#contact" className="mt-7 w-full" variant={pkg.featured ? "metal" : "primary"}>اختر الباقة</Button>
            </div>
          ))}
        </div>
        <div className="glass mt-6 grid gap-5 rounded-lg p-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h3 className="text-2xl font-black">مشروع بتصميم خاص</h3>
            <p className="mt-2 text-white/58">للأفكار الأكبر من الباقات الجاهزة. السعر النهائي يعتمد على نطاق ومتطلبات المشروع.</p>
          </div>
          <Button href="#contact" variant="ghost">اطلب عرض سعر</Button>
        </div>
      </div>
    </section>
  );
}
