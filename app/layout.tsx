import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Oxanium } from "next/font/google";

const font = Oxanium({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pulse - The Most Minimal and Fastest Conversion App",
  description: `Pulse is the most minimal and fastest file conversion app, allowing you to effortlessly convert images, videos, and audio files with high-quality output.`,
  keywords:
    "file conversion, minimal app, fast conversion, media converter, image converter, video converter, audio converter, FFmpeg, WebAssembly, Pulse app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${font.className} antialiased`}>

        <div className="flex items-center justify-center pt-32 px-8 md:px-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}