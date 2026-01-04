import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import axios from "axios";



export const AuthContext = createContext();

// google signin
const GoogleProvider = new GoogleAuthProvider

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [role, setRole] = useState('')
    console.log(user)
    console.log(role)
  const registerWithEmailPassword = (email, password) => {
    // setLoading(false)
    return createUserWithEmailAndPassword(auth, email, password)
  };

//   for google login/ signin
  const handleGoogleSignIn = () =>{
     setLoading(true)
     return signInWithPopup(auth, GoogleProvider)
     
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
    })

        return () => {
            unsubscribe();
        }
  },[])

    useEffect(() => {
        if (!user) return;
        axios.get(`https://missionscic10-tau.vercel.app/users/${user.email}`)
            .then(res => {
                setRole(res.data.role)
                
               
            })
    }, [user])

  const authData = {
    registerWithEmailPassword,
    setUser,
    user,
    handleGoogleSignIn,
    loading,
    role
  };


  return <AuthContext value={authData}>
     {children}
  </AuthContext>
};

export default AuthProvider;
