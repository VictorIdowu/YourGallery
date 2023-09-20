import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Import other Firebase services you need...
const firebaseConfig = {
  apiKey: "AIzaSyAutxftFM9-Es4J3uSjVUM_nB_GN8Yc1zs",
  authDomain: "galleryapp-5a43b.firebaseapp.com",
  projectId: "galleryapp-5a43b",
  storageBucket: "galleryapp-5a43b.appspot.com",
  messagingSenderId: "167354387021",
  appId: "1:167354387021:web:cc20c128337f8e6f726a04",
  measurementId: "G-TD1JFQMFGH",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Initialize other Firebase services you need...
export { auth };
