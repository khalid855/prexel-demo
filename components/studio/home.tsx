import Link from "next/link";
import { ArrowDown, ArrowUpLeft } from "lucide-react";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { LargeCTA, Visual } from "./sections";

export function HomeExperience(){return <>
 <section className="home-hero noise"><div className="hero-rings"/><div className="container-wide hero-copy"><p className="kicker">INDEPENDENT DIGITAL STUDIO — 2026</p><h1>نصمّم حضورًا<br/><span>لا يُنسى.</span></h1><p>استوديو رقمي يبني الهويات والتجارب والمجتمعات بشخصية واضحة وتنفيذ دقيق.</p><div className="hero-actions"><Link href="/services">استعرض خدماتنا <ArrowUpLeft/></Link><Link href="/portfolio" className="quiet">شاهد أعمالنا <ArrowUpLeft/></Link></div></div><div className="scroll-note"><ArrowDown/> مرّر للاستكشاف</div></section>
 <section className="intro-strip"><div className="container-wide"><p>من الفكرة الأولى</p><strong>نبني أنظمة بصرية<br/>تعيش عبر الشاشات.</strong><span>استراتيجية / تصميم / تطوير / حركة</span></div></section>
 <section className="home-services container-wide"><header><p className="kicker">SELECTED SERVICES</p><h2>قدرات متعددة.<br/>رؤية واحدة.</h2></header>{services.slice(0,4).map((s,i)=><article key={s.id} className={i%2?"reverse":""}><Visual label={s.visual} tone={i===1?"visual-blue":i===2?"visual-red":"visual-violet"}/><div><span className="service-no">{s.no}</span><p>{s.category}</p><h3>{s.title}</h3><p className="copy">{s.short}</p><Link href={`/services/${s.id}`}>اكتشف الخدمة <ArrowUpLeft/></Link></div></article>)}<Link className="text-link" href="/services">عرض جميع الخدمات <ArrowUpLeft/></Link></section>
 <section className="selected-work"><div className="container-wide"><header><p className="kicker">SELECTED WORK</p><h2>عملٌ يتحدث<br/>قبل أن نشرحه.</h2></header><div className="editorial-work">{projects.slice(0,3).map((p,i)=><Link href={`/portfolio/${p.id}`} key={p.id} className={`work-${i+1}`}><Visual label={`0${i+1} / ${p.client}`} tone={p.tone}/><div><span>{p.category} — {p.year}</span><h3>{p.title}</h3></div></Link>)}</div><Link className="text-link" href="/portfolio">كل الأعمال <ArrowUpLeft/></Link></div></section>
 <LargeCTA/>
 </>}
