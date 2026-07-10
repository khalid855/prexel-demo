"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, Images } from "lucide-react";
import { projectCategories, projects } from "@/data/projects";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Project = (typeof projects)[number];

export function PortfolioSection() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);
  const filtered = useMemo(() => filter === "All" ? projects : projects.filter((p) => p.category === filter), [filter]);
  return (
    <section id="portfolio" className="relative bg-black/25 py-24">
      <div className="container-x">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="text-right">
            <p className="eyebrow mb-4">FEATURED WORK</p>
            <h2 className="section-title">أعمال مختارة بتكوين <span className="metal-text">سينمائي</span></h2>
          </div>
          <div className="flex max-w-full gap-2 overflow-x-auto pb-2 scrollbar-hide" dir="ltr">
            {projectCategories.map((cat) => <button key={cat} onClick={() => setFilter(cat)} className={cn("shrink-0 rounded-md border px-4 py-2 text-sm transition", filter === cat ? "border-red-400 bg-red-900/40 text-white" : "border-white/10 bg-white/5 text-white/65 hover:border-white/25 hover:text-white")}>{cat}</button>)}
          </div>
        </div>
        <motion.div layout className="grid auto-rows-[230px] gap-4 md:grid-cols-4">
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.button layout key={project.id} onClick={() => setActive(project)} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }} className={cn("group relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br p-5 text-right transition duration-500 hover:-translate-y-1 hover:border-white/25", project.tone, project.layout === "large" && "md:col-span-2 md:row-span-2", project.layout === "wide" && "md:col-span-2", project.layout === "tall" && "md:row-span-2")}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.18),transparent_18rem)] opacity-80" />
                <div className="absolute inset-5 rounded-lg border border-white/10 opacity-0 transition group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/78 to-transparent p-5 pt-24">
                  <div className="mb-2 flex items-center justify-end gap-2 text-white/60">{project.type} · {project.year}{project.layout === "video" ? <Play className="h-4 w-4" /> : <Images className="h-4 w-4" />}</div>
                  <h3 className="text-xl font-black sm:text-2xl">{project.title}</h3>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <Modal open={!!active} title={active?.title ?? ""} onClose={() => setActive(null)}>
        {active ? (
          <div>
            <div className={cn("mb-6 h-64 rounded-lg bg-gradient-to-br", active.tone)} />
            <div className="grid gap-6 md:grid-cols-[1fr_0.8fr]">
              <p className="leading-8 text-white/68">{active.overview}</p>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/45">Client</p><p className="font-bold">{active.client}</p>
                <p className="mt-4 text-sm text-white/45">Deliverables</p>
                <div className="mt-2 flex flex-wrap gap-2">{active.deliverables.map((d) => <span key={d} className="rounded border border-white/10 px-3 py-1 text-sm">{d}</span>)}</div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="h-28 rounded-md bg-white/8 p-4 text-sm text-white/50">Before preview</div>
              <div className="h-28 rounded-md bg-red-950/40 p-4 text-sm text-white/50">After preview</div>
            </div>
            <Button className="mt-6" onClick={() => setActive(projects[(projects.findIndex((p) => p.id === active.id) + 1) % projects.length])}>المشروع التالي</Button>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
