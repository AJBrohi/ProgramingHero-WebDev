import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeLoginFramework = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const handleGoogleSingIn = () => {
    const googleprovider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(googleprovider)
        .then((result) => {
            const { displayName, photoURL, email } = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                success: true
            }
            sessionStorage.setItem('token', signedInUser.user);
            return signedInUser;
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

export const handleFBSignIn = () => {
    var fbprovider = new firebase.auth.FacebookAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(fbprovider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // The signed-in user info.
            var user = result.user;
            user.success = true;

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var accessToken = credential.accessToken;
            return user;
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

export const handleSignOut = () => {
    return firebase.auth().signOut().then((res) => {
        // Sign-out successful.
        const signedOutUser = {
            isSignedIn: false,
            name: '',
            email: '',
            photo: ''
        }
        return signedOutUser;
    }).catch((error) => {
        // An error happened.
    });
}

export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            // Signed in 
            const newUserInfo = res.user;
            newUserInfo.message = 'User Created Successfully';
            newUserInfo.success = true;
            updateUserName(name);
            return newUserInfo;
            // ...
        })
        .catch((error) => {
            const newUserInfo = {};
            newUserInfo.message = error.message;
            newUserInfo.success = false;
            return newUserInfo;
            // ..
        })
};

export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
            // Signed in
            const newUserInfo = res.user;
            newUserInfo.message = 'User Login Successfully';
            return newUserInfo;
            // ...
        })
        .catch((error) => {
            const newUserInfo = {};
            newUserInfo.message = error.message;
            return newUserInfo;
        });
}

export const updateUserName = name => {
    var user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name
    }).then(function () {
        // Update successful.
    }).catch(function (error) {
        // An error happened.
    });
}