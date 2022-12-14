import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDEa-meiUhZM-_7gOjc_tCO7kDRoGS8t0s",
  authDomain: "cart-450e3.firebaseapp.com",
  projectId: "cart-450e3",
  storageBucket: "cart-450e3.appspot.com",
  messagingSenderId: "833662551829",
  appId: "1:833662551829:web:50b1eb9866bd5fef21cb1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

export default app;
