import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6d0NBz7RM5W7tjbkhwwqH7032YBPbxPI",
  authDomain: "lingua-c4c69.firebaseapp.com",
  projectId: "lingua-c4c69",
  storageBucket: "lingua-c4c69.appspot.com",
  messagingSenderId: "584689644374",
  appId: "1:584689644374:web:e91a8c34a4ae63be2f1cf7",
  measurementId: "G-P60HDC4QFS"
};

const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default function firebase() {<>Nothing is here!</>}