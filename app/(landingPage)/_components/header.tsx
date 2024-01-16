"use client";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { FilePenLine, PenLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileNav from "./mobile-nav";
import { usePathname } from "next/navigation";

const routes = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const header = document.querySelector("header") as HTMLElement;
    const main = document.querySelector("main") as HTMLElement;
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        header.classList.add("scrolled");
      } else {
        setIsScrolled(false);
        header.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="w-full h-20 top-0 left-0 right-0 fixed px-4 2xl:px-0 z-50">
      <div className="max-w-screen-2xl mx-auto flex items-center h-full">
        <Link className="font-[500] text-3xl text-rose-500 mr-auto" href="/">
          {isScrolled ? (
            <Image
              className="fadding rounded-full grayscale"
              src="/assets/personal1.png"
              width={36}
              height={36}
              alt="sami adel"
            />
          ) : isHome ? (
            ""
          ) : (
            <span className="fadding">Sami Adel</span>
          )}
        </Link>
        <nav className="md:flex flex-col md:flex-row items-center space-x-4 hidden">
          {routes.map((route) => (
            <Link key={route.name} href={route.href}>
              {route.name}
            </Link>
          ))}
        </nav>
        <MobileNav />
        <a
          href="#contact"
          className="hidden md:flex ml-4 hover:bg-rose-600 hover:shadow-md items-center px-3 py-1 rounded-md border border-rose-500/20 transition-all"
        >
          <PenLine className="w-5 mr-2" />
          Hire Me
        </a>
      </div>
    </header>
  );
}
