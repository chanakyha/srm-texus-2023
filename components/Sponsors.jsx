import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import { db } from "../backend/firebase";
import { doc, getDoc, collection, getCountFromServer, } from "firebase/firestore";

const Sponsors = () => {
    const [sponsorLogoList, setSponsorLogoList] = useState([]);
    const [sponsorCount, setSponsorCount] = useState(0);

    const getSponsorCount = async () => {
        
        const NoOfSponsors = await getCountFromServer(collection(db, "sponsors"));
        setSponsorCount(NoOfSponsors.data().count);
        
    };
    const getSponsors = async () => {
        let logoList = [];
        for (let i = 0; i <  sponsorCount; i++) {
            var sponsorId = `TxSP${23000 + i + 1}`;
            const docRef = doc(db, "sponsors", sponsorId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                logoList.push(docSnap.data().sponsorLogo);
            } else {
                console.log("No such document!");
            }
        }
        setSponsorLogoList(logoList);
    }

    useEffect(() => {
        getSponsorCount();
    }, [sponsorCount])
    useEffect(() => {
        getSponsors();
    }, [sponsorLogoList])
    return (
        <section id="sponsors" className="font-montserrat w-full bg-[url('https://res.cloudinary.com/dwncfhjpd/image/upload/v1678565057/texus/bgoverlay_cvgli3.png')] bg-contain bg-no-repeat bg-center h-fit">
            <div className="mb-12">
                <h1 className="h-20 text-white font-normal text-2xl md:text-4xl lg:text-5xl text-center">Sponsors</h1>
            </div>
            <div className="relative flex gap-4 text-white overflow-x-hidden">
                <div className="py-6 -ml-4 flex justify-center items-center gap-4 lg:gap-16 animate-marquee whitespace-nowrap">
                    <div className="w-fit flex justify-center items-center h-fit">
                        {sponsorLogoList.map((logo, key) => {
                            return (
                                <div key={key} className="w-fit flex justify-center items-center h-fit p-5">
                                    <Image width={300} height={300} src={logo} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="absolute top-0 py-6 flex justify-center items-center gap-4 lg:gap-16 animate-marquee2 whitespace-nowrap">
                    <div className="w-fit flex justify-center items-center h-fit">
                    {sponsorLogoList.map((logo, key) => {
                            return (
                                <div key={key} className="w-fit flex justify-center items-center h-fit p-5">
                                    <Image width={300} height={300} src={logo} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sponsors