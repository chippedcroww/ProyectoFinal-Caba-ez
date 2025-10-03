// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 🔑 Credenciales de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDHA78MgLo_il4Cxb-BmuDW6sQrR0d5Bhc",
  authDomain: "proyecto-final-1a8a3.firebaseapp.com",
  projectId: "proyecto-final-1a8a3",
  storageBucket: "proyecto-final-1a8a3.firebasestorage.app",
  messagingSenderId: "440070057857",
  appId: "1:440070057857:web:f09463269c953f8ce98280",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar Firestore
export const db = getFirestore(app);
