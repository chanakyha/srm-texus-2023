import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import { db } from "../backend/firebase";
import { doc, getDoc, collection, getCountFromServer, } from "firebase/firestore";
import Github from "../assets/images/sponsors/github.png";
import Aavin from "../assets/images/sponsors/aavin.png"
import canara from "../assets/images/sponsors/canara.png"
import icici from "../assets/images/sponsors/icici.png"
import mcd from "../assets/images/sponsors/mcd.png"

const Sponsors = () => {
    const [sponsorCount, setSponsorCount] = useState(0);

    const getSponsorCount = async () => {
        
        const NoOfSponsors = await getCountFromServer(collection(db, "sponsors"));
        setSponsorCount(NoOfSponsors.data().count);
        
    };
    // var sponsorId = `TxSP${23000 + sponsorCount + 1}`;
    console.log(sponsorCount);
    const getSponsors = async () => {
        let details = [];
        for (let i = 0; i <  sponsorCount; i++) {
            var sponsorId = `TxSP${23000 + i + 1}`;
            console.log(sponsorId);
            const docRef = doc(db, "sponsors", sponsorId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
            } else {
                console.log("No such document!");
            }
        }
        }
    useEffect(() => {
        getSponsorCount();
    }, [sponsorCount])
    return (
        <section id="sponsors" className="font-montserrat w-full bg-[url('https://res.cloudinary.com/dwncfhjpd/image/upload/v1678565057/texus/bgoverlay_cvgli3.png')] bg-contain bg-no-repeat bg-center h-fit">
            <div className="mb-12">
                <h1 className="h-20 text-white font-normal text-2xl md:text-4xl lg:text-5xl text-center" onClick={getSponsors}>Sponsors</h1>
            </div>
            <div className="relative flex gap-4 text-white overflow-x-hidden">
                <div className="py-6 -ml-4 flex justify-center items-center gap-4 lg:gap-16 animate-marquee whitespace-nowrap">
                    <div className="w-fit flex justify-center items-center h-fit">
                        <Image width={300} height={300} src={Github} />
                    </div>
                    <div className="w-fit flex justify-center items-center h-fit">
                        <Image width={300} height={300} src={Aavin} />
                    </div>
                    <div className="w-fit flex justify-center items-center h-fit">
                        <Image width={300} height={300} src={canara} />
                    </div>
                    <div className="w-fit flex justify-center items-center h-fit">
                        <Image width={300} height={300} src={icici} />
                    </div>
                    <div className="w-fit flex justify-center items-center h-fit">
                        <Image width={300} height={300} src={mcd} />
                    </div>
                </div>
                <div className="absolute top-0 py-6 flex justify-center items-center gap-4 lg:gap-16 animate-marquee2 whitespace-nowrap">
                    <div className="w-fit flex justify-center items-center h-fit">
                        <Image width={300} height={300} src={Github} />
                    </div>
                    <div className="w-fit flex justify-center items-center h-fit">
                        <Image width={300} height={300} src={Aavin} />
                    </div>
                    <div className="w-fit flex justify-center items-center h-fit">
                        <Image width={300} height={300} src={canara} />
                    </div>
                    <div className="w-fit flex justify-center items-center h-fit">
                        <Image width={300} height={300} src={icici} />
                    </div>
                    <div className="w-fit flex justify-center items-center h-fit">
                        <Image width={300} height={300} src={mcd} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sponsors