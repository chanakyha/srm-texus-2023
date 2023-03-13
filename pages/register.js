import React, { useEffect, useState, useRef } from "react";
import { useAuth } from "../backend/useAuth";
import {
  setDoc,
  doc,
  collection,
  getCountFromServer,
  getDoc,
} from "firebase/firestore";
import { db } from "../backend/firebase";
import { useRouter } from "next/router";

const Register = () => {
  const { api } = useAuth();
  const FormVaildToast = (type) => {
    api[type]({
      message: "Error",
      description: "Please fill all the fields and check the contact number",
    });
  };
  const RegSuccessToast = (type) => {
    api[type]({
      message: "Registred Successfully",
      description: "You will be redirected to the dashboard",
    });
  };
  const Name = useRef(null);
  const College = useRef(null);
  const RegisterNumber = useRef(null);
  const Year = useRef(null);
  const Department = useRef(null);
  const Contact = useRef(null);
  const [values, setValues] = useState({
    name: "",
    college: "",
    registerNumber: "",
    year: "",
    department: "",
    email: "",
    contact: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
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
    (async () => {
      const docSnap = await getDoc(doc(db, "students", `${user.uid}`));
      docSnap?.data()?.texusId ? router.replace("/") : null;
    })();

    if (!user) router.replace("/");
  }, [user]);

  useEffect(() => {
    getTotalDocs();
  }, []);

  var newUser = {
    name: Name.current?.value,
    college: College.current?.value,
    registerNumber: RegisterNumber.current?.value,
    year: Year.current?.value,
    department: Department.current?.value,
    email: user.email,
    contact: Contact.current?.value,
    texusId: `TX${100000 - totalCount}`,
  };

  const addNewUserData = async () => {
    if (
      !values.name ||
      !values.college ||
      !values.registerNumber ||
      !values.year ||
      !values.department ||
      !values.contact ||
      values.contact.length !== 10
    ) {
      FormVaildToast("error");
    } else {
      console.log(newUser);
      setDoc(doc(db, "students", user.uid), newUser, { merge: true })
        .then(() => {
          RegSuccessToast("success");
          console.log("User data added successfully");
          router.replace("/dashboard");
        })
        .catch(console.warn);
    }
  };

  return (
    <>
      <section className="w-full h-full bg-black py-[110px] font-montserrat text-white p-4 md:p-16">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl my-8 ">REGISTRATION</h1>
        </div>
        <div className="w-full max-w-2xl h-full mx-auto text-white  p-[30px] rounded-xl">
          <input
            className=" w-full max-w-2xl my-2 h-14 pl-[15px] rounded-md placeholder-[#858585] bg-[#222222] focus:outline-none focus:ring-2 focus:ring-[#858585] focus:ring-opacity-50 focus:placeholder-slate-300 focus:border-transparent"
            type="text"
            ref={Name}
            placeholder="Name"
            onChange={handleChange("name")}
          />
          <input
            className=" w-full max-w-2xl my-2 h-14 pl-[15px] rounded-md placeholder-[#858585] bg-[#222222] focus:outline-none focus:ring-2 focus:ring-[#858585] focus:ring-opacity-50 focus:placeholder-slate-300 focus:border-transparent"
            type="text"
            ref={College}
            placeholder="College / University Name"
            onChange={handleChange("college")}
          />
          <input
            className=" w-full max-w-2xl  my-2 h-14 pl-[15px] rounded-md placeholder-[#858585] bg-[#222222] focus:outline-none focus:ring-2 focus:ring-[#858585] focus:ring-opacity-50 focus:placeholder-slate-300 focus:border-transparent"
            type="text"
            ref={RegisterNumber}
            placeholder="Register Number"
            onChange={handleChange("registerNumber")}
          />
          <div className="grid lg:grid-cols-2 gap-3">
            <select
              className="w-full max-w-2xl my-2 h-14 pl-[15px] pr-[30px] rounded-md placeholder-[#858585] bg-[#222222] focus:outline-none focus:ring-2 focus:ring-[#858585] focus:ring-opacity-50 focus:placeholder-slate-300 focus:border-transparent"
              onChange={handleChange("year")}
              ref={Year}
            >
              <option hidden className="text-[#858585] bg-white">
                Year of Study
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4"> 4</option>
              <option value="5+">5+</option>
            </select>
            <input
              className=" w-full max-w-2xl  my-2 h-14 pl-[15px] rounded-md placeholder-[#858585] bg-[#222222] focus:outline-none focus:ring-2 focus:ring-[#858585] focus:ring-opacity-50 focus:placeholder-slate-300 focus:border-transparent"
              type="text"
              ref={Department}
              placeholder="Department"
              onChange={handleChange("department")}
            />
          </div>
          <div className="grid lg:grid-cols-2 gap-3">
            <input
              className=" w-full max-w-2xl  my-2 h-14 pl-[15px] rounded-md placeholder-[#858585] bg-[#222222] outline-none"
              type="email"
              value={user.email}
              disabled
            />
            <input
              className=" w-full max-w-2xl  my-2 h-14 pl-[15px] rounded-md bg-[#222222] placeholder-[#858585] focus:outline-none focus:ring-2 focus:ring-[#858585] focus:ring-opacity-50 focus:placeholder-slate-300 focus:border-transparent"
              type="tel"
              ref={Contact}
              placeholder="Contact Number"
              onChange={handleChange("contact")}
            />
          </div>
          <button
            className="bg-gradient-to-r from-[#FFEA2C] via-[#FF7A5D] to-[#FF0000] w-full max-w-2xl outline-none border-transparent my-2 h-14 pl-[15px] text-black font-bold rounded-md "
            onClick={addNewUserData}
          >
            Register
          </button>
        </div>
      </section>
    </>
  );
};

export default Register;
