import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
  authDomain: "rengar-web.firebaseapp.com",
  projectId: "rengar-web",
  storageBucket: "rengar-web.appspot.com",
  messagingSenderId: "148264459569",
  appId: "1:148264459569:web:f865ab502ab4d3bd0d6410",
  measurementId: "G-DFT1K8JTS6",
};

const firebaseClientApp = initializeApp(firebaseConfig);
export const firebaseClientAuth = getAuth(firebaseClientApp);
setPersistence(firebaseClientAuth, browserLocalPersistence);
