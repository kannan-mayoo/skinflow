import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
// import BannerSlider from "@/components/BannerSlider";
import Hero from "@/components/Hero";
import Products from '@/components/Products';
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Welcome from "@/components/Welcome";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkinFlow Care",
  description: "SkinFlow Care - Minimal Skincare, Maximum Glow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="min-h-screen flex flex-col items-center bg-white 9 justify-start px-4 md:px-8 lg:px-16">
          <Header />
          <Hero />
          {/* <BannerSlider /> */}
          <Products />
          <Welcome />
          <Testimonials />
          <About />

          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
