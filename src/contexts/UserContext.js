import React, {createContext, useEffect, useState} from 'react';
import {createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updateProfile} from 'firebase/auth';
import app from '../firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [toggleMenu, setToggleMenu] = useState(false);

    // Fetching all categories by category type
    const categoryByType = (categoryType) => {
        return fetch(`https://shamim-sarker-server.vercel.app/notes/category-type/${categoryType}`);
    };

    // Fetching all categories by category
    const allCategories = (categoryType) => {
        return fetch(`https://shamim-sarker-server.vercel.app/categories/categoryType/${categoryType}`);
    };

    // Add to db
    const addToDb = (url, dataObj) => {
        return fetch(url, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(dataObj)
        });
    };

    // Is User Exist
    const isUserExist = (email) => {
        return fetch(`https://shamim-sarker-server.vercel.app/users/${email}`);
    };

    // All Provider
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    // Sign in with google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Sign in with github
    const signInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider);
    };

    // Sign in with facebook
    const signInWithFacebook = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    };

    // Sign in with email and password
    const signInWithEmailPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Update user
    const updateUser = (userObj) => {
        return updateProfile(auth.currentUser, userObj);
    };

    // Update email
    const updateEmailId = (email) => {
        return updateEmail(auth.currentUser, email);
    };

    // Send Email Verification
    const sendUserEmailVerification = () => {
        return sendEmailVerification(auth.currentUser);
    };

    // Sign out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // unsubscribe
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    // All info
    const authInfo = {
        user,
        logOut,
        setUser,
        addToDb,
        loading,
        createUser,
        toggleMenu,
        updateUser,
        setLoading,
        isUserExist,
        updateEmailId,
        setToggleMenu,
        signInWithGoogle,
        signInWithGithub,
        categoryByType,
        signInWithFacebook,
        signInWithEmailPassword,
        sendUserEmailVerification,
        allCategories
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;