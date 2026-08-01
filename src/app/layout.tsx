import type { Metadata } from "next";
import { Press_Start_2P, VT323, Silkscreen } from "next/font/google";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-terminal",
  display: "swap",
});

const silkscreen = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-system",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saksham Kumar | Retro OS Portfolio (v95.2)",
  description: "Saksham Kumar - Full-Stack MERN Developer & Software Engineering Student Retro 90s Operating System Portfolio.",
  icons: {
    icon: "/window.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pressStart2P.variable} ${vt323.variable} ${silkscreen.variable}`}>
      <body className="bg-win95-desktop select-none overflow-hidden font-system text-win95-text antialiased">
        {children}
      </body>
    </html>
  );
}
