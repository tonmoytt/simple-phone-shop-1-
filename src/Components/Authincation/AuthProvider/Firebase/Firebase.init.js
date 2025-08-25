// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPkxJ9ofqBpns_DPX27JBMDjsLo7dJlKI",
    authDomain: "gadgethaven-phone-store.firebaseapp.com",
    projectId: "gadgethaven-phone-store",
    storageBucket: "gadgethaven-phone-store.firebasestorage.app",
    messagingSenderId: "919876261276",
    appId: "1:919876261276:web:6f4ababb7863a468c9a459"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;