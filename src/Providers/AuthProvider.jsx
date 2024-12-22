import PropTypes from 'prop-types';
import { createContext, useEffect } from 'react';
import app from '../Firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from 'react';
const auth = getAuth(app)
export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login user
    const singIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logout user
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    // google Login
    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }
    // Obserber
    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, (currenUser) => {
            console.log(currenUser)
            setUser(currenUser)
            setLoading(false)
        })
        return Unsubscribe;
    }, [])

    const userInfo = {
        user,
        loading,
        createUser,
        singIn,
        logOut,
        googleLogin
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {

};

export default AuthProvider;