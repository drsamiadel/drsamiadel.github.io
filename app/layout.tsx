import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/toaster";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sami Adel",
  description: `A Full-Stack Web Developer, I'm a self-taught developer with a passion for building modern, creative, responsive and seo-compatable websites. I'm currently working as a freelance developer and I'm open to new opportunities. As a dentist, I'm 4th level dental student at the faculty of dentistry, Mansoura University.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={comfortaa.className}>
        <NextTopLoader />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
