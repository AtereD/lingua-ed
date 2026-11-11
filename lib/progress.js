// Pure progress logic (no React, no browser APIs except the thin storage helpers
// at the bottom) so it can be unit-tested with `node --test`.

export const XP_PER_CORRECT = 10;
export const XP_LESSON_BONUS = 20;
export const PASS_MARK = 0.6;

export const emptyProgress = () => ({
  xp: 0,
  streak: 0,
  lastActive: null, // "YYYY-MM-DD"
  preferredLanguage: null,
  lessons: {}, // "spanish/greetings": { bestScore, attempts, completed }
});

export const dayKey = (date = new Date()) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

const daysBetween = (a, b) => {
  const toUtc = (k) => {
    const [y, m, d] = k.split("-").map(Number);
    return Date.UTC(y, m - 1, d);
  };
  return Math.round((toUtc(b) - toUtc(a)) / 86400000);
};

// Streak rules: same day keeps it, next day extends it, a gap resets to 1.
export const nextStreak = (streak, lastActive, today) => {
  if (!lastActive) return 1;
  const gap = daysBetween(lastActive, today);
  if (gap <= 0) return Math.max(streak, 1);
  if (gap === 1) return streak + 1;
  return 1;
};

// A streak that has lapsed (missed yesterday) shouldn't be shown as live.
export const currentStreak = (progress, today = dayKey()) => {
  if (!progress.lastActive) return 0;
  return daysBetween(progress.lastActive, today) > 1 ? 0 : progress.streak;
};

export const lessonKey = (langId, lessonId) => `${langId}/${lessonId}`;

export const scoreToPercent = (correct, total) => (total ? Math.round((correct / total) * 100) : 0);

// Returns { progress, xpEarned, passed } without mutating the input.
export const recordResult = (progress, { langId, lessonId, correct, total, today = dayKey() }) => {
  const key = lessonKey(langId, lessonId);
  const prev = progress.lessons[key] || { bestScore: 0, attempts: 0, completed: false };
  const percent = scoreToPercent(correct, total);
  const passed = total > 0 && correct / total >= PASS_MARK;

  // Bonus XP only the first time a lesson is passed, so replaying can't be farmed.
  const bonus = passed && !prev.completed ? XP_LESSON_BONUS : 0;
  const xpEarned = correct * XP_PER_CORRECT + bonus;

  return {
    xpEarned,
    passed,
    progress: {
      ...progress,
      xp: progress.xp + xpEarned,
      streak: nextStreak(progress.streak, progress.lastActive, today),
      lastActive: today,
      lessons: {
        ...progress.lessons,
        [key]: {
          bestScore: Math.max(prev.bestScore, percent),
          attempts: prev.attempts + 1,
          completed: prev.completed || passed,
        },
      },
    },
  };
};

export const languageProgress = (progress, lang) => {
  const done = lang.lessons.filter((l) => progress.lessons[lessonKey(lang.id, l.id)]?.completed).length;
  return { done, total: lang.lessons.length, percent: Math.round((done / lang.lessons.length) * 100) };
};

export const nextLesson = (progress, lang) =>
  lang.lessons.find((l) => !progress.lessons[lessonKey(lang.id, l.id)]?.completed) || null;

export const level = (xp) => Math.floor(xp / 100) + 1;

// ---- Quiz generation -------------------------------------------------------

// Seedable PRNG (mulberry32) so tests are deterministic.
export const makeRng = (seed = Date.now()) => {
  let t = seed >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
};

const shuffle = (arr, rng) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// One question per word. Alternates direction: term → meaning, meaning → term.
export const buildQuiz = (words, rng = Math.random) =>
  shuffle(words, rng).map((word, i) => {
    const toMeaning = i % 2 === 0;
    const pick = (w) => (toMeaning ? w.meaning : w.term);
    const distractors = shuffle(words.filter((w) => w !== word), rng)
      .slice(0, 3)
      .map(pick);
    const answer = pick(word);
    return {
      prompt: toMeaning ? word.term : word.meaning,
      promptKind: toMeaning ? "term" : "meaning",
      answer,
      options: shuffle([answer, ...distractors], rng),
    };
  });

// ---- Storage ---------------------------------------------------------------

const storageKey = (uid) => `lingua:progress:${uid}`;

export const loadProgress = (uid) => {
  try {
    const raw = window.localStorage.getItem(storageKey(uid));
    return raw ? { ...emptyProgress(), ...JSON.parse(raw) } : emptyProgress();
  } catch {
    return emptyProgress();
  }
};

export const saveProgress = (uid, progress) => {
  try {
    window.localStorage.setItem(storageKey(uid), JSON.stringify(progress));
  } catch {
    /* storage unavailable — progress lasts for this session only */
  }
};

export const setPreferredLanguage = (uid, langId) =>
  saveProgress(uid, { ...loadProgress(uid), preferredLanguage: langId });
