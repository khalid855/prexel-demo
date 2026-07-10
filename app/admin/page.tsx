"use client";

import { useMemo, useState } from "react";
import { BarChart3, Briefcase, Plus, Search, Users } from "lucide-react";
import { adminOrders } from "@/data/dashboard";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

export default function AdminPage() {
  const [query, setQuery] = useState("");
  const [orders, setOrders] = useState(adminOrders);
  const [extra, setExtra] = useState<string[]>([]);
  const filtered = useMemo(() => orders.filter((o) => `${o.customer} ${o.service} ${o.status}`.toLowerCase().includes(query.toLowerCase())), [orders, query]);
  return (
    <main className="min-h-screen bg-black/45 text-right">
      <div className="grid lg:grid-cols-[250px_1fr]">
        <aside className="border-l border-white/10 bg-black/60 p-5 lg:min-h-screen">
          <div className="mb-2 text-2xl font-black metal-text">PREXEL</div>
          <p className="mb-8 rounded-full border border-red-400/30 px-3 py-1 text-xs text-red-200">Demo Admin</p>
          <nav className="grid gap-2">{["Dashboard", "Orders", "Customers", "Services", "Portfolio"].map((n, i) => <button key={n} className={`rounded-md border px-4 py-3 text-right transition ${i === 0 ? "border-red-400/25 bg-red-900/35 text-white" : "border-white/5 bg-white/5 text-white/65 hover:bg-white/10"}`}>{n}</button>)}</nav>
        </aside>
        <section className="p-5 md:p-8">
          <h1 className="mb-8 text-4xl font-black">لوحة إدارة تجريبية</h1>
          <div className="mb-6 grid gap-4 md:grid-cols-4">
            <Stat icon={<Briefcase />} label="Orders" value={orders.length.toString()} />
            <Stat icon={<Users />} label="Customers" value="42" />
            <Stat icon={<BarChart3 />} label="Revenue" value="$1.8k" />
            <Stat icon={<Plus />} label="Projects" value={(projects.length + extra.length).toString()} />
          </div>
          <div className="studio-panel mb-6 rounded-lg p-4">
            <div className="mb-4 flex items-center gap-2 rounded-md border border-white/10 bg-black/35 px-3"><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="بحث في الطلبات" className="w-full bg-transparent py-3 text-right outline-none" /><Search className="h-4 w-4 text-white/45" /></div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-sm">
                <thead className="text-white/45"><tr><th className="p-3 text-right">ID</th><th className="p-3 text-right">Customer</th><th className="p-3 text-right">Service</th><th className="p-3 text-right">Status</th><th className="p-3 text-right">Value</th></tr></thead>
                <tbody>{filtered.map((order) => <tr key={order.id} className="border-t border-white/10"><td className="p-3">{order.id}</td><td className="p-3">{order.customer}</td><td className="p-3">{order.service}</td><td className="p-3"><select value={order.status} onChange={(e) => setOrders((all) => all.map((o) => o.id === order.id ? { ...o, status: e.target.value } : o))} className="rounded bg-white/10 p-2"><option>تم الاستلام</option><option>قيد التصميم</option><option>بانتظار المراجعة</option><option>مكتمل</option></select></td><td className="p-3">{order.value}</td></tr>)}</tbody>
              </table>
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            <Panel title="Customers" items={["A27", "Dark RP", "NOVA Team", "R7 Store"]} />
            <Panel title="Services" items={services.map((s) => s.title)} />
            <Panel title="Portfolio management" items={[...projects.map((p) => p.title), ...extra]} action={() => setExtra((items) => [...items, `Mock Project ${items.length + 1}`])} />
          </div>
        </section>
      </div>
    </main>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return <div className="studio-panel rounded-lg p-5"><div className="mb-4 flex justify-end text-red-300">{icon}</div><p className="text-sm text-white/45">{label}</p><p className="text-3xl font-black">{value}</p></div>;
}

function Panel({ title, items, action }: { title: string; items: string[]; action?: () => void }) {
  return <div className="studio-panel rounded-lg p-5"><div className="mb-4 flex items-center justify-between"><h2 className="text-xl font-black">{title}</h2>{action ? <button onClick={action} className="rounded-md bg-red-900 px-3 py-2 text-sm transition hover:bg-red-800">Add mock</button> : null}</div><div className="grid gap-2">{items.slice(0, 8).map((item) => <div key={item} className="rounded-md bg-white/5 p-3 text-sm text-white/65">{item}</div>)}</div></div>;
}
