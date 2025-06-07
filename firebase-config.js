
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD20R2U6ouZc9WRNAE0fLrTPUviqqX8Pvw",
  authDomain: "talkgram2.firebaseapp.com",
  databaseURL: "https://talkgram2-default-rtdb.firebaseio.com",
  projectId: "talkgram2",
  storageBucket: "talkgram2.firebasestorage.app",
  messagingSenderId: "196126389993",
  appId: "1:196126389993:web:9f549942602c010a602278",
  measurementId: "G-QKRB9KFED3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
