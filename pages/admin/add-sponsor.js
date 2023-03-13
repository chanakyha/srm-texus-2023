import React, { useEffect, useRef, useState } from 'react';
import {
  setDoc,
  doc,
  collection,
  getCountFromServer,
} from "firebase/firestore";
import { db } from "../../backend/firebase";

function AddSponsor() {
  const [sponsorCount, setSponsorCount] = useState(0);

  const getSponsorCount = async () => {
    const NoOfSponsors = await getCountFromServer(collection(db, "sponsors"));
    setSponsorCount(NoOfSponsors.data().count);
  };

  var sponsorId = `TxSP${23000 + sponsorCount + 1}`;
  const formRef = useRef(null);

  const AddSponsor = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const sponsorName = form[0].value;
    const sponsorLogo = form[1].value;
    const sponsorLink = form[2].value;
    const sponsorDescription = form[3].value;
    const sponsorType = form[4].value;

    const sponsor = {
      sponsorId,
      sponsorName,
      sponsorLogo,
      sponsorLink,
      sponsorDescription,
      sponsorType,
    };
    setDoc(doc(db, "sponsors", sponsorId), sponsor, { merge: true }).then(() => {
      alert("Sponsor Added Successfully");
      formRef.current.reset();
    });
  }


  useEffect(() => {
    getSponsorCount();
  }, [sponsorCount]);

  return (
    <div className="min-h-[calc(100vh-330px)]">
      <form
        ref={formRef}
        onSubmit={(e) => AddSponsor(e)}
        className="w-full h-full bg-black font-montserrat text-white "
      >
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl text-center">ADD SPONSORS</h1> 
        </div>
        <div className="w-full max-w-2xl h-full mt-4 gap-4 flex flex-col mx-auto text-white py-0 p-[30px] rounded-xl">
          <input
            className="w-full max-w-2xl p-3 rounded-md placeholder-[#858585] bg-[#222222] focus:outline-none focus:ring-2 focus:ring-[#858585] focus:ring-opacity-50 focus:placeholder-slate-300 focus:border-transparent"
            type="text"
            placeholder="Sponsor Name"
          />
            <input
              className=" w-full p-3 max-w-2xl rounded-md placeholder-[#858585] bg-[#222222] focus:outline-none focus:ring-2 focus:ring-[#858585] focus:ring-opacity-50 focus:placeholder-slate-300 focus:border-transparent"
              type="text"
              placeholder="Logo URL"
            />
          <input
            className=" w-full p-3 max-w-2xl rounded-md placeholder-[#858585] bg-[#222222] focus:outline-none focus:ring-2 focus:ring-[#858585] focus:ring-opacity-50 focus:placeholder-slate-300 focus:border-transparent"
            type="text"
            placeholder="Sponsor Link"
          />
          <input
            className=" w-full p-3 max-w-2xl rounded-md placeholder-[#858585] bg-[#222222] focus:outline-none focus:ring-2 focus:ring-[#858585] focus:ring-opacity-50 focus:placeholder-slate-300 focus:border-transparent"
            type="text"
            placeholder="Sponsor Description"
          />
          <select className=" w-full p-3 max-w-2xl rounded-md placeholder-[#858585] bg-[#222222] focus:outline-none focus:ring-2 focus:ring-[#858585] focus:ring-opacity-50 focus:placeholder-slate-300 focus:border-transparent">
            <option hidden value="">
              Select Sponsor Type
            </option>
            <option value="Diamond">Diamond</option>
            <option value="Gold">Gold</option>
            <option value="Sliver">Sliver</option>
            <option value="Bronze">Bronze</option>
            <option value="OldSponsor">Old Sponsor</option>
          </select>
          <button className="bg-gradient-to-r from-[#FFEA2C] via-[#FF7A5D] to-[#FF0000] w-full max-w-2xl outline-none border-transparent my-2 h-14 pl-[15px] text-black font-bold rounded-md ">
            Add Sponsor
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddSponsor