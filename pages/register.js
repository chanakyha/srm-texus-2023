import React, { useEffect, useState } from "react";
import { useAuth } from "../backend/useAuth";
import {
  setDoc,
  doc,
  collection,
  getCountFromServer,
} from "firebase/firestore";
import { db } from "../backend/firebase";
import { useRouter } from "next/router";

const Register = () => {
  const { user } = useAuth();
  const router = useRouter();

  const [totalCount, setTotalCount] = useState(0);

  const getTotalDocs = async () => {
    const userCollectionSnapshot = await getCountFromServer(
      collection(db, "students")
    );
    setTotalCount(userCollectionSnapshot.data().count);
  };

  useEffect(() => {
    if (!user) router.replace("/");
  }, [user]);

  const sampleData = {
    name: "Chanakyha",
    college: "SRM Institute of Science and Technology",
    registerNumber: "RA2111026020004",
    year: "2",
    department: "CSE",
    email: user.email,
    contact: "7550148119",
    texusId: `TX${10000 - (totalCount + 1)}`,
  };

  const addNewUserData = async () => {
    setDoc(doc(db, "students", user.uid), sampleData, { merge: true })
      .then(() => {
        console.log("User data added successfully");
      })
      .catch(console.warn);
  };

  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center">
      <code className="w-2/3">{JSON.stringify(sampleData, null, 3)}</code>
      <button
        onClick={addNewUserData}
        className="px-4 py-2 rounded-lg bg-red-500 font-bold"
      >
        Register
      </button>
    </div>
  );
};

export default Register;
