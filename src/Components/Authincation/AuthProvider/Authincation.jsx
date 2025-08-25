import { 
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './Firebase/Firebase.init';


export const Authmainprovider = createContext(null);
const google = new GoogleAuthProvider();

const Authincation = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleAuth = () => {
        return signInWithPopup(auth, google); // ✅ must return promise
    }

    const SingOutLog = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser);
            setUser(currentUser);
        });
        return () => unsubscribe(); // ✅ correct cleanup
    }, []);

    const authInfo = {
        user,
        createUser,
        signInUser,
        SingOutLog,
        googleAuth
    };

    return (
        <Authmainprovider.Provider value={authInfo}>
            {children}
        </Authmainprovider.Provider>
    );
};

export default Authincation;
