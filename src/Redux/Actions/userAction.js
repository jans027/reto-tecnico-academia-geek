import { typesUser, userTypes, typesUser1 } from "../Types/userTypes";

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile, GoogleAuthProvider } from "firebase/auth";
// import { google } from "../../Firebase/firebaseConfig";
import { googleProvider } from '../../firebase';
import { auth } from "../../firebase"
import { ViewAgendaOutlined } from "@mui/icons-material";
import { Unstable_Grid2 } from "@mui/material";
import { db } from '../../firebase'
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore'
import { useSelector } from 'react-redux'
import { faArrowUpWideShort } from "@fortawesome/free-solid-svg-icons";

// Inicio y registro con  Google
export const loginGoogle = () => {
    return (dispatch) => {

        signInWithPopup(auth, googleProvider)
            .then(({ user }) => dispatch(loginProvider(user.uid, user.displayName)))
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
}

export const loginProvider = (id, displayName) => {
    return {
        type: userTypes.login,
        payload: { id, displayName }
    }
}


// Registro de usuario con email y contraseña
export const registerWithEmail = (email, password, name) => {
    return (dispatch) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, { displayName: name })
                dispatch(registerSync(user.email, user.displayName, user.uid))
            })
    }
}

const registerSync = (user) => {
    return {
        type: userTypes.register,
        payload: user
    }
}

// Inicio de sesion con email
export const LoginWithEmail = (email, password) => {
    return (dispatch) => {

        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => { dispatch(loginSync(user.uid, user.displayName)) })
            .catch(() => { console.log("Usuario o contraseña invalida") })
    }
}

const loginSync = (id, displayName) => {

    return {
        type: userTypes.login,
        payload: { id, displayName }
    }
}

