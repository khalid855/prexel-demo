import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/site-shell";
import { Breadcrumbs, LargeCTA, ProjectNavigation, Visual } from "@/components/studio/sections";
import { projectById, projects } from "@/data/projects";
export function generateStaticParams(){return projects.map(p=>({slug:p.id}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){return {title:projectById((await params).slug)?.title??"مشروع"}}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
 const p=projectById((await params).slug);if(!p)notFound();const index=projects.findIndex(x=>x.id===p.id);
 return <SiteShell><main className={`case-study case-layout-${index%3}`}>
  <section className="project-hero"><div className="container-wide"><Breadcrumbs items={[{label:"الرئيسية",href:"/"},{label:"الأعمال",href:"/portfolio"},{label:p.title}]}/><p className="kicker">CASE STUDY / {p.year}</p><h1>{p.title}</h1><div className="project-facts"><p><small>العميل</small>{p.client}</p><p><small>النوع</small>{p.type}</p><p><small>السنة</small>{p.year}</p></div></div><Visual label={p.client} tone={p.tone}/></section>
  <section className="case-intro container-wide"><p className="kicker">THE BRIEF</p><h2>{p.overview}</h2><span className="case-mark">PX / 0{index+1}</span></section>
  <section className="challenge-solution container-wide"><article><span>01</span><p className="kicker">التحدي</p><h2>{p.challenge}</h2></article><article><span>02</span><p className="kicker">الحل</p><h2>{p.solution}</h2></article></section>
  <section className="case-gallery"><Visual label="FRAME / 01" tone={p.tone}/><div className="container-wide split-gallery"><Visual label="DETAIL / A" tone={p.tone}/><Visual label="DETAIL / B" tone="visual-dark"/></div><Visual label="BEFORE → AFTER" tone={p.tone}/></section>
  <section className="used-services container-wide"><p className="kicker">CAPABILITIES</p><h2>الخدمات المستخدمة</h2>{p.services.map((x,i)=><div key={x}><span>0{i+1}</span>{x}</div>)}</section>
  <div className="container-wide"><ProjectNavigation next={p.next}/></div><LargeCTA title="هل تريد مشروعًا بنفس الطموح؟"/>
 </main></SiteShell>
}
