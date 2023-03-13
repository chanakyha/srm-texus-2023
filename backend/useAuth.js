import React, { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
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
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
  }, []);

  const onSignin = () => {
    signInWithPopup(auth, googleProvider)
      .then((user) => {
        setUser(user);
        if (
          user.uid === "i7G3q5uCZZXLetZ8pUyPpD3rGpj1" ||
          user.email === "srmtexus2k23@gmail.com"
        ) {
          router.replace("/admin");
        }
      }).catch((error) => {
        console.log(error);
      });
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
    <AuthContext.Provider value={{ user, onSignin, onSignout, api }}>
      {contextHolder}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuth() {
  return useContext(AuthContext);
}
