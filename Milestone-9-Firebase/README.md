This is Milestone 9 which is simple firebase authentication. Here we will learn how to make a react app authenticate by firebase.

## 1st step - Create A Firebase Project

## 2nd step - Register App with Firebase

## 3rd step - Install Firebase to app

    ``` npm install --save firebase ```
    
    ```
    var firebase = require("firebase/app");

    // Add the Firebase products that you want to use
    require("firebase/auth");
    require("firebase/firestore"); // not require in authentication
    ```
    
    Initialize Firebase from Settings
    
    ```
    const firebaseConfig = {
    apiKey: "AIzaSyDkw76rWXTSl3Q0FIZ9Xegur-wbqz4Mb4M",
    authDomain: "hello-firebase-world-b44ea.firebaseapp.com",
    projectId: "hello-firebase-world-b44ea",
    storageBucket: "hello-firebase-world-b44ea.appspot.com",
    messagingSenderId: "306893049138",
    appId: "1:306893049138:web:e4a797b512423f9dbf1b2b"
    };
    ```
## Step 4 - Deploy