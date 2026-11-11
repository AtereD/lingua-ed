import { notFound } from "next/navigation";
import LessonList from "@/components/dashboard/LessonList";
import { LANGUAGES, getLanguage } from "@/lib/content";

export const dynamicParams = false;

export const generateStaticParams = () => LANGUAGES.map((l) => ({ lang: l.id }));

export const generateMetadata = ({ params }) => ({ title: getLanguage(params.lang)?.name ?? "Course" });

export default function LanguagePage({ params }) {
  if (!getLanguage(params.lang)) notFound();
  return <LessonList langId={params.lang} />;
}
