"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight, FiCheck, FiVolume2, FiX } from "react-icons/fi";
import { getLanguage, getLesson } from "@/lib/content";
import { PASS_MARK, buildQuiz, scoreToPercent } from "@/lib/progress";
import { useLearner } from "./ProgressContext";
import ProgressBar from "./ProgressBar";

const speak = (text, lang) => {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.85;
  window.speechSynthesis.speak(utterance);
};

const primaryBtn =
  "inline-flex items-center justify-center gap-2 px-6 py-3 font-medium text-white bg-[#524fd5] rounded-full hover:scale-95 duration-200 disabled:opacity-50 disabled:hover:scale-100";

// ---- Step 1: flashcards -----------------------------------------------------
const Flashcards = ({ lang, words, onDone }) => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const word = words[index];
  const last = index === words.length - 1;

  const go = (next) => {
    setIndex(next);
    setFlipped(false);
  };

  return (
    <div>
      <p className="text-sm font-medium" aria-live="polite">Card {index + 1} of {words.length}</p>
      <div className="mt-2"><ProgressBar percent={((index + 1) / words.length) * 100} label="Flashcard progress" color={lang.color} /></div>

      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        aria-label={flipped ? "Show the phrase" : "Reveal the meaning"}
        className="w-full mt-6 min-h-[240px] p-8 rounded-3xl bg-[#fff5f1] flex flex-col items-center justify-center text-center gap-3 hover:shadow-md duration-200"
      >
        {flipped ? (
          <>
            <span className="text-xs font-medium tracking-wide uppercase">Meaning</span>
            <span className="text-3xl font-semibold text-[#222]">{word.meaning}</span>
          </>
        ) : (
          <>
            <span className="text-xs font-medium tracking-wide uppercase">{lang.name}</span>
            <span className="text-4xl font-semibold text-[#222]">{word.term}</span>
            {word.pron && <span className="text-lg italic">{word.pron}</span>}
            <span className="mt-2 text-sm text-[#524fd5]">Tap to reveal the meaning</span>
          </>
        )}
      </button>

      <div className="flex items-center justify-between gap-3 mt-6">
        <button type="button" onClick={() => speak(word.term, lang.speech)} className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-full hover:border-[#524fd5]">
          <FiVolume2 aria-hidden /> Listen
        </button>
        <div className="flex gap-2">
          <button type="button" onClick={() => go(index - 1)} disabled={index === 0} className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-full hover:border-[#524fd5] disabled:opacity-40">
            <FiArrowLeft aria-hidden /> Back
          </button>
          {last ? (
            <button type="button" onClick={onDone} className={primaryBtn}>Start quiz <FiArrowRight aria-hidden /></button>
          ) : (
            <button type="button" onClick={() => go(index + 1)} className={primaryBtn}>Next <FiArrowRight aria-hidden /></button>
          )}
        </div>
      </div>
    </div>
  );
};

// ---- Step 2: quiz -----------------------------------------------------------
const Quiz = ({ lang, questions, onFinish }) => {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState(null);
  const [correct, setCorrect] = useState(0);
  const q = questions[index];
  const answered = picked !== null;

  const choose = (option) => {
    if (answered) return;
    setPicked(option);
    if (option === q.answer) setCorrect((c) => c + 1);
  };

  const next = () => {
    if (index === questions.length - 1) return onFinish(correct);
    setIndex(index + 1);
    setPicked(null);
  };

  return (
    <div>
      <p className="text-sm font-medium" aria-live="polite">Question {index + 1} of {questions.length}</p>
      <div className="mt-2"><ProgressBar percent={(index / questions.length) * 100} label="Quiz progress" color={lang.color} /></div>

      <h2 className="mt-8 text-sm font-medium tracking-wide uppercase">
        {q.promptKind === "term" ? "What does this mean?" : "Which phrase matches?"}
      </h2>
      <p className="mt-2 text-3xl font-semibold text-[#222]">{q.prompt}</p>

      <ul className="grid gap-3 mt-6">
        {q.options.map((option) => {
          const isAnswer = option === q.answer;
          const isPicked = option === picked;
          const state = !answered
            ? "border-gray-200 hover:border-[#524fd5]"
            : isAnswer
            ? "border-[#18a058] bg-[#e8f7ef]"
            : isPicked
            ? "border-[#e5484d] bg-[#fdecec]"
            : "border-gray-200 opacity-60";
          return (
            <li key={option}>
              <button
                type="button"
                onClick={() => choose(option)}
                aria-disabled={answered}
                className={`flex items-center justify-between w-full gap-3 px-5 py-4 text-left border-[1.5px] rounded-2xl duration-200 ${state}`}
              >
                <span className="font-medium text-[#222]">{option}</span>
                {answered && isAnswer && <FiCheck className="text-[#18a058] shrink-0" aria-label="Correct answer" />}
                {answered && isPicked && !isAnswer && <FiX className="text-[#e5484d] shrink-0" aria-label="Your answer, incorrect" />}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center justify-between mt-6 min-h-[48px]" aria-live="polite">
        <p className="font-medium">{answered ? (picked === q.answer ? "Correct! +10 XP" : "Not quite — now you know.") : ""}</p>
        {answered && (
          <button type="button" onClick={next} className={primaryBtn}>
            {index === questions.length - 1 ? "See results" : "Next"} <FiArrowRight aria-hidden />
          </button>
        )}
      </div>
    </div>
  );
};

// ---- Step 3: results --------------------------------------------------------
const Results = ({ lang, lesson, result, onRetry }) => {
  const percent = scoreToPercent(result.correct, result.total);
  const nextLessonObj = lang.lessons[lang.lessons.findIndex((l) => l.id === lesson.id) + 1];
  return (
    <div className="p-8 text-center rounded-3xl bg-[#fff5f1]">
      <p className="text-5xl" aria-hidden>{result.passed ? "🎉" : "💪"}</p>
      <h2 className="mt-3 text-3xl font-semibold text-[#222]">{result.passed ? "Lesson complete!" : "Almost there"}</h2>
      <p className="mt-2 text-lg">
        You scored {result.correct}/{result.total} ({percent}%) and earned <strong>{result.xpEarned} XP</strong>.
      </p>
      {!result.passed && <p className="mt-1 text-sm">Score {Math.round(PASS_MARK * 100)}% or more to complete the lesson.</p>}
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        <button type="button" onClick={onRetry} className="px-6 py-3 font-medium border-[1.5px] border-[#524fd5] text-[#524fd5] rounded-full hover:bg-white duration-200">
          {result.passed ? "Practice again" : "Try again"}
        </button>
        {result.passed && nextLessonObj ? (
          <Link href={`/dashboard/learn/${lang.id}/${nextLessonObj.id}`} className={primaryBtn}>Next lesson <FiArrowRight aria-hidden /></Link>
        ) : (
          <Link href={`/dashboard/learn/${lang.id}`} className={primaryBtn}>Back to lessons</Link>
        )}
      </div>
    </div>
  );
};

// ---- Container --------------------------------------------------------------
const LessonPlayer = ({ langId, lessonId }) => {
  const lang = getLanguage(langId);
  const lesson = getLesson(langId, lessonId);
  const { record } = useLearner();
  const [phase, setPhase] = useState("learn");
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState(null);

  // A fresh question set for every attempt.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const questions = useMemo(() => buildQuiz(lesson.words), [lesson, attempt]);

  const finish = (correct) => {
    const outcome = record({ langId, lessonId, correct, total: questions.length });
    setResult({ correct, total: questions.length, xpEarned: outcome.xpEarned, passed: outcome.passed });
    setPhase("result");
  };

  const retry = () => {
    setAttempt((a) => a + 1);
    setResult(null);
    setPhase("quiz");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Link href={`/dashboard/learn/${langId}`} className="inline-flex items-center gap-2 text-sm font-medium text-[#524fd5] hover:underline">
        <FiArrowLeft aria-hidden /> {lang.name} lessons
      </Link>
      <h1 className="mt-4 mb-6 text-[#222] text-3xl font-medium">
        {lesson.title}
        <span className="ml-3 text-base font-normal">{phase === "learn" ? "Step 1 · Learn" : phase === "quiz" ? "Step 2 · Quiz" : "Results"}</span>
      </h1>
      {phase === "learn" && <Flashcards lang={lang} words={lesson.words} onDone={() => setPhase("quiz")} />}
      {phase === "quiz" && <Quiz key={attempt} lang={lang} questions={questions} onFinish={finish} />}
      {phase === "result" && <Results lang={lang} lesson={lesson} result={result} onRetry={retry} />}
    </div>
  );
};

export default LessonPlayer;
