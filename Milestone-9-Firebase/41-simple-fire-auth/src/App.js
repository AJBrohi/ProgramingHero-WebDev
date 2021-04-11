import './App.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config"
import React, { useState } from "react";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    photoURL: '',
    message: ''
  })

  const googleprovider = new firebase.auth.GoogleAuthProvider();
  var fbprovider = new firebase.auth.FacebookAuthProvider();

  const handleSingIn = () => {
    firebase.auth()
      .signInWithPopup(googleprovider)
      .then((result) => {
        const { displayName, photoURL, email } = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL
        }
        setUser(signedInUser);
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }

  const handleFBSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(fbprovider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // The signed-in user info.
        var user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var accessToken = credential.accessToken;
        
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        // ...
      });
  }

  const handleSingOut = () => {
    firebase.auth().signOut().then((res) => {
      // Sign-out successful.
      const signedOutUser = {
        isSignedIn: false,
        name: '',
        email: '',
        photo: ''
      }
      setUser(signedOutUser);
    }).catch((error) => {
      // An error happened.
    });
  }

  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          // Signed in 
          const newUserInfo = { ...user };
          newUserInfo.message = 'User Created Successfully';
          setUser(newUserInfo);
          updateUserName(user.name);
          // ...
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.message = error.message;
          setUser(newUserInfo);
          // ..
        });

    }

    if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          // Signed in
          const newUserInfo = { ...user };
          newUserInfo.message = 'User Login Successfully';
          setUser(newUserInfo);
          // ...
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.message = error.message;
          setUser(newUserInfo);
        });
    }
    e.preventDefault();
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }

  const updateUserName = name => {
    var user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name
    }).then(function () {
      // Update successful.
    }).catch(function (error) {
      // An error happened.
    });
  }

  return (
    <div className="App">
      {
        user.isSignedIn ? <button onClick={handleSingOut}>Sign out</button> :
          <button onClick={handleSingIn}>Sign in</button>
      }
      <br />
      <button onClick={handleFBSignIn}>Sign in Using Facebook</button>
      {
        user.isSignedIn && <div>
          <p>Welcome, {user.name}</p>
          <p>Your Email: {user.email}</p>
          <img src={user.photo} alt="" />
        </div>
      }

      <h1>Our Own Authentication</h1>
      <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" />
      <label htmlFor="newUser">New User Sign Up</label>
      <form onSubmit={handleSubmit}>
        {newUser && <input type="text" onBlur={handleBlur} placeholder='Your Name' name='name' required />}
        <br />
        <input type="text" onBlur={handleBlur} name="email" placeholder="Enter Your Email" required />
        <br />
        <input type="password" onBlur={handleBlur} name="password" placeholder="Enter Password" required />
        <br />
        <input type="submit" value={newUser ? "Signup" : "Sign In"} />
      </form>
      <p style={{ color: 'blue', fontSize: "20px" }}>{user.message}</p>
    </div>
  );
}

export default App;
