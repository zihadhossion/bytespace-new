import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/satoshi-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bytespace-new-peach.vercel.app"),
  title: {
    default: "ByteSpace — Hundreds of Courses Available",
    template: "%s | ByteSpace",
  },
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with ByteSpace's wide range of courses.",
  openGraph: {
    type: "website",
    siteName: "ByteSpace",
    title: "ByteSpace — Hundreds of Courses Available",
    description:
      "Unlock your creativity, gain valuable knowledge, and grow your business with ByteSpace's wide range of courses.",
    url: "/",
    images: [
      {
        url: "/images/og.webp",
        width: 1800,
        height: 1360,
        alt: "ByteSpace online course platform preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ByteSpace — Hundreds of Courses Available",
    description:
      "Unlock your creativity, gain valuable knowledge, and grow your business with ByteSpace's wide range of courses.",
    images: ["/images/og.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${satoshi.variable}`}>
      <body>
        {children}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
