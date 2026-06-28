import { initializeApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCVzoddbuoqk13M7lBoVfxIQI0LwawNiHE",
  authDomain: "bet-tracker-8a9c6.firebaseapp.com",
  projectId: "bet-tracker-8a9c6",
  storageBucket: "bet-tracker-8a9c6.firebasestorage.app",
  messagingSenderId: "780879440455",
  appId: "1:780879440455:web:15a0af00f17cb7835b9f62",
};

const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const storage = getStorage(app);