import { notFound } from "next/navigation";
import LessonPlayer from "@/components/dashboard/LessonPlayer";
import { LANGUAGES, getLesson } from "@/lib/content";

export const dynamicParams = false;

export const generateStaticParams = () =>
  LANGUAGES.flatMap((l) => l.lessons.map((lesson) => ({ lang: l.id, lessonId: lesson.id })));

export default function LessonPage({ params }) {
  if (!getLesson(params.lang, params.lessonId)) notFound();
  return <LessonPlayer langId={params.lang} lessonId={params.lessonId} />;
}
