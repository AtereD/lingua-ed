"use client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import { getLanguage } from "@/lib/content";
import { languageProgress, lessonKey } from "@/lib/progress";
import { useLearner } from "./ProgressContext";
import ProgressBar from "./ProgressBar";

const LessonList = ({ langId }) => {
  const { progress } = useLearner();
  const lang = getLanguage(langId);
  if (!lang) notFound();
  const p = languageProgress(progress, lang);

  return (
    <div className="max-w-3xl mx-auto">
      <Link href="/dashboard/learn" className="inline-flex items-center gap-2 text-sm font-medium text-[#524fd5] hover:underline">
        <FiArrowLeft aria-hidden /> All courses
      </Link>
      <div className="flex items-center gap-4 mt-4">
        <Image src={lang.flag} width={48} height={48} alt="" className="rounded-full" />
        <h1 className="text-[#222] text-3xl md:text-4xl font-medium">{lang.name}</h1>
      </div>
      <div className="mt-6">
        <ProgressBar percent={p.percent} label={`${lang.name} progress`} color={lang.color} />
        <p className="mt-2 text-sm">{p.done} of {p.total} lessons complete</p>
      </div>
      <ol className="flex flex-col gap-4 mt-8">
        {lang.lessons.map((lesson, i) => {
          const rec = progress.lessons[lessonKey(lang.id, lesson.id)];
          return (
            <li key={lesson.id}>
              <Link href={`/dashboard/learn/${lang.id}/${lesson.id}`} className="flex items-center gap-4 p-5 border rounded-3xl hover:shadow-md hover:border-[#524fd5] duration-200">
                <span className={`flex items-center justify-center w-10 h-10 font-semibold rounded-full shrink-0 ${rec?.completed ? "bg-[#18a058] text-white" : "bg-[#f2edff] text-[#524fd5]"}`}>
                  {rec?.completed ? <FiCheck aria-label="Completed" /> : i + 1}
                </span>
                <div className="flex-1">
                  <h2 className="text-lg font-medium text-[#222]">{lesson.title}</h2>
                  <p className="text-sm">{lesson.blurb} · {lesson.words.length} words</p>
                </div>
                {rec && <span className="text-sm font-medium text-[#524fd5]">Best {rec.bestScore}%</span>}
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default LessonList;
