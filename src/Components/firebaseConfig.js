
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDFNRgv9buLIqPqIQrvftvkvPFEVGEX5Ro",
    authDomain: "brost-376218.firebaseapp.com",
    projectId: "brost-376218",
    storageBucket: "brost-376218.appspot.com",
    messagingSenderId: "1086732838981",
    appId: "1:1086732838981:web:7dd6481e000bab64799b2c",
    measurementId: "G-D6EHMTF64J"
};
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);