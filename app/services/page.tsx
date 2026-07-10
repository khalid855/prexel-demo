import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";
import { SiteShell } from "@/components/layout/site-shell";
import { Breadcrumbs, LargeCTA, PageHero, Visual } from "@/components/studio/sections";
import { services } from "@/data/services";
export const metadata={title:"الخدمات"};
export default function ServicesPage(){return <SiteShell><main><PageHero eyebrow="WHAT WE DO" title="خدمات تصنع الفرق." desc="ثمانية مسارات إبداعية، تُبنى كل واحدة منها حول هدف واضح لا حول قالب جاهز."><Breadcrumbs items={[{label:"الرئيسية",href:"/"},{label:"الخدمات"}]}/></PageHero><section className="services-index container-wide">{services.map((s,i)=><article key={s.id} className={i%2?"reverse":""}><div className="service-meta"><span>{s.no}</span><p>{s.category}</p></div><Visual label={s.visual} tone={i%3===0?"visual-violet":i%3===1?"visual-blue":"visual-red"}/><div className="service-copy"><h2>{s.title}</h2><p>{s.short}</p><ul>{s.includes.slice(0,3).map(x=><li key={x}>{x}</li>)}</ul><Link href={`/services/${s.id}`}>عرض التفاصيل <ArrowUpLeft/></Link></div></article>)}</section><LargeCTA/></main></SiteShell>}
