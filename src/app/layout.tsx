import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TailwindCSS Showcase",
  description: "Tailwind Showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    {
      href: "/comparison",
      label: "Comparison",
    },
    {
      href: "/utility-first",
      label: "Utility First",
    },
    {
      href: "/responsive",
      label: "Responsive",
    },
    {
      href: "/overriding-components",
      label: "Overriding Components",
    },
  ];

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <div className={"w-full bg-viki-blue-950 h-screen"}>
          <div className="min-h-screen bg-gray-100 p-10">
            <div className="max-w-6xl mx-auto bg-white text-black rounded-lg shadow-lg p-6">
              <div className="text-4xl font-bold text-center text-blue-500 mb-4">
                <Link href="/">Tailwind CSS Showcase</Link>
              </div>
              <div className="text-black flex flex-row flex-wrap justify-center mb-10">
                {links.map(({ href, label }) => (
                  <div className="max-w-[12rem] m-1 p-2 bg-blue-500 text-white rounded-md text-center">
                    <Link href={href}>{label}</Link>
                  </div>
                ))}
              </div>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
