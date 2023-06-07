import React, { createContext, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/Firebase.Config';
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const googleProvider = new GoogleAuthProvider();

  
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const logIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  // login with google 
  const logInGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }
  const logOut = () => {
    setLoading(true)
   return signOut(auth)
 }


  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    logIn,
    logInGoogle,
    logOut
  }
  

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;