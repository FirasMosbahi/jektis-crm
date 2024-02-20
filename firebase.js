import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCEgXdOW6PDQs0jHDeBd5CVApuSXycR0Qg",
    authDomain: "jektis-crm.firebaseapp.com",
    projectId: "jektis-crm",
    storageBucket: "jektis-crm.appspot.com",
    messagingSenderId: "62383741211",
    appId: "1:62383741211:web:ed07b721ea6390a2355bbe",
    measurementId: "G-79RZV342VV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;