"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MessageCircleHeart } from "lucide-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

const testemonials = [
  {
    name: "Ins Alphabet",
    project: "Click Trend",
    text: `.بشمهندس سامي متقن لعمله وصاحب خبرة ودراية كبيرة في العمل، ممتن جداً لتجربة العمل معه وستكون لي تجارب أخرى قادمة معه بكل تأكيد، أكرر شكري وامتناني لك`,
    text_lang: "ar",
  },
  {
    name: "Hazza Alhaj",
    project: "Sky Miles",
    text: `.مبدع وسريع واسلوبة راقي`,
    text_lang: "ar",
  }
];

export default function TestemonialsSection() {
  return (
    <div className="px-4 py-8 md:py-20 border-t-2 border-dashed border-slate-50/20">
      <h2 className="text-2xl font-semibold">
        <MessageCircleHeart
          strokeWidth={1}
          className="inline-block w-6 h-6 mr-2"
        />
        Testemonials
      </h2>
      <div className="grid grid-cols-3 gap-10 mt-10 md:mt-14">
        <div className="col-span-3 md:col-span-2 space-y-12">
          <Carousel
            orientation="vertical"
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent className="-mt-1 h-[150px]">
              {testemonials.map((testemonial) => (
                <CarouselItem
                  className="pt-1 md:basis-full"
                  key={testemonial.name}
                >
                  <div className="flex items-start gap-x-2">
                    <h3 className="text-lg text-rose-500">
                      {testemonial.name + " "}
                      <span className="text-gray-500 text-sm">
                        ~ {testemonial.project}
                      </span>
                    </h3>
                  </div>
                  <p className={`relative overflow-hidden mt-4 text-gray-200 text-sm text-center bg-white/10 rounded-lg px-2 py-4
                  ${testemonial.text_lang === "ar" ? "rtl " + rubik.className : ""}
                  `}>
                    {testemonial.text}
                    <MessageCircleHeart
                      strokeWidth={1}
                      className="absolute -bottom-6 -right-6 w-20 h-20 text-sky-200/10"
                    />
                  </p>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="hidden md:block col-span-3 md:col-span-1 space-y-12">
          <Image
            src="/assets/rating.svg"
            width={500}
            height={500}
            alt="rating"
          />
        </div>
      </div>
    </div>
  );
}
