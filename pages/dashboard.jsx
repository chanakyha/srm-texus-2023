import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useAuth } from "../backend/useAuth";
import { useRouter } from "next/router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../backend/firebase";
import  Edit  from "../assets/images/Edit.png";
function dashboard() {
  
  const { user } = useAuth();
  const router = useRouter();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    (async () => {
      const docSnap = await getDoc(doc(db, "students", `${user.uid}`));
      if (docSnap.exists()) {
        setUserData(docSnap.data());
      } else {
        if (!user) router.replace("/");
      }
    })();

  }, [user]);
  console.log(userData);

  return (
  <>  
    <div className="p-5 mb-4 rounded-lg flex justify-center items-center bg-black relative w-full mx-auto bg-[url('../assets/images/bgoverlay.png')] bg-contain bg-no-repeat bg-center opacity-80">
      <div className='md:w-3/4 w-full min-h-[50vh] mx-0 flex flex-col sm:flex-row justify-center items-center'>
        <div className='md:w-1/2 w-3/4 h-full flex flex-col justify-center items-center'>
          <Image src={user.photoURL} alt='Profile' width={75} height={75} className='rounded-full md:w-[150px] md:h-[150px]'/>
        </div>
        <div className='md:w-1/2 w-3/4 h-full flex flex-col justify-start md:items-start items-center'>
              <h1 className='md:text-xl text-lg font-bold text-yellow-800 text-left'>Dashboard</h1>
              <h1 className='md:text-4xl text-3xl font-bold text-white'>{userData.name}</h1>
              <h1 className='bg-slate-100 rounded-xl text-black font-bold md:text-3xl text-xl w-fit md:p-2 p-1 mt-5'>Texus ID: {userData.texusId}</h1>
            </div>
          </div>
      </div>
    <div className=" p-5 mb-4  rounded-lg  flex flex-wrap items-center justify-between bg-[#222222] sm:w-3/4 w-full mx-auto">
        <span className='text-xl font-semibold text-indigo-400'>Your Details</span>
        <Image src={Edit} alt='Edit' width={30} height={30} className='cursor-pointer'/>
        <div className='w-full flex flex-col md:flex-row  justify-center md:justify-between items-center mt-2 md:px-8 px-2'>
          <span className='lg:text-lg text-md  font-medium text-[#858585]'>Email : <span className='text-slate-200'>{userData.email}</span></span>
          <span className='lg:text-lg  text-md font-medium text-[#858585]'>Contact Number : <span className='text-slate-200'>{userData.contact}</span></span>
        </div>
        <div className='w-full flex flex-col md:flex-row  justify-center md:justify-between items-center mt-2 md:px-8 px-2'>
          <span className='lg:text-lg text-md  font-medium text-[#858585]'>College/ University : <span className='text-slate-200'>{userData.college}</span></span>
          <span className='lg:text-lg text-md  font-medium text-[#858585]'>Registration Number : <span className='text-slate-200'>{userData.registerNumber}</span></span>
        </div>
        <div className='w-full flex flex-col md:flex-row  justify-center md:justify-between items-center mt-2 md:px-8 px-2'>
          <span className='lg:text-lg text-md  font-medium text-[#858585]'>Year of Study : <span className='text-slate-200'>{userData.year}</span></span>
          <span className='lg:text-lg text-md  font-medium text-[#858585]'>Department : <span className='text-slate-200'>{userData.department}</span></span>
        </div>
      </div>
      <div className=" p-5 mb-4  rounded-lg  flex flex-wrap items-center justify-between bg-[#222222] sm:w-3/4 w-full mx-auto">
        <span className='text-xl font-semibold text-indigo-400'>Your Events? Tickets</span>
        <Image src={Edit} alt='Edit' width={25} height={25} className='cursor-pointer'/>
        {/* <div className='w-full flex flex-col md:flex-row  justify-center md:justify-between items-center mt-2 md:px-8 px-2'>
          <span className='lg:text-lg text-md  font-medium text-[#858585]'>Email : <span className='text-slate-200'>{userData.email}</span></span>
          <span className='lg:text-lg  text-md font-medium text-[#858585]'>Contact Number : <span className='text-slate-200'>{userData.contact}</span></span>
        </div>
        <div className='w-full flex flex-col md:flex-row  justify-center md:justify-between items-center mt-2 md:px-8 px-2'>
          <span className='lg:text-lg text-md  font-medium text-[#858585]'>College/ University : <span className='text-slate-200'>{userData.college}</span></span>
          <span className='lg:text-lg text-md  font-medium text-[#858585]'>Registration Number : <span className='text-slate-200'>{userData.registerNumber}</span></span>
        </div>
        <div className='w-full flex flex-col md:flex-row  justify-center md:justify-between items-center mt-2 md:px-8 px-2'>
          <span className='lg:text-lg text-md  font-medium text-[#858585]'>Year of Study : <span className='text-slate-200'>{userData.year}</span></span>
          <span className='lg:text-lg text-md  font-medium text-[#858585]'>Department : <span className='text-slate-200'>{userData.department}</span></span>
        </div> */}
      </div>
      </>

  )
}

export default dashboard