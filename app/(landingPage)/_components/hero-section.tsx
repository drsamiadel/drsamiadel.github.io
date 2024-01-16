import { Button } from "@/components/ui/button";
import { ChevronDown, Code2, CornerLeftDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div
      className="h-min md:h-[50rem] flex flex-col md:flex-row px-4 py-8 justify-around md:justify-between items-start md:items-center space-y-10"
      id="about"
    >
      <div className="hero-text space-y-4 max-w-full md:max-w-[50%] relative">
        <Code2 className="absolute top-0 right-0 text-sky-400/20 m-4 w-20 h-20 md:w-32 md:h-32" />
        <h1 className="text-4xl font-bold text-white">
          <span className="text-red-500">S</span>ami{" "}
          <span className="text-red-500">A</span>del
        </h1>
        <h2 className="text-2xl font-bold text-gray-400">
          Full-Stack Web Developer
        </h2>
        <p className="text-lg text-gray-300 pt-0 md:pt-8 text-justify">
          I&apos;m a self-taught developer with a passion for building modern,
          creative, responsive and seo-compatable websites. I&apos;m currently
          working as a freelance developer and I&apos;m open to new
          opportunities.
        </p>
        <p className="text-lg text-gray-300">
          As a dentist, I&apos;m 4th level dental student at the faculty of
          dentistry, Mansoura University.
        </p>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <span className="text-sm text-gray-300/40">
          to know more about me, you can check my CV or contact me.
        </span>
        <a href="https://drive.google.com/file/d/13DWZwYycFclr_wd954v8KyLclCci0GI_/view?usp=sharing" target="_blank" className="self-end">
          <Button variant="outline" size="sm" className="ml-auto bg-transparent">
            Download CV
          </Button>
        </a>
        </div>
        <div className="flex space-x-4 pt-0 md:pt-8 items-center">
          <div className="w-full h-0.5 bg-sky-400/20" />
          <ChevronDown size={20} className="animate-ping" />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="image-photo xl:max-w-fit max-w-[22rem] md:max-w-[18rem] lg:max-w-[22rem]">
          <Image
            src="/assets/photo_clinic1.jpg"
            width={500}
            height={500}
            alt="sami adel"
          />
        </div>
      </div>
    </div>
  );
}
