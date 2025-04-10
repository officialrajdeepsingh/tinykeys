import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { KeyboardShortcuts } from "@/components/KeyboardShortcuts";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "How to Integrate TinyKeys into Your Next.js Project?",
  description: "Learn to Add TinyKeys Functionality to Next.js Projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <script
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
        /> */}
        {/* rest of your scripts go under */}
      </head>
      <body className={inter.className}>
        <KeyboardShortcuts />
        <Header />
        {children}
      </body>
    </html>
  );
}
