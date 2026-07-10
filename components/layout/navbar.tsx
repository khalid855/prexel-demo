"use client";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
const nav=[["الرئيسية","/"],["الخدمات","/services"],["الأعمال","/portfolio"],["الباقات","/packages"],["من نحن","/about"],["تواصل معنا","/contact"]];
export function Navbar(){
 const pathname=usePathname();const [scrolled,setScrolled]=useState(false);const [open,setOpen]=useState(false);const [servicesOpen,setServicesOpen]=useState(false);const [lang,setLang]=useState<"AR"|"EN">("AR");
 useEffect(()=>{const f=()=>setScrolled(scrollY>24);f();addEventListener("scroll",f);return()=>removeEventListener("scroll",f)},[]);
 const active=(href:string)=>href==="/"?pathname===href:pathname.startsWith(href);
 return <header className={cn("site-header",scrolled&&"scrolled")}><div className="container-wide nav-inner"><Link href="/" className="logo">PREXEL<span>®</span></Link><nav className="desktop-nav" aria-label="التنقل الرئيسي">{nav.map(([label,href],i)=><div className={i===1?"has-mega":""} key={href}><Link className={active(href)?"active":""} aria-current={active(href)?"page":undefined} href={href}>{label}{i===1&&<ChevronDown/>}</Link>{i===1&&<div className="mega-menu"><div><p className="kicker">OUR CAPABILITIES</p><h2>اختر مسارك.</h2><Link href="/services">جميع الخدمات ←</Link></div><div className="mega-links">{services.map(s=><Link href={`/services/${s.id}`} key={s.id}><span>{s.no}</span>{s.title}</Link>)}</div></div>}</div>)}</nav><div className="nav-tools"><button onClick={()=>setLang(lang==="AR"?"EN":"AR")}>{lang} / {lang==="AR"?"EN":"AR"}</button><Link href="/contact">ابدأ مشروعك</Link></div><button className="menu-button" onClick={()=>setOpen(true)} aria-label="فتح القائمة"><Menu/></button></div>{open&&<div className="mobile-menu"><header><span className="logo">PREXEL</span><button onClick={()=>setOpen(false)} aria-label="إغلاق القائمة"><X/></button></header><nav>{nav.map(([label,href],i)=>i===1?<div key={href}><button onClick={()=>setServicesOpen(!servicesOpen)}>{label}<ChevronDown/></button>{servicesOpen&&<div className="mobile-services">{services.map(s=><Link onClick={()=>setOpen(false)} href={`/services/${s.id}`} key={s.id}>{s.title}</Link>)}</div>}</div>:<Link className={active(href)?"active":""} onClick={()=>setOpen(false)} key={href} href={href}>{label}</Link>)}</nav><button className="lang-mobile" onClick={()=>setLang(lang==="AR"?"EN":"AR")}>{lang} / {lang==="AR"?"EN":"AR"}</button></div>}</header>
}
