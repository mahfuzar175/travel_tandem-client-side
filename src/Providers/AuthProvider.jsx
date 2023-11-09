import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password, name, photo) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, { displayName: name, photoURL: photo });
        return userCredential;
      });
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = {email: userEmail}
      setUser(currentUser);
      setLoading(false);
      // if user exist then issue a token
      if(currentUser){
        axios.post('https://b8a11-server-side-mahfuzar175.vercel.app/jwt',loggedUser, {withCredentials: true})
        .then(res => {
          console.log('token response', res.data);
        })
      }
      else{
        axios.post('https://b8a11-server-side-mahfuzar175.vercel.app/logout', loggedUser, {withCredentials: true})
        .then(res =>{
            console.log(res.data);
        })
      }
    });
    return () => {
      unSubscribe();
    }
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
