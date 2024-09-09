import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.scss";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"


const plusjakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Applied | Master AI and Automation Skills in 6-12 Months | Personalized AI Training",
  description: "Join our expert-led AI and automation training to upskill quickly and unlock opportunities in a rapidly growing field. Learn Generative AI, low-code development, and more with personalized mentorship. Start your journey today—no prior experience needed!",
  openGraph: {
    title: 'AI Applied | Master AI and Automation Skills in 6-12 Months | Personalized AI Training',
    description: "Join our expert-led AI and automation training to upskill quickly and unlock opportunities in a rapidly growing field. Learn Generative AI, low-code development, and more with personalized mentorship. Start your journey today—no prior experience needed!",
    siteName: 'AI Applied | Master AI and Automation Skills in 6-12 Months | Personalized AI Training',
    url: `https://aiapplied.io`,
    locale: 'en_US',
    images: `logo.jpeg`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Applied | Master AI and Automation Skills in 6-12 Months | Personalized AI Training',
    description: "Join our expert-led AI and automation training to upskill quickly and unlock opportunities in a rapidly growing field. Learn Generative AI, low-code development, and more with personalized mentorship. Start your journey today—no prior experience needed!",
    images: `logo.jpeg`,
  },
  alternates: {
    canonical: `https://aiapplied.io`
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <SpeedInsights />
      <body className={plusjakartaSans.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
