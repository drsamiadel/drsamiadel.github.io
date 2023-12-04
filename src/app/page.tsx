import CustomCursor from "@/components/Cursor";
import {
  CSSIcon,
  HTMLIcon,
  JavaScriptIcon,
  PowerPointIcon,
  WordPressIcon,
  YouTubeIcon,
} from "@/components/Icons";
import {
  Calendar,
  Camera,
  ExternalLink,
  EyeIcon,
  FacebookIcon,
  Github,
  Instagram,
  Linkedin,
  Sparkle,
  Sparkles,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

export default function Home() {
  return (
    <main className="container mx-auto">
      <section
        className="hero flex flex-col md:flex-row my-14 md:my-28"
        id="about"
      >
        <div className="hero__text w-full md:w-[45%] static">
          <div className="hero__text__content sticky top-10 mt-10 md:mb-60 md:mx-0 mx-4">
            <span className={`text-3xl font-vT323`}>
              Dentist - JS Developer
            </span>
            <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-700">
              Sami Adel
            </h1>
            <p className="text-2xl mt-10 font-coming_Soon text-justify leading-10">
              a dental student at Faculty of Dentistry, Mansoura University. I
              am a self-taught web developer, I started learning web development
              in 2015. I am passionate about learning new technologies and
              building new things. I am currently working as a freelancer and
              looking for new opportunities 👀
            </p>
          </div>
        </div>
        <div className="hero__image w-full md:w-[55%] p-6 md:p-14 static space-y-10">
          <div className="img-card relative shadow-md rounded-3xl overflow-hidden cursor-pointer">
            <img src="/images/photo_clinic1.jpg" alt="Sami Adel" />
          </div>
          <div className="img-card relative shadow-md rounded-3xl overflow-hidden cursor-pointer">
            <img src="/images/photo_clinic.jpg" alt="Sami Adel" />
            <div className="img-card__overlay absolute bottom-0 left-0 w-full h-20 bg-zinc-900 opacity-80 hover:opacity-90 transition-all duration-500 ease-in-out">
              <div className="img-card__overlay__content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex items-center gap-2 min-w-max">
                <Sparkles size={20} />
                <p className="text-white md:text-xl text-base mr-4 font-sans">
                  Class I Amalgam Restoration
                </p>
                <Calendar size={20} />
                <p className="text-white md:text-xl text-base mr-4 font-sans">
                  11 Nov. 2023
                </p>
                <Camera size={20} />
                <p className="text-white md:text-xl text-base font-sans">
                  <a
                    href="https://www.facebook.com/salmaehab3oda"
                    target="_blank"
                  >
                    Salma Ehab
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="hero flex flex-col md:flex-row my-14 md:my-28"
        id="skills"
      >
        <div className="cv md:w-[45%] w-full md:mx-0 mx-4 md:mb-0 mb-4">
          <div className="cv__text top-10 mt-10">
            <h1 className="text-7xl font-bold">My CV</h1>
            <p className="text-2xl mt-10 font-coming_Soon text-justify leading-10">
              ooh 🥹, you want to know more about me, that's great. I have a CV
              that you can read it online. I hope you enjoy reading it.
            </p>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/13DWZwYycFclr_wd954v8KyLclCci0GI_/view?usp=sharing"
              className="bg-sky-400 px-8 py-4 rounded-full text-white text-2xl font-bold mt-10 inline-block button font-sans"
            >
              <EyeIcon className="inline-block" /> View CV
            </a>
          </div>
        </div>
        <div className="skills md:w-[55%] w-full md:pl-8 md:mx-0 mx-4">
          <div className="skills__text sticky top-10 mt-10">
            <h1 className="text-7xl font-bold">My Skills</h1>
            <p className="text-2xl mt-10 font-coming_Soon text-justify leading-10">
              I have many skills, some of them are related to dentistry, and
              some of them are related to web development. I'm showing you my
              web development skills here.
            </p>
            <div className="skills__text__content mt-10 grid grid-cols-2">
              <div className="skills__text__content__item flex items-center gap-4 hover:scale-105 transition-all">
                <Sparkle size={30} />
                <p className="text-3xl">HTML</p>
              </div>
              <div className="skills__text__content__item flex items-center gap-4 hover:scale-105 transition-all">
                <Sparkle size={30} />
                <p className="text-3xl">CSS</p>
              </div>
              <div className="skills__text__content__item flex items-center gap-4 hover:scale-105 transition-all">
                <Sparkle size={30} />
                <p className="text-3xl">JavaScript</p>
              </div>
              <div className="skills__text__content__item flex items-center gap-4 hover:scale-105 transition-all">
                <Sparkle size={30} />
                <p className="text-3xl">React</p>
              </div>
              <div className="skills__text__content__item flex items-center gap-4 hover:scale-105 transition-all">
                <Sparkle size={30} />
                <p className="text-3xl">Next.js</p>
              </div>
              <div className="skills__text__content__item flex items-center gap-4 hover:scale-105 transition-all">
                <Sparkle size={30} />
                <p className="text-3xl">Tailwind CSS</p>
              </div>
              <div className="skills__text__content__item flex items-center gap-4 hover:scale-105 transition-all">
                <Sparkle size={30} />
                <p className="text-3xl">WordPress</p>
              </div>
              <div className="skills__text__content__item flex items-center gap-4 hover:scale-105 transition-all">
                <Sparkle size={30} />
                <p className="text-3xl">Node Js</p>
              </div>
              <div className="skills__text__content__item flex items-center gap-4 hover:scale-105 transition-all">
                <Sparkle size={30} />
                <p className="text-3xl">Mongo DB</p>
              </div>
              <div className="skills__text__content__item flex items-center gap-4 hover:scale-105 transition-all">
                <Sparkle size={30} />
                <p className="text-3xl">GraphQL</p>
              </div>
              <div className="skills__text__content__item flex items-center gap-4 hover:scale-105 transition-all">
                <Sparkle size={30} />
                <p className="text-3xl">MySQL</p>
              </div>
              <div className="skills__text__content__item flex items-center gap-4 hover:scale-105 transition-all">
                <Sparkle size={30} />
                <p className="text-3xl">Redux ToolKit</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="projects my-14 md:my-28 static" id="projects">
        <div className="projects__text sticky top-0 py-10 bg-zinc-900 z-50">
          <div className="projects__text__content">
            <h1 className="text-7xl font-bold">My Projects</h1>
            <p className="text-2xl mt-10 font-coming_Soon text-justify leading-10">
              I have worked on many projects, some of them are personal
              projects, and some of them are freelance projects. I have worked
              with many technologies such as HTML, CSS, JavaScript, React,
              Next.js, Tailwind CSS, and many more 🪄
            </p>
          </div>
        </div>
        <div className="projects__image p-14 static grid grid-cols-3 gap-4">
          <div className="img-card relative shadow-md rounded-3xl hover:rounded-xl overflow-hidden cursor-pointer aspect-video">
            <img src="/images/skymiles.png" alt="Sami Adel" />
            <div className="img-card__overlay absolute bottom-0 left-0 w-full h-14 bg-zinc-900 opacity-80 hover:opacity-90 transition-all duration-500 ease-in-out">
              <div className="img-card__overlay__content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex items-center gap-2 min-w-max">
                <HTMLIcon />
                <CSSIcon />
                <JavaScriptIcon />
                <WordPressIcon />
                <a
                  href="https://skymiles23.com/"
                  target="_blank"
                  className="bg-slate-500 p-1 rounded-full"
                >
                  <ExternalLink />
                </a>
              </div>
            </div>
          </div>
          <div className="img-card relative shadow-md rounded-3xl hover:rounded-xl overflow-hidden cursor-pointer aspect-video">
            <img src="/images/smartvision.png" alt="Sami Adel" />
            <div className="img-card__overlay absolute bottom-0 left-0 w-full h-14 bg-zinc-900 opacity-80 hover:opacity-90 transition-all duration-500 ease-in-out">
              <div className="img-card__overlay__content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex items-center gap-2 min-w-max">
                <HTMLIcon />
                <CSSIcon />
                <JavaScriptIcon />
                <WordPressIcon />
                <a
                  href="https://smartvision-uae.com/"
                  target="_blank"
                  className="bg-slate-400 p-1 rounded-full"
                >
                  <ExternalLink />
                </a>
              </div>
            </div>
          </div>
          <div className="img-card relative shadow-md rounded-3xl hover:rounded-xl overflow-hidden cursor-pointer aspect-video">
            <img src="/images/clicktrend.png" alt="Sami Adel" />
            <div className="img-card__overlay absolute bottom-0 left-0 w-full h-14 bg-zinc-900 opacity-80 hover:opacity-90 transition-all duration-500 ease-in-out">
              <div className="img-card__overlay__content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex items-center gap-2 min-w-max">
                <HTMLIcon />
                <CSSIcon />
                <JavaScriptIcon />
                <WordPressIcon />
                <a
                  href="https://clicktrend.co/"
                  target="_blank"
                  className="bg-slate-400 p-1 rounded-full"
                >
                  <ExternalLink />
                </a>
              </div>
            </div>
          </div>
          <div className="img-card relative shadow-md rounded-3xl hover:rounded-xl overflow-hidden cursor-pointer aspect-video">
            <img src="/images/volt.png" alt="Sami Adel" />
            <div className="img-card__overlay absolute bottom-0 left-0 w-full h-14 bg-zinc-900 opacity-80 hover:opacity-90 transition-all duration-500 ease-in-out">
              <div className="img-card__overlay__content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex items-center gap-2 min-w-max">
                <HTMLIcon />
                <CSSIcon />
                <JavaScriptIcon />
                <WordPressIcon />
              </div>
            </div>
          </div>
          <div className="img-card relative shadow-md rounded-3xl hover:rounded-xl overflow-hidden cursor-pointer aspect-video">
            <img src="/images/store.png" alt="Sami Adel" />
            <div className="img-card__overlay absolute bottom-0 left-0 w-full h-14 bg-zinc-900 opacity-80 hover:opacity-90 transition-all duration-500 ease-in-out">
              <div className="img-card__overlay__content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex items-center gap-2 min-w-max">
                <HTMLIcon />
                <CSSIcon />
                <JavaScriptIcon />
                <WordPressIcon />
                <a
                  href="https://drsamiadel.github.io/sol-store/"
                  target="_blank"
                  className="bg-slate-400 p-1 rounded-full"
                >
                  <ExternalLink />
                </a>
              </div>
            </div>
          </div>
          <div className="img-card relative shadow-md rounded-3xl hover:rounded-xl overflow-hidden cursor-pointer aspect-video">
            <img src="/images/powerpoint.jpg" alt="Sami Adel" />
            <div className="img-card__overlay absolute bottom-0 left-0 w-full h-14 bg-zinc-900 opacity-80 hover:opacity-90 transition-all duration-500 ease-in-out">
              <div className="img-card__overlay__content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex items-center gap-2 min-w-max">
                <YouTubeIcon />
                <PowerPointIcon />
                <a
                  href="https://www.youtube.com/watch?v=rVkqQuhh9GI"
                  target="_blank"
                  className="bg-slate-400 p-1 rounded-full"
                >
                  <ExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact my-14 md:my-28 static" id="contact">
        <div className="contact__text sticky top-0 py-10 bg-zinc-900 z-50">
          <div className="contact__text__content">
            <h1 className="text-7xl font-bold">Contact Me</h1>
            <p className="text-2xl mt-10 font-coming_Soon text-justify leading-10">
              I am available for freelance work. Connect with me via email:
              <a
                href="mailto:sami.adel.galal02@gmail.com"
                className="text-sky-400 font-bold ml-2"
                target="_blank"
              >
                sami.adel.galal02@gmail.com
              </a>
            </p>
            <div className="contact__text__content__social mt-10 flex items-center gap-4">
              <a
                href="https://www.facebook.com/samiadelgalal/"
                className="bg-sky-400 p-4 rounded-full text-white text-2xl font-bold mt-10 inline-block button font-sans"
              >
                <FacebookIcon size={28} />
              </a>
              <a
                href="https://www.youtube.com/SamiAdelDentist"
                className="bg-sky-400 p-4 rounded-full text-white text-2xl font-bold mt-10 inline-block button font-sans"
              >
                <YoutubeIcon size={28} />
              </a>
              <a
                href="https://twitter.com/drsamiadel"
                className="bg-sky-400 p-4 rounded-full text-white text-2xl font-bold mt-10 inline-block button font-sans"
              >
                <TwitterIcon size={28} />
              </a>
              <a
                href="https://github.com/drsamiadel"
                className="bg-sky-400 p-4 rounded-full text-white text-2xl font-bold mt-10 inline-block button font-sans"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/drsamiadel"
                className="bg-sky-400 p-4 rounded-full text-white text-2xl font-bold mt-10 inline-block button font-sans"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://www.instagram.com/drsamiadel"
                className="bg-sky-400 p-4 rounded-full text-white text-2xl font-bold mt-10 inline-block button font-sans"
              >
                <Instagram size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <CustomCursor />
    </main>
  );
}
