"use client";

import { Download, FileArchive, MessageSquare, Wallet } from "lucide-react";
import { dashboardProject } from "@/data/dashboard";
import { Button } from "@/components/ui/button";

const sidebar = ["نظرة عامة", "مشاريعي", "الملفات", "المدفوعات", "الدعم", "الإعدادات"];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black/40 text-right">
      <div className="grid lg:grid-cols-[260px_1fr]">
        <aside className="border-l border-white/10 bg-black/55 p-5 lg:min-h-screen">
          <div className="mb-8 text-2xl font-black metal-text">PREXEL</div>
          <nav className="grid gap-2">{sidebar.map((item, i) => <button key={item} className={`rounded-md px-4 py-3 text-right transition ${i === 0 ? "border border-red-400/25 bg-red-900/50" : "border border-white/5 bg-white/5 text-white/62 hover:bg-white/10"}`}>{item}</button>)}</nav>
        </aside>
        <section className="p-5 md:p-8">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div><p className="text-white/55">مرحبًا بك في لوحة العميل التجريبية</p><h1 className="text-4xl font-black">{dashboardProject.title}</h1></div>
            <Button href="/">العودة للموقع</Button>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="studio-panel rounded-lg p-6 lg:col-span-2">
              <h2 className="mb-4 text-2xl font-black">حالة المشروع</h2>
              <div className="mb-3 flex justify-between text-sm"><span>التقدم</span><span>{dashboardProject.progress}%</span></div>
              <div className="h-3 overflow-hidden rounded-full bg-white/10"><div className="h-full bg-gradient-to-l from-red-800 to-white" style={{ width: `${dashboardProject.progress}%` }} /></div>
              <div className="mt-6 grid gap-3 md:grid-cols-5">{dashboardProject.steps.map((s, i) => <div key={s} className={`rounded-md border p-3 text-sm ${i < 3 ? "border-red-400/35 bg-red-950/25" : "border-white/10 bg-white/5"}`}>{s}</div>)}</div>
            </div>
            <Card icon={<Wallet />} title="الدفع" items={[dashboardProject.payment, "فاتورة تجريبية", "لا توجد عملية دفع حقيقية"]} />
            <Card icon={<MessageSquare />} title="آخر التحديثات" items={dashboardProject.updates} />
            <Card icon={<FileArchive />} title="الملفات المرفوعة" items={dashboardProject.files} />
            <Card icon={<MessageSquare />} title="رسائل الدعم" items={dashboardProject.messages} />
          </div>
          <div className="mt-5 flex flex-wrap gap-3"><Button variant="ghost"><Download className="h-4 w-4" /> تحميل الملفات</Button><Button variant="ghost">طلب تعديل</Button></div>
        </section>
      </div>
    </main>
  );
}

function Card({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return <div className="studio-panel rounded-lg p-5"><div className="mb-4 flex items-center justify-end gap-2 text-red-300"><h3 className="font-black text-white">{title}</h3>{icon}</div><div className="grid gap-2">{items.map((item) => <div key={item} className="rounded-md bg-white/5 p-3 text-sm text-white/65">{item}</div>)}</div></div>;
}
