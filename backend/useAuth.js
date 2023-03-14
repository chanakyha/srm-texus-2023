import React, { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { useState } from "react";
import { notification } from "antd";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [api, contextHolder] = notification.useNotification();
  const [user, setUser] = useState([]);
  const [userDb, setUserDb] = useState([]);
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        ;(async () => {
          const docSnap = await getDoc(doc(db, "students", user.uid));
          // console.log(docSnap?.data())
          if (docSnap?.data()?.texusId) {
            console.log("User already exists");
            setUserDb({...docSnap.data(), id:docSnap.id });
          }
        })()
        
      } else {
        setUser(false);
      }
    });
  }, [user]);

  const onSignin = () => {
    signInWithPopup(auth, googleProvider)
      .then((user) => {
        setDoc(
          doc(db, "students", user.user.uid),
          {
            authName: user.user.displayName,
            authEmail: user.user.email,
            authPhoto: user.user.photoURL,
            authUid: user.user.uid,
          },
          { merge: true }
        ).then(async () => {
          const docSnap = await getDoc(doc(db, "students", user.user.uid));
          if (docSnap?.data()?.texusId) {
            console.log("User already exists");
            setUserDb({...docSnap.data(), id:docSnap.id });
          } else {
            router.replace("/register");
          }
        });
        console.log("Logged in Successfully");
      })
      .catch(console.warn);
  };

  const onSignout = () => {
    signOut(auth)
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch(() => {
        console.log("Error logging out");
      });
  };

  return (
    <AuthContext.Provider value={{ user, onSignin, onSignout, api, userDb }}>
      
      {children}
      {contextHolder}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuth() {
  return useContext(AuthContext);
}
