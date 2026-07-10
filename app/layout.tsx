import type { Metadata } from "next";
import { Alexandria, IBM_Plex_Sans_Arabic, Geist_Mono } from "next/font/google";
import "./globals.css";

const alexandria = Alexandria({
  variable: "--font-display",
  subsets: ["arabic", "latin"],
  display: "swap",
});
const plex = IBM_Plex_Sans_Arabic({variable:"--font-body",subsets:["arabic","latin"],weight:["300","400","500","600","700"],display:"swap"});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prexel-store.demo"),
  title: {
    default: "PREXEL STORE | استوديو إبداع رقمي",
    template: "%s | PREXEL STORE",
  },
  description: "موقع تجريبي فاخر لاستوديو PREXEL STORE لخدمات الديسكورد، الستريم، الهوية، FiveM والتصميم الرقمي.",
  openGraph: {
    title: "PREXEL STORE",
    description: "نحوّل أفكارك إلى هوية رقمية استثنائية.",
    type: "website",
    locale: "ar_AE",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={`${alexandria.variable} ${plex.variable} ${mono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
