"use client";
import Image from "next/image";
import Link from "next/link";
import { LANGUAGES } from "@/lib/content";
import { languageProgress } from "@/lib/progress";
import { useLearner } from "./ProgressContext";
import ProgressBar from "./ProgressBar";

const CourseList = () => {
  const { progress } = useLearner();
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-[#222] text-3xl md:text-4xl font-medium">Courses</h1>
      <p className="mt-2">Choose a language to see its lessons.</p>
      <ul className="grid gap-4 mt-8 sm:grid-cols-2">
        {LANGUAGES.map((lang) => {
          const p = languageProgress(progress, lang);
          return (
            <li key={lang.id}>
              <Link href={`/dashboard/learn/${lang.id}`} className="flex flex-col gap-3 p-5 border rounded-3xl hover:shadow-md hover:border-[#524fd5] duration-200">
                <div className="flex items-center gap-3">
                  <Image src={lang.flag} width={32} height={32} alt="" className="rounded-full" />
                  <h2 className="text-xl font-medium text-[#222]">{lang.name}</h2>
                </div>
                <ProgressBar percent={p.percent} label={`${lang.name} progress`} color={lang.color} />
                <p className="text-sm">{p.done} of {p.total} lessons complete</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CourseList;
