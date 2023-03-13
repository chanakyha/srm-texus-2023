import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../backend/useAuth";

function Admin() {
  const { user, onSignin, onSignout } = useAuth();
  const router = useRouter();
  return (
    <div className="min-h-[calc(100vh-330px)] mx-auto w-3/4 flex flex-col justify-evenly items-center bg-[#222222] rounded-lg">
      <h1 className="text-white text-4xl font-bold">ADMIN</h1>
      <div className="flex flex-col md:flex-row justify-evenly w-2/3 items-stretch gap-4 md:w-full">
        {user ? (
          <>
        <button
          onClick={() => router.push("/admin/add-event")}
          className="button"
        >
          Add Events
        </button>
        <button className="button">View Registrations</button>
        <button className="button" onClick={onSignout}>Log out</button>
        </>
        ) : 
        (<button onClick={onSignin} className="button">Login</button>)}
      </div>
    </div>
  );
}

export default Admin;
