"use client";
import { useState } from "react";
import Link from "next/link";
import { projects, projectCategories } from "@/data/projects";
import { Visual } from "./sections";
export function PortfolioBrowser(){const [active,setActive]=useState("الكل");const visible=active==="الكل"?projects:projects.filter(p=>p.category===active);return <><div className="filters" role="group" aria-label="فلترة المشاريع">{projectCategories.map(c=><button aria-pressed={active===c} onClick={()=>setActive(c)} key={c}>{c}</button>)}</div><div className="portfolio-masonry">{visible.map((p,i)=><Link href={`/portfolio/${p.id}`} key={p.id} className={`portfolio-item item-${i%5}`}><Visual label={`${p.client} / ${p.year}`} tone={p.tone}/><div><p>{p.category} — {p.type}</p><h2>{p.title}</h2></div></Link>)}</div></>}
