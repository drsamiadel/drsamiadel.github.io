import { Button } from "@/components/ui/button";
import { AlignRight, X } from "lucide-react";
import { useRef } from "react";

export default function MobileNav() {
  const openBTNref = useRef(null);
  const closeBTNref = useRef(null);
  const mobileNavref = useRef(null);

  const handleOpen = () => {
    if (mobileNavref.current) {
      (mobileNavref.current as HTMLElement)?.classList.add("open");
    }
  };

  const handleClose = () => {
    if (mobileNavref.current) {
      (mobileNavref.current as HTMLElement)?.classList.remove("open");
    }
  };

  return (
    <div className="relative block md:hidden">
      <Button
        variant={"ghost"}
        className="flex items-center hover:bg-rose-600 text-white hover:text-white px-2"
        ref={openBTNref}
        onClick={handleOpen}
      >
        <AlignRight size={24} />
      </Button>
      <div
        ref={mobileNavref}
        className="fixed top-full z-50 right-0 w-full h-full bg-[#101146] flex flex-col items-center justify-center space-y-4 mobile-nav"
      >
        <Button
          variant={"ghost"}
          className="flex items-center hover:bg-rose-600 text-white hover:text-white px-2 absolute top-0 right-0 m-4"
          ref={closeBTNref}
          onClick={handleClose}
        >
          <X size={24} />
        </Button>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
}
