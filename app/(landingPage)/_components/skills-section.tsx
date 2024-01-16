import {
  CheckCircle,
  Database,
  ListChecks,
  Wallpaper,
  WavesIcon,
} from "lucide-react";

export default function SkillsSection() {
  return (
    <div className="px-4 relative py-8 md:py-20">
      <WavesIcon strokeWidth={1} className="absolute top-0 right-0 w-20 h-20 text-sky-100/40" />
      <h2 className="text-2xl font-semibold">
        <CheckCircle strokeWidth={1} className="inline-block w-6 h-6 mr-2" />
        Skills
      </h2>
      <div className="grid grid-cols-3 gap-10 mt-10 md:mt-14">
        <div className="col-span-3 md:col-span-2 space-y-12">
          <div className="flex items-start gap-x-2 border-b border-b-rose-500/20">
            <Wallpaper
              className="w-12 h-12 text-primary-foreground/60"
              strokeWidth={1}
            />
            <div className="flex flex-col">
              <h3 className="text-lg">Frontend</h3>
              <p className="text-gray-500 text-sm">
                HTML, CSS, JavaScript, Tailwindcss, Bootstrap, React, NextJs,
                ReduxTK
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-2 border-b border-b-rose-500/20">
            <Database
              className="w-12 h-12 text-primary-foreground/60"
              strokeWidth={1}
            />
            <div className="flex flex-col">
              <h3 className="text-lg">Backend</h3>
              <p className="text-gray-500 text-sm">
                NodeJs, MongoDB, MySQL, GraphQL
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-3 md:col-span-1">
          <h3 className="text-xl">
            <ListChecks className="inline-block w-6 h-6 mr-2" />
            Soft Skills
          </h3>
          <ul className="mt-4 space-y-2 ml-4">
            <li className="flex items-center gap-x-2">
              <span className="w-2 h-2 bg-rose-500 rounded-full" />
              <span>Teamwork</span>
            </li>
            <li className="flex items-center gap-x-2">
              <span className="w-2 h-2 bg-rose-500 rounded-full" />
              <span>Communication</span>
            </li>
            <li className="flex items-center gap-x-2">
              <span className="w-2 h-2 bg-rose-500 rounded-full" />
              <span>Problem Solving</span>
            </li>
            <li className="flex items-center gap-x-2">
              <span className="w-2 h-2 bg-rose-500 rounded-full" />
              <span>Time Management</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
