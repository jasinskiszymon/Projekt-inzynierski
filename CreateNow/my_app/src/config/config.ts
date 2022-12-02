import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import{ getStorage } from "firebase/storage";
export const config = {
         apiKey: "AIzaSyAd61CNhdrFpwdTR-SvMVW824f5P27YCx4",
         authDomain: "logincreatenow.firebaseapp.com",
         projectId: "logincreatenow",
         storageBucket: "logincreatenow.appspot.com",
         messagingSenderId: "246886440398",
         appId: "1:246886440398:web:e01d74f1a12b19443bdf9f",
         measurementId: "G-Q8Y651XVCM"
    
};
export const app = initializeApp(config);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);