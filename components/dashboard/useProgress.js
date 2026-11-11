"use client";
import { useCallback, useEffect, useState } from "react";
import { emptyProgress, loadProgress, recordResult, saveProgress } from "@/lib/progress";

// Loads the signed-in learner's progress after mount (localStorage is browser-only)
// and persists every update.
export function useProgress(uid) {
  const [progress, setProgress] = useState(emptyProgress);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!uid) return;
    setProgress(loadProgress(uid));
    setReady(true);
  }, [uid]);

  const record = useCallback(
    (result) => {
      const outcome = recordResult(loadProgress(uid), result);
      saveProgress(uid, outcome.progress);
      setProgress(outcome.progress);
      return outcome;
    },
    [uid]
  );

  const choosePreferred = useCallback(
    (langId) => {
      const next = { ...loadProgress(uid), preferredLanguage: langId };
      saveProgress(uid, next);
      setProgress(next);
    },
    [uid]
  );

  return { progress, ready, record, choosePreferred };
}
