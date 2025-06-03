import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { TempoInit } from "./tempo-init";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Advertsine | We Build, You Grow",
  description:
    "Grow your business with Advertsine, a design & development studio.",
  openGraph: {
    images: [
      {
        url: "https://www.advertsine.com/images/banner.png",
        width: 1200,
        height: 630,
        alt: "advertsine logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src="https://api.tempo.new/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
      <body className={font.className}>
        <TempoInit />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
