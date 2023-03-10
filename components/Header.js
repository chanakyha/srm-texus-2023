import { Drawer } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const router = useRouter();

  const contents = ["events", "about", "schedule", "sponsors", "contact"];

  return (
    <div className="fixed w-full z-[999] top-0">
      <div className="flex bg-white justify-center duration-1000 transition-all ease-out py-5 px-10 items-center dark:bg-black">
        <h1
          onClick={() => router.replace("/")}
          className="navButton tracking-[1rem] text-xs text-center md:text-lg"
        >
          SRMIST RAMAPURAM 
        </h1>
      </div>
    </div>
  );
};

export default Header;
