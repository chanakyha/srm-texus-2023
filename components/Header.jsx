import { Drawer } from "antd";
import { useRouter } from "next/router";
import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../backend/useAuth";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const router = useRouter();
  const navRef = useRef(null);

  const { user, onSignin, onSignout } = useAuth();

  const contents = ["events", "about", "schedule", "sponsors", "contact"];

  useEffect(() => {
    const timeout = setTimeout(() => {
      navRef.current.classList.toggle("opacity-0");
    }, 8500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <nav
      className="fixed w-full z-[999] top-0 opacity-0 transistion-all duration-300 border-b border-slate-200/20"
      ref={navRef}
    >
      <Drawer
        title={user ? user.displayName : "Contents"}
        style={{
          fontFamily: "Montserrat",
        }}
        extra={
          <>
            <div>
              {user ? (
                <button
                  onClick={onSignout}
                  className="navButton bg-gradient-to-r font-montserrat text-black from-[#FFEA2C] to-[#179EBB] px-4 py-2 active:scale-75 ease-out duration-100 rounded-lg font-semibold to-[#FF0000]"
                >
                  View Dashboard
                </button>
              ) : (
                <button
                  onClick={onSignin}
                  className="navButton bg-gradient-to-r font-montserrat text-black from-[#FFEA2C] to-[#179EBB] px-4 py-2 active:scale-75 ease-out duration-100 rounded-lg font-semibold to-[#FF0000]"
                >
                  Login
                </button>
              )}
            </div>
          </>
        }
        closeIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        }
        placement="right"
        size={378}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        footer={
          <div>
            <p className="text-center text-gray-400">????? TEXUS</p>
          </div>
        }
      >
        <div className="space-y-5">
          {contents.map((content, key) => {
            return (
              <p
                key={key}
                className="navButton capitalize"
                onClick={() => {
                  router.push(
                    `/${content === "sponsors" ? "#sponsors" : `${content}`}`
                  );
                  setOpenDrawer(!openDrawer);
                }}
              >
                {content}
              </p>
            );
          })}
        </div>
      </Drawer>
      <div className="flex bg-white justify-between duration-1000 transition-all ease-out py-5 px-10 items-center dark:bg-black">
        <h1
          onClick={() => router.push("/")}
          className="navButton font-sniglet tracking-[1rem] text-xl"
        >
          TEXUS
        </h1>

        <div className="space-x-10 items-center hidden lg:inline-flex">
          {contents.map((content, key) => {
            return (
              <p
                onClick={() =>
                  router.push(
                    `/${
                      content === "sponsors"
                        ? "#sponsors"
                        : `${content === "events" ? "#events" : `${content}`}`
                    }`
                  )
                }
                key={key}
                className="navButton font-montserrat"
              >
                {content}
              </p>
            );
          })}
          {user ? (
            <button
              onClick={onSignout}
              className="navButton bg-gradient-to-r font-montserrat text-black from-[#FFEA2C] to-[#179EBB] px-4 py-2 active:scale-75 ease-out duration-100 rounded-lg font-semibold to-[#FF0000]"
            >
              View Dashboard
            </button>
          ) : (
            <button
              onClick={onSignin}
              className="navButton bg-gradient-to-r font-montserrat text-black from-[#FFEA2C] to-[#179EBB] px-4 py-2 active:scale-75 ease-out duration-100 rounded-lg font-semibold to-[#FF0000]"
            >
              Login
            </button>
          )}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 lg:hidden navButton"
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Header;
