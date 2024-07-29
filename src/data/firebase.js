// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5wczZECBBnmpU5ACk1FiK0f9KBi-ddYI",
  authDomain: "travel-journal-80c91.firebaseapp.com",
  projectId: "travel-journal-80c91",
  storageBucket: "travel-journal-80c91.appspot.com",
  messagingSenderId: "934037115782",
  appId: "1:934037115782:web:4d6e5067b40743ae719207",
  measurementId: "G-6TLYHR6RR1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);