import { Button } from "@/components/ui/button";
import {
  FacebookIcon,
  Github,
  Instagram,
  Linkedin,
  Mail,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

export default function CallToActionSection() {
  return (
    <div className="mx-4 mt-10 md:mt-20 px-4 py-8 md:py-24 bg-violet-400/20 flex items-center flex-col rounded-xl" id="contact">
      <h2 className="text-2xl font-semibold pb-8">
        If you have any questions, feel free to contact me
      </h2>
      <div className="flex items-center gap-4 flex-wrap justify-center">
        <a
          href="https://www.facebook.com/samiadelgalal/"
          target="_blank"
          className="bg-none border border-rose-500 p-4 rounded-full text-white/80 text-2xl font-bold inline-block button hover:bg-rose-500 hover:text-white transition-all shadow-sm"
        >
          <FacebookIcon size={28} />
        </a>
        <a
          href="https://www.youtube.com/SamiAdelDentist"
          target="_blank"
          className="bg-none border border-rose-500 p-4 rounded-full text-white/80 text-2xl font-bold inline-block button hover:bg-rose-500 hover:text-white transition-all shadow-sm"
        >
          <YoutubeIcon size={28} />
        </a>
        <a
          href="https://twitter.com/drsamiadel"
          target="_blank"
          className="bg-none border border-rose-500 p-4 rounded-full text-white/80 text-2xl font-bold inline-block button hover:bg-rose-500 hover:text-white transition-all shadow-sm"
        >
          <TwitterIcon size={28} />
        </a>
        <a
          href="https://github.com/drsamiadel"
          target="_blank"
          className="bg-none border border-rose-500 p-4 rounded-full text-white/80 text-2xl font-bold inline-block button hover:bg-rose-500 hover:text-white transition-all shadow-sm"
        >
          <Github size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/drsamiadel"
          target="_blank"
          className="bg-none border border-rose-500 p-4 rounded-full text-white/80 text-2xl font-bold inline-block button hover:bg-rose-500 hover:text-white transition-all shadow-sm"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="https://www.instagram.com/drsamiadel"
          target="_blank"
          className="bg-none border border-rose-500 p-4 rounded-full text-white/80 text-2xl font-bold inline-block button hover:bg-rose-500 hover:text-white transition-all shadow-sm"
        >
          <Instagram size={28} />
        </a>
      </div>
      <div className="w-1/2 border-t border-dashed border-violet-400/20 my-12"></div>
      <div className="flex items-center gap-4 md:gap-12 mt-4 flex-wrap justify-center">
        <Button variant={"default"} size="lg" className="min-h-16">
          <a
            href="mailto:sami.adel.galal02@gmail.com"
            target="_blank"
            className="flex items-center gap-2"
          >
            <Mail size={24} />
            <span>Send me an email</span>
          </a>
        </Button>
        <Button variant={"outline"} size="lg" className="min-h-16 bg-transparent">
          <a
            href="https://wa.me/21099723426"
            target="_blank"
            className="flex items-center gap-2"
          >
            <span>Send me a message</span>
          </a>
        </Button>
      </div>
    </div>
  );
}
