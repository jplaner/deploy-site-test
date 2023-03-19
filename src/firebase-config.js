import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

//const webpack = require('webpack');
//require('dotenv').config({path: '/.env'});

const firebaseConfig = {
    apiKey: "AIzaSyBJcxXHy6sv8R5hIo9mcMegJf5MyrEHbCU",
    authDomain: "test-deploy-1f979.firebaseapp.com",
    projectId: "test-deploy-1f979",
    storageBucket: "test-deploy-1f979.appspot.com",
    messagingSenderId: "830061008775",
    appId: "1:830061008775:web:63b2a698fd8e45a8062522"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export const db = getFirestore(app);