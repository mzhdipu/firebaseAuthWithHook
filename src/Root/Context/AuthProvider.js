import React, { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/FirebaseConfig";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('')
  //1. CREATE USER WITH EMAIL & PASSWORD
  //  ====================================================
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // LOGIN WITH EMAIL & PASSWORD
  //  ====================================================
  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // GOOGLE LOGIN & REGISTRATION
  //  ====================================================
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // USER INFOR AFTER LOGIN OR REGISTRATION
  //  ====================================================
  useEffect(() => {
    //this part will execute once the component is mounted.
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      //this part will execute once the component is unmounted.
      unsubscribe();
    };
  }, []);


    //   DISPLAY USER INFORMATION
  //  ====================================================
  const updateUserProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  //  LOGOUT
  //  ====================================================
  const logout = () => {
    return signOut(auth);
  };


  const authInfo = {
    createUser,
    signin,
    signInWithGoogle,
    user,
    updateUserProfile,
    logout
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );

};

export default AuthProvider;
