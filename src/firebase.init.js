import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoMuTzGyT3SOgL3nYckL51EA78xXp5hx0",
  authDomain: "genius-car-services-4801c.firebaseapp.com",
  projectId: "genius-car-services-4801c",
  storageBucket: "genius-car-services-4801c.appspot.com",
  messagingSenderId: "230041599986",
  appId: "1:230041599986:web:c304e59a0440fc899cf56b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

// import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,  
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,    
//   appId: process.env.REACT_APP_appId,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);

// export default auth;