import { BadgeCheck, Headphones, Layers, RefreshCcw, ShieldCheck, Sparkles } from "lucide-react";

const points = [
  ["تصاميم مخصصة بالكامل", Sparkles],
  ["هوية تناسب مجتمعك", Layers],
  ["جودة عالية", ShieldCheck],
  ["تحديثات مستمرة", RefreshCcw],
  ["تسليم منظم", BadgeCheck],
  ["دعم بعد التسليم", Headphones],
];

export function WhySection() {
  return (
    <section id="why" className="py-24">
      <div className="container-x">
        <div className="mb-12 max-w-3xl text-right">
          <p className="eyebrow mb-4">WHY PREXEL</p>
          <h2 className="section-title">اختيار PREXEL يعني تجربة منظمة ونتيجة مخصصة</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {points.map(([title, Icon], index) => (
            <div key={title as string} className="studio-panel rounded-lg p-6 text-right transition duration-500 hover:-translate-y-1">
              <div className="mb-7 flex items-center justify-between">
                <span className="font-mono text-sm text-white/35">0{index + 1}</span>
                <Icon className="h-7 w-7 text-red-300" />
              </div>
              <h3 className="text-xl font-black">{title as string}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
