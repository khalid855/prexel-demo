"use client";

import { motion } from "framer-motion";

const steps = [
  ["نسمع فكرتك", "نجمع التفاصيل ونفهم هدف المجتمع أو القناة."],
  ["نحدد الاتجاه", "نقترح أسلوبًا بصريًا ومخرجات واضحة."],
  ["نبدأ التصميم", "ننقل الفكرة إلى واجهات، أصول وحركة."],
  ["نشاركك التحديثات", "نرسل نسخ مراجعة قبل التسليم النهائي."],
  ["نسلم المشروع", "ملفات منظمة جاهزة للاستخدام والتطوير."],
];

export function ProcessSection() {
  return (
    <section className="py-24">
      <div className="container-x">
        <h2 className="section-title mb-12">طريقة العمل</h2>
        <div className="relative grid gap-4 lg:grid-cols-5">
          {steps.map(([title, desc], index) => (
            <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className="studio-panel rounded-lg p-5 text-right">
              <span className="font-mono text-sm text-red-300">0{index + 1}</span>
              <h3 className="mt-6 text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/58">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
