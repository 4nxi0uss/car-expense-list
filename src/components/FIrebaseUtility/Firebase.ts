import { initializeApp } from "firebase/app"
import { getDatabase} from "firebase/database"

const config = {
  apiKey: "AIzaSyCx7P5H6CrMqbY8J3O0jd5Yy6Z27srH8Lc",
  authDomain: "car-payment-calculator-a1bca.firebaseapp.com",
  projectId: "car-payment-calculator-a1bca",
  storageBucket: "car-payment-calculator-a1bca.appspot.com",
  messagingSenderId: "396010861498",
  appId: "1:396010861498:web:b0570993ee769cc0912383"
  };

  const firebaseApp = initializeApp(config);
  export const databaseRef = getDatabase();
  // export const todosRef = databaseRef.child("todos")
  export default firebaseApp;