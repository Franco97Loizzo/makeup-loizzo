import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAuzirZDvClewSTJF4R8ifKsBXx0Go2xw8",
    authDomain: "franco-ecomerce.firebaseapp.com",
    projectId: "franco-ecomerce",
    storageBucket: "franco-ecomerce.appspot.com",
    messagingSenderId: "895841180129",
    appId: "1:895841180129:web:50b2eeecc3c9e634da5aa0"
};

const app = initializeApp(firebaseConfig);
export const datab = getFirestore(app)
