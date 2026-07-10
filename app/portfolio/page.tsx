import { SiteShell } from "@/components/layout/site-shell";
import { PortfolioBrowser } from "@/components/studio/portfolio-browser";
import { Breadcrumbs, LargeCTA, PageHero } from "@/components/studio/sections";
export const metadata={title:"أعمالنا"};
export default function PortfolioPage(){return <SiteShell><main><PageHero eyebrow="PREXEL ARCHIVE" title="أعمالنا." desc="مختارات من هويات ومجتمعات وعوالم رقمية صُممت لتترك أثرًا."><Breadcrumbs items={[{label:"الرئيسية",href:"/"},{label:"الأعمال"}]}/></PageHero><section className="portfolio-page container-wide"><PortfolioBrowser/></section><LargeCTA/></main></SiteShell>}
