
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBYn2M6vK7cKXC3ZIIlPUgfcbq2dbJ4QFM",
  authDomain: "contactfirebase-88090.firebaseapp.com",
  projectId: "contactfirebase-88090",
  storageBucket: "contactfirebase-88090.appspot.com",
  messagingSenderId: "490903840748",
  appId: "1:490903840748:web:13e44249103461978482c9"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);