import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAh6B7stIgFGTiumzvcLlLLsU6-wuWo9Ck",
  authDomain: "hotel-f6018.firebaseapp.com",
  projectId: "hotel-f6018",
  storageBucket: "hotel-f6018.appspot.com", // Corrected domain
  messagingSenderId: "45944816234",
  appId: "1:45944816234:web:537cd79db528c9dab78013",
  
  databaseURL: "https://hotel-f6018-default-rtdb.firebaseio.com/"
};

export const app = initializeApp(firebaseConfig);


https://hotel-f6018-default-rtdb.firebaseio.com/