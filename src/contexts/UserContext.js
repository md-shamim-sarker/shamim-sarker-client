import React, {createContext, useEffect, useState} from 'react';
import {createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updateProfile} from 'firebase/auth';
import app from '../firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState({});
    const [storedCategories, setStoredCategories] = useState([]);
    const [interviewCategories, setInterviewCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [toggleMenu, setToggleMenu] = useState(false);

    // Fetching all categories
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setStoredCategories(data))
            .catch(console.dir);
    }, [loading]);

    // Fetching all interview categories
    useEffect(() => {
        fetch('http://localhost:5000/interviewCategories')
            .then(res => res.json())
            .then(data => setInterviewCategories(data))
            .catch(console.dir);
    }, [loading]);

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
        return fetch(`http://localhost:5000/users/${email}`);
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
        storedCategories,
        signInWithFacebook,
        interviewCategories,
        signInWithEmailPassword,
        sendUserEmailVerification
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;