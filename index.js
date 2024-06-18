import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBtYu3SY_XTXzDc3lK09944M_qfdIqJyIA",
    authDomain: "gubs-online.firebaseapp.com",
    databaseURL: "https://gubs-online-default-rtdb.firebaseio.com",
    projectId: "gubs-online",
    storageBucket: "gubs-online.appspot.com",
    messagingSenderId: "936911098464",
    appId: "1:936911098464:web:cec4a62476f0b60c362905",
    measurementId: "G-6W7G04G51N"
};

const app = initializeApp(firebaseConfig);


function updateUserScores(userID,uname,gamerecord){
    const db = getDatabase();
    const reference = ref(db,"users/"+userID);
    


    set(reference, {
        username: uname,

    });
}