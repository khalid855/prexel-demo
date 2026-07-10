"use client";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
const links=[["الرئيسية","/"],["الخدمات","/services"],["الأعمال","/portfolio"],["الباقات","/packages"],["من نحن","/about"],["تواصل","/contact"]];
export function Footer(){return <footer className="site-footer"><div className="container-wide"><div className="footer-top"><div><Link className="footer-logo" href="/">PREXEL®</Link><p>استوديو مستقل للهويات والتجارب الرقمية.</p></div><nav>{links.map(x=><Link key={x[1]} href={x[1]}>{x[0]}</Link>)}</nav><div><a href="mailto:hello@prexel.store">hello@prexel.store</a><p>Dubai / Remote</p></div></div><div className="footer-bottom"><p>© 2026 PREXEL STORE</p><p>ARABIC DIGITAL STUDIO</p><button onClick={()=>scrollTo({top:0,behavior:"smooth"})}>للأعلى <ArrowUp/></button></div></div></footer>}
