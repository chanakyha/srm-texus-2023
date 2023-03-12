import React from "react";

function Admin() {
  return (
    <div className="min-h-[calc(100vh-330px)] mx-auto w-3/4 flex flex-col justify-evenly items-center bg-[#222222] rounded-lg">
      <h1 className="text-white text-4xl font-bold">ADMIN</h1>
      <div className="flex flex-col md:flex-row justify-evenly w-2/3 items-stretch gap-4 md:w-full">
        <button className="button">Add Events</button>
        <button className="button">View Registrations</button>
        <button className="button">Log out</button>
      </div>
    </div>
  );
}

export default Admin;
