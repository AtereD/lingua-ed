"use client";
import Image from "next/image";
import Link from "next/link";
import { FiAward, FiZap, FiCheckCircle } from "react-icons/fi";
import { LANGUAGES, getLanguage, totalLessons } from "@/lib/content";
import { currentStreak, languageProgress, level, nextLesson } from "@/lib/progress";
import { useLearner } from "./ProgressContext";
import ProgressBar from "./ProgressBar";

const Stat = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-4 p-5 rounded-3xl bg-[#fff5f1]">
    <span className="flex items-center justify-center w-11 h-11 rounded-full bg-white text-[#524fd5]">
      <Icon aria-hidden />
    </span>
    <div>
      <p className="text-2xl font-semibold text-[#222]">{value}</p>
      <p className="text-sm">{label}</p>
    </div>
  </div>
);

const Overview = () => {
  const { user, progress, ready } = useLearner();
  const preferred = getLanguage(progress.preferredLanguage);
  const completed = Object.values(progress.lessons).filter((l) => l.completed).length;
  const target = preferred ?? LANGUAGES[1];
  const upNext = nextLesson(progress, target);

  const ordered = [...LANGUAGES].sort((a, b) => (a.id === preferred?.id ? -1 : b.id === preferred?.id ? 1 : 0));

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-[#222] text-3xl md:text-4xl font-medium">
        Welcome, {user.displayName.split(" ")[0]}! 👋
      </h1>
      <p className="mt-2">
        {completed === 0 ? "Pick a lesson and earn your first XP today." : "Keep the momentum going — a few minutes a day adds up."}
      </p>

      <div className="grid gap-4 mt-8 sm:grid-cols-3" aria-busy={!ready}>
        <Stat icon={FiZap} label="Day streak" value={currentStreak(progress)} />
        <Stat icon={FiAward} label={`XP · Level ${level(progress.xp)}`} value={progress.xp} />
        <Stat icon={FiCheckCircle} label={`of ${totalLessons()} lessons done`} value={completed} />
      </div>

      <section aria-labelledby="up-next" className="p-6 mt-8 text-white rounded-3xl bg-[#524fd5]">
        <h2 id="up-next" className="text-sm font-medium tracking-wide uppercase text-white/80">Up next</h2>
        {upNext ? (
          <div className="flex flex-col gap-4 mt-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-2xl font-semibold">{target.name}: {upNext.title}</p>
              <p className="text-white/80">{upNext.blurb} · {upNext.words.length} words</p>
            </div>
            <Link
              href={`/dashboard/learn/${target.id}/${upNext.id}`}
              className="px-6 py-3 font-medium text-center text-[#524fd5] bg-white rounded-full hover:scale-95 duration-200"
            >
              {progress.lessons[`${target.id}/${upNext.id}`] ? "Retry lesson" : "Start lesson"}
            </Link>
          </div>
        ) : (
          <p className="mt-2 text-xl font-semibold">You&apos;ve finished every {target.name} lesson 🎉 Try another language below.</p>
        )}
      </section>

      <h2 className="mt-10 text-2xl font-medium text-[#222]">Your courses</h2>
      <ul className="grid gap-4 mt-4 sm:grid-cols-2">
        {ordered.map((lang) => {
          const p = languageProgress(progress, lang);
          return (
            <li key={lang.id}>
              <Link
                href={`/dashboard/learn/${lang.id}`}
                className="flex flex-col gap-3 p-5 border rounded-3xl hover:shadow-md hover:border-[#524fd5] duration-200"
              >
                <div className="flex items-center gap-3">
                  <Image src={lang.flag} width={32} height={32} alt="" className="rounded-full" />
                  <h3 className="text-xl font-medium text-[#222]">{lang.name}</h3>
                  {lang.id === preferred?.id && (
                    <span className="px-2 py-0.5 ml-auto text-xs font-medium rounded-full bg-[#f2edff] text-[#524fd5]">Your focus</span>
                  )}
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

export default Overview;
