import test from "node:test";
import assert from "node:assert/strict";
import {
  buildQuiz, currentStreak, emptyProgress, languageProgress, level, makeRng,
  nextLesson, nextStreak, recordResult, XP_LESSON_BONUS, XP_PER_CORRECT,
} from "../lib/progress.js";
import { LANGUAGES, getLesson } from "../lib/content.js";

test("streak extends on consecutive days, holds on same day, resets after a gap", () => {
  assert.equal(nextStreak(0, null, "2026-11-10"), 1);
  assert.equal(nextStreak(3, "2026-11-10", "2026-11-10"), 3);
  assert.equal(nextStreak(3, "2026-11-10", "2026-11-11"), 4);
  assert.equal(nextStreak(3, "2026-11-10", "2026-11-13"), 1);
  assert.equal(nextStreak(2, "2026-02-28", "2026-03-01"), 3); // month boundary
});

test("a lapsed streak is displayed as 0", () => {
  const p = { ...emptyProgress(), streak: 5, lastActive: "2026-11-01" };
  assert.equal(currentStreak(p, "2026-11-02"), 5);
  assert.equal(currentStreak(p, "2026-11-05"), 0);
});

test("passing a lesson awards XP plus a one-time bonus", () => {
  const args = { langId: "spanish", lessonId: "greetings", correct: 5, total: 6, today: "2026-11-11" };
  const first = recordResult(emptyProgress(), args);
  assert.equal(first.passed, true);
  assert.equal(first.xpEarned, 5 * XP_PER_CORRECT + XP_LESSON_BONUS);
  const again = recordResult(first.progress, args);
  assert.equal(again.xpEarned, 5 * XP_PER_CORRECT); // no second bonus
  assert.equal(again.progress.lessons["spanish/greetings"].attempts, 2);
});

test("failing keeps the lesson incomplete and never lowers the best score", () => {
  const ok = recordResult(emptyProgress(), { langId: "french", lessonId: "greetings", correct: 6, total: 6, today: "2026-11-11" });
  const bad = recordResult(ok.progress, { langId: "french", lessonId: "greetings", correct: 1, total: 6, today: "2026-11-11" });
  assert.equal(bad.passed, false);
  assert.equal(bad.progress.lessons["french/greetings"].bestScore, 100);
  assert.equal(bad.progress.lessons["french/greetings"].completed, true);
});

test("recordResult does not mutate its input", () => {
  const p = emptyProgress();
  recordResult(p, { langId: "german", lessonId: "greetings", correct: 6, total: 6, today: "2026-11-11" });
  assert.deepEqual(p, emptyProgress());
});

test("language progress and next lesson", () => {
  const lang = LANGUAGES.find((l) => l.id === "italian");
  let p = emptyProgress();
  assert.equal(nextLesson(p, lang).id, "greetings");
  p = recordResult(p, { langId: "italian", lessonId: "greetings", correct: 6, total: 6, today: "2026-11-11" }).progress;
  assert.deepEqual(languageProgress(p, lang), { done: 1, total: 2, percent: 50 });
  assert.equal(nextLesson(p, lang).id, "essentials");
});

test("level rises every 100 XP", () => {
  assert.equal(level(0), 1);
  assert.equal(level(99), 1);
  assert.equal(level(100), 2);
});

test("quiz has one question per word, 4 unique options, and always contains the answer", () => {
  for (const lang of LANGUAGES) {
    for (const lesson of lang.lessons) {
      const quiz = buildQuiz(lesson.words, makeRng(42));
      assert.equal(quiz.length, lesson.words.length);
      for (const q of quiz) {
        assert.equal(q.options.length, 4, `${lang.id}/${lesson.id}: ${q.prompt}`);
        assert.equal(new Set(q.options).size, 4, `${lang.id}/${lesson.id}: duplicate options for ${q.prompt}`);
        assert.ok(q.options.includes(q.answer));
      }
    }
  }
});

test("content is well-formed", () => {
  assert.equal(LANGUAGES.length, 8);
  for (const lang of LANGUAGES) {
    assert.ok(lang.lessons.length >= 2, lang.id);
    for (const lesson of lang.lessons) {
      assert.ok(lesson.words.length >= 4, `${lang.id}/${lesson.id}`);
      for (const w of lesson.words) assert.ok(w.term && w.meaning);
    }
  }
  assert.equal(getLesson("nope", "x"), null);
});
