"use client";

import { useRouter } from "next/navigation";
import { Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const router = useRouter();
  return (
    <main className="grid min-h-screen place-items-center p-4">
      <div className="glass w-full max-w-md rounded-lg p-6">
        <div className="mb-8 text-center">
          <p className="text-4xl font-black tracking-[0.16em] metal-text">PREXEL</p>
          <p className="mt-3 text-sm text-white/55">Demo client login</p>
        </div>
        <label className="mb-4 block"><span className="mb-2 block text-sm text-white/60">Email</span><div className="flex items-center gap-2 rounded-md border border-white/10 bg-black/35 px-3"><Mail className="h-4 w-4 text-white/40" /><input defaultValue="client@prexel.demo" className="w-full bg-transparent py-3 outline-none" /></div></label>
        <label className="mb-6 block"><span className="mb-2 block text-sm text-white/60">Password</span><div className="flex items-center gap-2 rounded-md border border-white/10 bg-black/35 px-3"><Lock className="h-4 w-4 text-white/40" /><input type="password" defaultValue="demo1234" className="w-full bg-transparent py-3 outline-none" /></div></label>
        <Button className="w-full" onClick={() => { localStorage.setItem("prexel-demo-session", "1"); router.push("/dashboard"); }}>Demo login</Button>
      </div>
    </main>
  );
}
