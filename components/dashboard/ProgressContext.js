"use client";
import { createContext, useContext } from "react";

export const ProgressContext = createContext(null);

export const useLearner = () => {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useLearner must be used inside the dashboard");
  return ctx;
};
