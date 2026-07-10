import type { Metadata } from "next";
import { Cairo, Geist_Mono } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-geist-sans",
  subsets: ["arabic", "latin"],
  display: "swap",
});

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
    <html lang="ar" className={`${cairo.variable} ${mono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
