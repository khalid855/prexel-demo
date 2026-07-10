import { SiteShell } from "@/components/layout/site-shell";
import { Breadcrumbs, PageHero } from "@/components/studio/sections";
import { ProjectForm } from "@/components/studio/project-form";
export const metadata={title:"ابدأ مشروعك"};
export default function ContactPage(){return <SiteShell><main><PageHero eyebrow="START A PROJECT" title="لنصنع شيئًا يستحق التذكر." desc="أخبرنا عن الفكرة وسنحوّلها معك إلى نطاق واضح وخطوات قابلة للتنفيذ."><Breadcrumbs items={[{label:"الرئيسية",href:"/"},{label:"تواصل معنا"}]}/></PageHero><section className="contact-layout container-wide"><aside><p className="kicker">DIRECT CONTACT</p><h2>تفضّل الحديث أولًا؟</h2><a href="mailto:hello@prexel.store">hello@prexel.store</a><p>متاحون للمشاريع الجديدة<br/>الرد خلال يوم عمل.</p></aside><ProjectForm/></section></main></SiteShell>}
