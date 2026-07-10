"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Copy, Disc3, Mail, Paperclip, Ticket } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { copyText } from "@/lib/utils";
import { ProjectRequest, projectRequestSchema } from "@/lib/validations";

const services = ["Discord Design", "Discord Bot", "Stream Pack", "Logo", "Branding", "3D Design", "FiveM", "Website", "Custom Request"];
const budgets = ["أقل من $50", "$50-$150", "$150-$300", "أكثر من $300", "غير محدد"];

export function ContactSection() {
  const [summary, setSummary] = useState("");
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm<ProjectRequest>({ resolver: zodResolver(projectRequestSchema) });
  const onSubmit = (data: ProjectRequest) => {
    const text = `PREXEL Request\nName: ${data.name}\nEmail: ${data.email}\nDiscord: ${data.discord}\nService: ${data.service}\nBudget: ${data.budget}\nDeadline: ${data.deadline}\nDescription: ${data.description}`;
    localStorage.setItem("prexel-last-request", JSON.stringify({ ...data, createdAt: new Date().toISOString() }));
    setSummary(text);
    reset();
  };
  return (
    <section id="contact" className="py-24">
      <div className="container-x grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="text-right">
          <p className="eyebrow mb-4">START A PROJECT</p>
          <h2 className="section-title">ابدأ مشروعك مع PREXEL</h2>
          <p className="mt-5 leading-8 text-white/58">النموذج تجريبي ولا يرسل إلى Backend. يتم حفظ آخر طلب في localStorage للعرض فقط.</p>
          <div className="mt-8 grid gap-3">
            {[["Discord", Disc3], ["Email", Mail], ["Support Ticket", Ticket]].map(([label, Icon]) => <div key={label as string} className="studio-panel flex items-center justify-between rounded-lg p-4"><span>{label as string}</span><Icon className="h-5 w-5 text-red-300" /></div>)}
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="studio-panel grid gap-4 rounded-lg p-5 md:grid-cols-2">
          <Field label="الاسم" error={errors.name?.message}><input {...register("name")} className="input" /></Field>
          <Field label="البريد الإلكتروني" error={errors.email?.message}><input {...register("email")} className="input" /></Field>
          <Field label="Discord username" error={errors.discord?.message}><input {...register("discord")} className="input" /></Field>
          <Field label="نوع الخدمة" error={errors.service?.message}><select {...register("service")} className="input"><option value="">اختر</option>{services.map((s) => <option key={s}>{s}</option>)}</select></Field>
          <Field label="الميزانية التقريبية" error={errors.budget?.message}><select {...register("budget")} className="input"><option value="">اختر</option>{budgets.map((b) => <option key={b}>{b}</option>)}</select></Field>
          <Field label="موعد التسليم المطلوب" error={errors.deadline?.message}><input type="date" {...register("deadline")} className="input" /></Field>
          <Field label="وصف المشروع" error={errors.description?.message} wide><textarea {...register("description")} rows={5} className="input resize-none" /></Field>
          <div className="md:col-span-2 flex items-center justify-center gap-3 rounded-lg border border-dashed border-white/20 bg-white/5 p-5 text-center text-sm text-white/50"><Paperclip className="h-4 w-4" /> مساحة رفع ملفات تجريبية</div>
          <label className="md:col-span-2 flex flex-row-reverse items-start justify-end gap-3 text-sm text-white/70"><input type="checkbox" {...register("agreement")} className="mt-1 accent-red-700" /> أوافق على استخدام البيانات لغرض العرض التجريبي فقط.</label>
          {errors.agreement?.message ? <p className="md:col-span-2 text-sm text-red-300">{errors.agreement.message}</p> : null}
          <Button type="submit" className="md:col-span-2">إرسال الطلب</Button>
          {isSubmitSuccessful ? <p className="md:col-span-2 text-sm text-emerald-300">تم حفظ الطلب التجريبي.</p> : null}
        </form>
      </div>
      <Modal open={!!summary} title="تم إنشاء ملخص الطلب" onClose={() => setSummary("")}>
        <pre className="overflow-auto rounded-md bg-black/50 p-4 text-left text-sm text-white/70" dir="ltr">{summary}</pre>
        <Button className="mt-4" onClick={() => copyText(summary)}><Copy className="h-4 w-4" /> نسخ ملخص الطلب</Button>
      </Modal>
      <style jsx>{`.input{width:100%;border-radius:0.5rem;border:1px solid rgba(255,255,255,.12);background:rgba(0,0,0,.35);padding:.8rem 1rem;color:white;outline:none;transition:border-color .25s ease,background .25s ease,box-shadow .25s ease}.input:focus{border-color:rgba(248,113,113,.72);background:rgba(0,0,0,.52);box-shadow:0 0 0 3px rgba(159,16,40,.12)}`}</style>
    </section>
  );
}

function Field({ label, error, wide, children }: { label: string; error?: string; wide?: boolean; children: React.ReactNode }) {
  return <label className={wide ? "text-right md:col-span-2" : "text-right"}><span className="mb-2 block text-sm text-white/65">{label}</span>{children}{error ? <span className="mt-1 block text-xs text-red-300">{error}</span> : null}</label>;
}
