import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import google from '../../images/google.png';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSingIn = () => {
        const googleprovider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth()
            .signInWithPopup(googleprovider)
            .then((result) => {
                const { displayName, photoURL, email } = result.user;
                const signedInUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                sessionStorage.setItem('token', signedInUser.user);
                setLoggedInUser(signedInUser);
                history.replace(from);
                // console.log(loggedInUser);
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

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-center mt-5">AJ IT Farm</h2>
            <h4 className="mt-5">Login With</h4>
            <button className="btn btn-primary mt-3" onClick={handleGoogleSingIn}><img src={google} alt="" style={{ height: "20px", marginRight: "20px" }} />Continue with Google</button>
        </div>
    );
};

export default Login;