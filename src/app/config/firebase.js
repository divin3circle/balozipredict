import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZa-pFlcr1GK_ZElCT-joBy9B1k9jKejo",
  authDomain: "balozi-71d2d.firebaseapp.com",
  projectId: "balozi-71d2d",
  storageBucket: "balozi-71d2d.appspot.com",
  messagingSenderId: "709369440203",
  appId: "1:709369440203:web:9ec9b3498be3d419d0784e",
  measurementId: "G-7EDWSD2VJV",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
