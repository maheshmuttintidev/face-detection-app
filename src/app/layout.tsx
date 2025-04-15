/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Face Detection",
  description: "Developed by Mahesh Muttinti",
  metadataBase: new URL("https://face-detection-pro.vercel.app"),
  openGraph: {
    title: "Face Detection",
    description: "Developed by Mahesh Muttinti",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Face Detection",
    description: "Developed by Mahesh Muttinti",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Face Detection" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased items-center container mx-auto pb-6`}
      >
        <h1 className="text-5xl md:text-6xl text-center mt-4">
          Face Detection
        </h1>
        <div className="mt-4">
          <img
            src="/web-app-manifest-512x512.png"
            alt="placeholder"
            className="mx-auto w-full h-[512px] object-contain opacity-40 rounded-md brightness-105"
          />
        </div>
        {children}
      </body>
    </html>
  );
}
