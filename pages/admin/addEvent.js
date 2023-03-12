import { setDoc, doc, collection } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "../../backend/firebase";

const AddEvent = () => {
  const [eventCount, setEventCount] = useState(0);
  const getEventCount = async () => {};
  const formRef = useRef(null);

  const addEvent = async (e) => {
    e.preventDefault();

    console.log(formRef.current);
  };

  return (
    <div className="min-h-[calc(100vh-330px)]">
      <form
        // ref={useRef}
        // onSubmit={(e) => addEvent(e)}
        className="w-full h-full bg-black font-montserrat text-white "
      >
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl text-center">REGISTRATION</h1>
        </div>
        <div className="w-full max-w-2xl h-full mx-auto text-white py-0 p-[30px] rounded-xl">
          <input
            className=" w-full max-w-2xl my-2 h-14 pl-[15px] rounded-md placeholder-[#858585] bg-[#222222] focus:outline-none focus:ring-2 focus:ring-[#858585] focus:ring-opacity-50 focus:placeholder-slate-300 focus:border-transparent"
            type="text"
            placeholder="Name"
          />
          <input
            className=" w-full max-w-2xl my-2 h-14 pl-[15px] rounded-md placeholder-[#858585] bg-[#222222] focus:outline-none focus:ring-2 focus:ring-[#858585] focus:ring-opacity-50 focus:placeholder-slate-300 focus:border-transparent"
            type="text"
            placeholder="College / University Name"
          />
          <input
            className=" w-full max-w-2xl  my-2 h-14 pl-[15px] rounded-md placeholder-[#858585] bg-[#222222] focus:outline-none focus:ring-2 focus:ring-[#858585] focus:ring-opacity-50 focus:placeholder-slate-300 focus:border-transparent"
            type="text"
            placeholder="Register Number"
          />
          <div className="grid lg:grid-cols-2 gap-3">
            <select className="w-full max-w-2xl my-2 h-14 pl-[15px] pr-[30px] rounded-md placeholder-[#858585] bg-[#222222] focus:outline-none focus:ring-2 focus:ring-[#858585] focus:ring-opacity-50 focus:placeholder-slate-300 focus:border-transparent">
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
              placeholder="Department"
            />
          </div>
          <div className="grid lg:grid-cols-2 gap-3">
            <input
              className=" w-full max-w-2xl  my-2 h-14 pl-[15px] rounded-md placeholder-[#858585] bg-[#222222] outline-none"
              type="email"
              disabled
            />
            <input
              className=" w-full max-w-2xl  my-2 h-14 pl-[15px] rounded-md bg-[#222222] placeholder-[#858585] focus:outline-none focus:ring-2 focus:ring-[#858585] focus:ring-opacity-50 focus:placeholder-slate-300 focus:border-transparent"
              type="tel"
              placeholder="Contact Number"
            />
          </div>
          <button className="bg-gradient-to-r from-[#FFEA2C] via-[#FF7A5D] to-[#FF0000] w-full max-w-2xl outline-none border-transparent my-2 h-14 pl-[15px] text-black font-bold rounded-md ">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
