import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useAuth } from "../backend/useAuth";
import { useRouter } from "next/router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../backend/firebase";
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
    <div className="p-5 mb-4 border rounded-lg border-gray-700 flex justify-center items-center bg-black relative w-full mx-auto bg-[url('../assets/images/bgoverlay.png')] bg-contain bg-no-repeat bg-center opacity-80">
      <div className='w-3/4 min-h-[50vh] mx-0 flex flex-col md:flex-row justify-center items-center'>
        <div className='w-1/2 h-full flex flex-col justify-center items-center'>
          <Image src={user.photoURL} alt='Profile' width={150} height={150} className='rounded-full'/>
        </div>
        <div className='w-1/2 h-full flex flex-col justify-start'>
              <h1 className='text-xl font-bold text-yellow-800 text-left'>Dashboard</h1>
              <h1 className='text-4xl font-bold text-white'>{userData.name}</h1>
              <h1 className='bg-slate-100 rounded-xl text-black font-bold text-3xl w-fit p-2 mt-5'>Texus ID: {userData.texusId}</h1>
            </div>
          </div>
      </div>
    <div className="p-5 mb-4 border rounded-lg border-gray-700 flex justify-center items-center bg-black w-3/4 mx-auto bg-[url('../assets/images/bgoverlay.png')] bg-contain bg-no-repeat bg-center opacity-80">
      <div className='flex flex-wrap items-center justify-between max-w-5xl mx-auto'>
        <span className='text-2xl font-semibold text-white'>Your Details</span>
        <p>

        </p>
        <span className='text-lg font-medium text-white underline'>Edit</span>
      </div>
    </div>
  </>

  )
}

export default dashboard