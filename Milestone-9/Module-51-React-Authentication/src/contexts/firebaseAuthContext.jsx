import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

const INITIAL_AUTH_VALUE = {
  user: {},
  loading: Boolean,
  createUserWithEmail() {},
  signInWithEmail() {},
  signOutFromFirebase() {},
  googleSignIn() {},
};

const FirebaseAuthContext = createContext(INITIAL_AUTH_VALUE);

function FirebaseAuthContextProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // ! create user with email
  function createUserWithEmail(email, password) {
    setLoading(() => true);

    return createUserWithEmailAndPassword(auth, email, password);
  }
  // !sign in with email
  function signInWithEmail(email, password) {
    setLoading(() => true);

    return signInWithEmailAndPassword(auth, email, password);
  }

  // !Google sign in
  function googleSignIn() {
    setLoading(() => true);
    return signInWithPopup(auth, googleProvider);
  }

  // !Sign out
  function signOutFromFirebase() {
    setLoading(() => true);

    return signOut(auth);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(
        "current user inside use effect onAuthStateChanged",
        currentUser
      );
      setUser(() => currentUser);
      setLoading(() => false);
    });

    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUserWithEmail,
    signInWithEmail,
    signOutFromFirebase,
    googleSignIn,
  };
  return (
    <FirebaseAuthContext.Provider value={authInfo}>
      {children}
    </FirebaseAuthContext.Provider>
  );
}

function useFirebaseAuthContext() {
  return useContext(FirebaseAuthContext);
}
export { FirebaseAuthContextProvider, useFirebaseAuthContext };
