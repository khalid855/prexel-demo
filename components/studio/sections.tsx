import Link from "next/link";
import { ArrowLeft, ArrowUpLeft } from "lucide-react";

export function Breadcrumbs({items}:{items:{label:string;href?:string}[]}){return <nav aria-label="مسار الصفحة" className="breadcrumbs">{items.map((item,i)=><span key={item.label}>{i>0&&<b>/</b>}{item.href?<Link href={item.href}>{item.label}</Link>:item.label}</span>)}</nav>}
export function PageHero({eyebrow,title,desc,children}:{eyebrow:string;title:string;desc:string;children?:React.ReactNode}){return <section className="page-hero noise"><div className="container-wide"><p className="kicker">{eyebrow}</p><h1>{title}</h1><p className="page-lead">{desc}</p>{children}</div><div className="hero-index" aria-hidden>PX — 26</div></section>}
export function LargeCTA({title="لديك فكرة؟ دعنا نحوّلها إلى مشروع",text="نبدأ بالاستماع، ثم نبني مسارًا واضحًا من الفكرة حتى الإطلاق."}:{title?:string;text?:string}){return <section className="large-cta"><div className="container-wide"><p className="kicker">NEXT PROJECT</p><h2>{title}</h2><div><p>{text}</p><Link className="round-link" href="/contact">ابدأ مشروعك <ArrowUpLeft/></Link></div></div></section>}
export function Visual({label,tone="visual-red",className=""}:{label:string;tone?:string;className?:string}){return <div className={`project-visual ${tone} ${className}`}><span>{label}</span><i>PREXEL®</i></div>}
export function ProjectNavigation({next}:{next:string}){return <Link className="next-project" href={`/portfolio/${next}`}><small>المشروع التالي</small><strong>تابع الاستكشاف</strong><ArrowLeft/></Link>}
