import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVlaGkK3XaDXGaAq62GAhpXQmPxmz_mug",
  authDomain: "react-hooks-blog-a36f0.firebaseapp.com",
  projectId: "react-hooks-blog-a36f0",
  storageBucket: "react-hooks-blog-a36f0.appspot.com",
  messagingSenderId: "688467537471",
  appId: "1:688467537471:web:32796db8f3c85e997f928a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();