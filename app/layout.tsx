import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Advertsine | We Build, You Grow",
  description: "Grow your business with Advertsine, a design & development studio.",
  openGraph: {
    images: [
      {
        url: 'https://www.advertsine.com/images/banner.png',
        width: 1200,
        height: 630,
        alt: 'advertsine logo',
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
      <body className={font.className}>

        {children}
        <Analytics />

      </body>
    </html>
  );
}
