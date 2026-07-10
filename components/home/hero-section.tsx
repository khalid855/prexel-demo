"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

const stats = ["+150 مشروع", "+90 عميل", "4.9 تقييم العملاء", "دعم مخصص"];

export function HeroSection() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 80, damping: 20 });
  const sy = useSpring(y, { stiffness: 80, damping: 20 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-10, 10]);

  return (
    <section id="home" onMouseMove={(event) => {
      const rect = event.currentTarget.getBoundingClientRect();
      x.set((event.clientX - rect.left) / rect.width - 0.5);
      y.set((event.clientY - rect.top) / rect.height - 0.5);
    }} className="noise relative isolate min-h-screen overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_64%_32%,rgba(159,16,40,0.20),transparent_30rem)]" />
      <div className="container-x grid min-h-[calc(100vh-6rem)] min-w-0 items-center gap-10 py-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div className="relative z-10 w-full min-w-0 max-w-full text-center sm:text-right" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}>
          <p className="eyebrow mx-auto mb-5 sm:mx-0">PREXEL DIGITAL STUDIO</p>
          <h1 dir="rtl" className="mx-auto max-w-[320px] text-balance text-3xl font-black leading-[1.2] sm:mx-0 sm:max-w-[12ch] sm:text-6xl lg:text-7xl">
            نصمم حضورك الرقمي <span className="metal-text">بطريقة لا تُنسى</span>
          </h1>
          <p dir="rtl" className="mx-auto mt-6 max-w-[330px] text-sm leading-7 text-white/68 sm:mx-0 sm:max-w-2xl sm:text-lg sm:leading-9">
            PREXEL STORE يبني هويات مخصصة لمجتمعات Discord، صناع المحتوى، باقات الستريم، التصاميم ثلاثية الأبعاد وتجارب FiveM بأسلوب سينمائي فاخر.
          </p>
          <div className="mx-auto mt-8 flex w-full max-w-[330px] flex-col gap-3 sm:mx-0 sm:max-w-none sm:flex-row">
            <Button href="#contact" className="w-full sm:w-auto">ابدأ مشروعك</Button>
            <Button href="#portfolio" variant="ghost" className="w-full sm:w-auto">استعرض أعمالنا</Button>
          </div>
          <div className="mx-auto mt-10 grid w-full max-w-[330px] min-w-0 grid-cols-2 gap-3 sm:mx-0 sm:max-w-none sm:grid-cols-4">
            {stats.map((stat) => <div className="studio-panel min-w-0 rounded-lg p-4 text-center" key={stat}><span className="block break-words text-sm font-black text-white sm:text-lg">{stat}</span></div>)}
          </div>
        </motion.div>
        <motion.div style={{ rotateX, rotateY }} className="relative mx-auto aspect-square w-full max-w-[min(84vw,540px)] [transform-style:preserve-3d]">
          <div className="absolute inset-12 rounded-full border border-white/10 bg-white/[0.03]" />
          <div className="hero-orb animate-float absolute inset-[18%] rounded-[38%] shadow-2xl" />
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute left-10 top-16 h-2 w-40 rotate-12 rounded-full bg-white/60 blur-sm" />
          <div className="absolute bottom-12 right-12 rounded-lg border border-white/15 bg-black/50 p-4 backdrop-blur">
            <p className="font-mono text-xs text-white/55">LIVE CONCEPT</p>
            <p className="text-xl font-black metal-text">PREXEL SYSTEM</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
