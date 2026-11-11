"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  updateProfile,
} from "firebase/auth";
import { auth, isFirebaseConfigured } from "@/lib/firebase";

const GUEST_KEY = "lingua:guest";
const AuthContext = createContext(null);

const readGuest = () => {
  try {
    const raw = window.localStorage.getItem(GUEST_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const toUser = (fbUser) =>
  fbUser
    ? {
        uid: fbUser.uid,
        email: fbUser.email,
        displayName: fbUser.displayName || fbUser.email?.split("@")[0] || "Learner",
        isGuest: false,
      }
    : null;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const guest = readGuest();
    if (!auth) {
      setUser(guest);
      setLoading(false);
      return undefined;
    }
    return onAuthStateChanged(auth, (fbUser) => {
      setUser(fbUser ? toUser(fbUser) : readGuest());
      setLoading(false);
    });
  }, []);

  const signUp = useCallback(async ({ fullName, email, password }) => {
    if (!auth) throw Object.assign(new Error("not-configured"), { code: "app/not-configured" });
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(cred.user, { displayName: fullName });
    setUser(toUser({ ...cred.user, displayName: fullName }));
    return cred.user;
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    if (!auth) throw Object.assign(new Error("not-configured"), { code: "app/not-configured" });
    const cred = await signInWithEmailAndPassword(auth, email, password);
    return cred.user;
  }, []);

  const resetPassword = useCallback(async (email) => {
    if (!auth) throw Object.assign(new Error("not-configured"), { code: "app/not-configured" });
    await sendPasswordResetEmail(auth, email);
  }, []);

  const signInAsGuest = useCallback((name = "Guest learner") => {
    const guest = { uid: "guest", email: null, displayName: name, isGuest: true };
    try {
      window.localStorage.setItem(GUEST_KEY, JSON.stringify(guest));
    } catch {
      /* storage unavailable — session lasts until reload */
    }
    setUser(guest);
    return guest;
  }, []);

  const signOut = useCallback(async () => {
    try {
      window.localStorage.removeItem(GUEST_KEY);
    } catch {
      /* ignore */
    }
    if (auth) await firebaseSignOut(auth);
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({ user, loading, isFirebaseConfigured, signUp, signIn, signOut, resetPassword, signInAsGuest }),
    [user, loading, signUp, signIn, signOut, resetPassword, signInAsGuest]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
};

// Maps Firebase error codes to messages a learner can act on.
export function authErrorMessage(code) {
  switch (code) {
    case "auth/user-not-found":
    case "auth/wrong-password":
    case "auth/invalid-credential":
    case "auth/invalid-login-credentials":
      return "Incorrect email or password. Please try again.";
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/user-disabled":
      return "Your account has been disabled. Please contact support.";
    case "auth/too-many-requests":
      return "Too many attempts. Please try again later.";
    case "auth/network-request-failed":
      return "Network error. Please check your connection and try again.";
    case "auth/email-already-in-use":
      return "This email is already in use. Try signing in instead.";
    case "auth/weak-password":
      return "Password must be at least 8 characters long.";
    case "app/not-configured":
      return "Accounts aren't enabled in this demo build. Use “Try the demo” instead.";
    default:
      return "Something went wrong. Please try again.";
  }
}
