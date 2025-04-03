import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";
import "./index.css";
import App from "./App.jsx";

const firebaseConfig = {
  apiKey: "AIzaSyCsxtvD5dQEP3TDJsQv8h4hzGdHqWp-I44",
  authDomain: "e-commercelingu.firebaseapp.com",
  projectId: "e-commercelingu",
  storageBucket: "e-commercelingu.firebasestorage.app",
  messagingSenderId: "658737836765",
  appId: "1:658737836765:web:ff3dd3bda7d920e3c76134",
};

initializeApp(firebaseConfig);

createRoot(document.getElementById("root")).render(<App />);
