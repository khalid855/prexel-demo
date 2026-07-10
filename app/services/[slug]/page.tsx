import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/site-shell";
import { Breadcrumbs, LargeCTA, Visual } from "@/components/studio/sections";
import { serviceById, services } from "@/data/services";
import { projects } from "@/data/projects";
import { ServiceSignature } from "@/components/studio/service-signatures";
export function generateStaticParams(){return services.map(s=>({slug:s.id}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const s=serviceById((await params).slug);return {title:s?.title??"الخدمة"}}
export default async function ServicePage({params}:{params:Promise<{slug:string}>}){const s=serviceById((await params).slug);if(!s)notFound();const related=projects.filter(p=>p.category===s.category||s.category==="Bots").slice(0,2);return <SiteShell><main className={`service-detail detail-${s.id}`}>
 <section className="service-hero"><div className="container-wide"><Breadcrumbs items={[{label:"الرئيسية",href:"/"},{label:"الخدمات",href:"/services"},{label:s.title}]}/><span className="giant-no">{s.no}</span><p className="kicker">{s.category} / SERVICE</p><h1>{s.title}</h1><p>{s.short}</p><Visual label={s.visual} tone={s.id.includes("web")?"visual-blue":s.id.includes("stream")?"visual-red":"visual-violet"}/></div></section>
 <section className="service-overview container-wide"><div><p className="kicker">THE OUTCOME</p><h2>كل تفصيل يؤدي وظيفة.</h2></div><p>{s.short} نبدأ من سياقك الحقيقي، ثم نصنع نظامًا متماسكًا يسهل استخدامه وتطويره بعد التسليم.</p></section>
 <ServiceSignature service={s}/>
 <section className="included container-wide"><header><p className="kicker">SCOPE</p><h2>ماذا تشمل الخدمة؟</h2></header><ol>{s.includes.map((x,i)=><li key={x}><span>0{i+1}</span><strong>{x}</strong></li>)}</ol></section>
 <section className="audience-process"><div className="container-wide"><div><p className="kicker">BUILT FOR</p><h2>مناسبة لـ</h2>{s.audience.map(x=><p className="line-item" key={x}>{x}</p>)}</div><div><p className="kicker">PROCESS</p><h2>طريقة العمل</h2>{s.process.map((x,i)=><p className="process-item" key={x}><span>{i+1}</span>{x}</p>)}</div></div></section>
 <section className="facts container-wide"><div><small>مدة التنفيذ</small><strong>{s.time}</strong></div><div><small>التعديلات</small><strong>{s.revisions}</strong></div><div><small>التسليم</small><strong>جاهز للاستخدام</strong></div></section>
 {related.length>0&&<section className="related container-wide"><p className="kicker">RELATED WORK</p><h2>أعمال مرتبطة</h2><div>{related.map(p=><a href={`/portfolio/${p.id}`} key={p.id}><Visual label={p.client} tone={p.tone}/><h3>{p.title}</h3></a>)}</div></section>}
 <section className="faq container-wide"><p className="kicker">FAQ</p><h2>أسئلة خاصة بالخدمة</h2>{s.faq.map(f=><details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</section><LargeCTA title={`جاهز لبدء ${s.title}؟`}/></main></SiteShell>}
