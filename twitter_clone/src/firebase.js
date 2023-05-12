import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: ProcessingInstruction.env.REACT_APP_API_KEY,
    authDomain: ProcessingInstruction.env.REACT_APP_AUTH_DOMAIN,
    projectId: ProcessingInstruction.env.REACT_APP_DATABASE_URL,
    storageBucket: ProcessingInstruction.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: ProcessingInstruction.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: ProcessingInstruction.env.REACT_APP_APP_ID,
  };           
  export default initializeApp(firebaseConfig);