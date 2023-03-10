import React, { useEffect, useState } from "react";
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

  

  const [values, setValues] = useState({
    name: '',
    college: '',
    registerNumber: '',
    year: '',
    department: '',
    email: '',
    contact: '',
  });
  const [invalidPhoneNo, setInvalidPhoneNo] = useState(false);

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

  useEffect(() => {
    setInvalidPhoneNo(false);
  },[values.contact])

  // const sampleData = {
  //   name: "Chanakyha",
  //   college: "SRM Institute of Science and Technology",
  //   registerNumber: "RA2111026020004",
  //   year: "2",
  //   department: "CSE",
  //   email: user.email,
  //   contact: "7550148119",
  //   texusId: `TX${10000 - (totalCount + 1)}`,
  // };
  var newUser ={
    name: values.name,
    college: values.college,
    registerNumber: values.registerNumber,
    year: values.year,
    department: values.department,
    email: user.email,
    contact: values.contact,
    texusId: `TX${10000 - (totalCount + 1)}`,
  }

  const addNewUserData = async () => {
    setDoc(doc(db, "students", user.uid), newUser, { merge: true })
      .then(() => {
        console.log("User data added successfully");
        router.replace("/dashboard");
      })
      .catch(console.warn);
  };

  return (
    // <div className="w-screen min-h-screen flex flex-col justify-center items-center">
    //   <code className="w-2/3">{JSON.stringify(sampleData, null, 3)}</code>
    //   <button
    //     onClick={addNewUserData}
    //     className="px-4 py-2 rounded-lg bg-red-500 font-bold"
    //   >
    //     Register
    //   </button>
    // </div>
    <section className="w-full h-full bg-black py-[110px] font-montserrat text-white p-4 md:p-16">
        <div className='mx-auto max-w-2xl'>
            <h1 className="text-3xl my-8 ">REGISTRATION</h1>
        </div>
        <div className='w-full max-w-2xl h-full mx-auto text-white border border-FFFFFF-500 p-[30px] rounded-xl'>
            {/* <form> */}
                <input 
                className="bg-black w-full max-w-2xl border border-FFFFFF-500 my-2 h-14 pl-[15px] rounded-md placeholder-white" 
                type="text" 
                placeholder="Name" 
                // id="name"
                // name="name"
                onChange={handleChange('name')}
                value={values.name}
                />
                <br></br>
                <input 
                className="bg-black w-full max-w-2xl border border-FFFFFF-500 my-2 h-14 pl-[15px] rounded-md placeholder-white" 
                type="text" 
                placeholder="College / University Name" 
                // id="clgName" 
                // name="clgName"
                onChange={handleChange('college')}
                value={values.college}
                />
                <br></br>
                <input 
                className="bg-black w-full max-w-2xl border border-FFFFFF-500 my-2 h-14 pl-[15px] rounded-md placeholder-white" 
                type="text" 
                placeholder="Register Number" 
                // id="regNumber" 
                // name="regNumber"
                onChange={handleChange('registerNumber')}
                value={values.registerNumber}
                />
                <br></br>
                <div className="grid lg:grid-cols-2 gap-3" >
                        <select 
                        className="bg-black w-full max-w-2xl border border-FFFFFF-500 my-2 h-14 pl-[15px] pr-[30px] rounded-md" 
                        // name="year" 
                        // id="year"
                        onChange={handleChange('year')}
                        value={values.year}
                        >
                            <option value="">Year of Study</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4"> 4</option>
                            <option value="5+">5+</option>
                        </select>
                     <input className="bg-black w-full max-w-2xl border border-FFFFFF-500 my-2 h-14 pl-[15px] rounded-md placeholder-white" 
                     type="text" 
                     placeholder="Department" 
                    //  id="department" 
                    //  name="department"
                     onChange={handleChange('department')}
                     value={values.department}
                     />
                </div>
                <div className="grid lg:grid-cols-2 gap-3" >
                    <input className="bg-black w-full max-w-2xl border border-FFFFFF-500 my-2 h-14 pl-[15px] rounded-md placeholder-white" type="email" value={user.email} disabled/>
                    <input 
                    className="bg-black w-full max-w-2xl border border-FFFFFF-500 my-2 h-14 pl-[15px] rounded-md placeholder-white" 
                    type="tel" 
                    placeholder="Phone Number" 
                    // id="phnNum" 
                    // name="phnNum"
                    onChange={handleChange('contact')}
                    value={values.contact}
                    />
                </div>
                <button className="bg-gradient-to-r from-[#FFEA2C] via-[#FF7A5D] to-[#FF0000] w-full max-w-2xl border border-FFFFFF-500 my-2 h-14 pl-[15px] text-black font-bold rounded-md " onClick={addNewUserData}>Register</button>
            {/* </form> */}
        </div>
    </section>
  );
};

export default Register;
