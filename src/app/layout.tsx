import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "فلة بيوتي صالون | Fulla Beauty Salon by Hiba - حمص",
  description:
    "صالون فلة بيوتي لإدارة خبيرة التجميل هبة صبّوح. خدمات الميكاب، التسريحات، وعناية البشرة جانب فندق السفير - حمص، سوريا. للحجز: 0938305491",
  icons: {
  icon: "/icon.jpg",
},
    keywords: [
    "صالون تجميل حمص",
    "فلة بيوتي",
    "هبة صبوح",
    "ميكاب عروس",
    "تسريحات شعر",
    "عناية بالبشرة",
    "صالون فندق السفير",
    "Fulla Beauty Salon",
    "Hiba Sabbouh",
    "صالون تجميل سوريا",
  ],
  authors: [{ name: "Fulla Beauty Salon by Hiba" }],
  openGraph: {
    title: "فلة بيوتي صالون | Fulla Beauty Salon by Hiba",
    description:
      "خدمات الميكاب، التسريحات، وعناية البشرة بإدارة خبيرة التجميل هبة صبّوح جانب فندق السفير - حمص",
    type: "website",
    locale: "ar_SY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${cairo.variable} ${tajawal.variable} antialiased bg-[#FFFAFB] text-[#2D1B2E]`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
