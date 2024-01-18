"use client";

import { Layers } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Click Trend",
    url: "https://clicktrend.co",
    image: "/assets/clicktrend.png",
  },
  {
    name: "Sky Miles",
    url: "https://skymiles23.com",
    image: "/assets/skymiles.png",
  },
  {
    name: "Smart Vision",
    url: "https://smartvision-uae.com",
    image: "/assets/smartvision.png",
  },
  {
    name: "eCommerce",
    url: "#",
    image: "/assets/volt.png",
  },
  {
    name: "Store",
    url: "https://drsamiadel.github.io/sol-store",
    image: "/assets/store.png",
  },
  {
    name: "PowerPoint Course",
    url: "https://www.youtube.com/watch?v=rVkqQuhh9GI",
    image: "/assets/powerpoint.jpg",
  },
];

export default function ProjectsSection() {
  return (
    <div className="px-4 py-8 md:py-20" id="projects">
      <h2 className="text-2xl font-semibold pb-8">
        <Layers strokeWidth={1} className="inline-block w-6 h-6 mr-2" />
        Projects
      </h2>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="w-full">
          {projects.map((project) => (
            <CarouselItem
              key={project.name}
              className="slide basis-full md:basis-1/3"
            >
              <div className="m-4 p-4 border shadow-md border-white/20 rounded-lg aspect-video flex flex-col">
                <Image
                  src={project.image}
                  width={720}
                  height={480}
                  alt=""
                  className="aspect-video w-full rounded-md"
                />
                <h3 className="text-lg text-rose-500 mt-4">{project.name}</h3>
                <a
                  href={project.url}
                  className="mt-auto text-sm text-gray-200 hover:text-rose-500"
                >
                  Visit Project
                </a>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="absolute top-1/2 -right-2 transform -translate-y-1/2 bg-transparent opacity-80" />
        <CarouselPrevious className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-transparent opacity-80" />
      </Carousel>
    </div>
  );
}
