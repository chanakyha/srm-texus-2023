import React from "react";
import Link from "next/link";
import Instagram from "../assets/images/Instagram.png";
import SRMlogo from "../assets/images/SRMlogo.png";
import Image from "next/image";

function Footer() {
  const contents = ["EVENTS", "ABOUT", "SCHEDULE", "SPONSORS", "CONTACT"];
  return (
    <footer className="flex flex-col justify-center py-5 px-15  bg-black z-50 text-white ">
      <div className="bg-[url('../assets/images/footer.png')] bg-left-top bg-cover bg-no-repeat ">
        <div className="flex justify-center">
          <Link href="#" className="tracking-[1rem] text-xl font-sniglet p-2">
            TEXUS
          </Link>
        </div>
        <div className="flex md:flex-row flex-col justify-center md:space-x-10 items-center p-2">
          {contents.map((content, key) => {
            return (
              <p key={key} className="tracking-wide text-xl font-sniglet">
                {content}
              </p>
            );
          })}
        </div>
        <div className="flex justify-center p-2">
          <Image src={Instagram} alt="instagram" width={24} height={24} />
          <Link href="https://www.instagram.com/texus_2k23">@texus_2k23</Link>
        </div>
        <div className="flex justify-center p-2">
          <Image src={SRMlogo} alt="logo" width={100} height={50} />
        </div>
        <hr className="border-slate-800 sm:mx-auto " />
        <div className="flex justify-center p-2">
          <span>Crafted with &hearts; by Tech Team</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// bg-gradient-to-r from-[#FFEA2C] via-[#179EBB] to-black
