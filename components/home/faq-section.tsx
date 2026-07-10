"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  ["كيف أطلب خدمة؟", "املأ نموذج بداية المشروع وسيظهر ملخص الطلب التجريبي مباشرة."],
  ["هل التصاميم مخصصة بالكامل؟", "نعم، كل تصميم في هذا المفهوم مبني حسب هوية العميل ومجتمعه."],
  ["كم يستغرق تنفيذ المشروع؟", "يعتمد على نوع الخدمة، وغالبًا بين 3 و14 يومًا في البيانات التجريبية."],
  ["ما طرق الدفع المتاحة؟", "يمكن ربط بوابات دفع لاحقًا مثل Stripe أو PayPal أو تحويل محلي."],
  ["كم عدد التعديلات؟", "حسب الباقة المختارة، ويمكن إضافة تعديلات مخصصة."],
  ["هل تقدمون دعمًا بعد التسليم؟", "نعم، الدعم جزء أساسي من تجربة التسليم المنظمة."],
  ["هل يمكن طلب باقة خاصة؟", "نعم، يوجد خيار مشروع بتصميم خاص في نموذج التواصل."],
  ["هل تقدمون خدمات خارج الديسكورد؟", "نعم، مثل المواقع، الهويات، 3D، FiveM وباقات الستريم."],
];

export function FaqSection() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-black/25 py-24">
      <div className="container-x max-w-4xl">
        <h2 className="section-title mb-10 text-right">الأسئلة الشائعة</h2>
        <div className="grid gap-3">
          {faqs.map(([q, a], index) => (
            <div key={q} className="rounded-lg border border-white/10 bg-white/[0.035] transition hover:border-white/20">
              <button className="flex w-full items-center justify-between gap-3 p-5 text-right font-bold" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}>
                <ChevronDown className={cn("h-5 w-5 transition", open === index && "rotate-180")} />{q}
              </button>
              {open === index ? <p className="px-5 pb-5 text-right leading-7 text-white/58">{a}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
