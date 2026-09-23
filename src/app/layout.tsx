import type { Metadata } from "next";
import localFont from "next/font/local";
import { PageTransition } from "@/components/layout/page-transition";
import "./globals.css";

const merriweather = localFont({
  src: "../fonts/Merriweather-VariableFont_opsz,wdth,wght.ttf",
  variable: "--font-merriweather",
  display: "swap",
});

const gambarino = localFont({
  src: "../fonts/Gambarino-Regular.otf",
  variable: "--font-gambarino",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SIMH",
  description: "Suryani Institute for Mental Health",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${merriweather.variable} ${gambarino.variable}`}>
      <body><PageTransition />{children}</body>
    </html>
  );
}
