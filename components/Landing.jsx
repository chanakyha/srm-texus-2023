import React, { useEffect, useState } from "react";

const Landing = () => {
    const Timer = () => {
        const [days, setDays] = React.useState(0);
        const [hours, setHours] = React.useState(0);
        const [minutes, setMinutes] = React.useState(0);
        const [seconds, setSeconds] = React.useState(0);
      
        const deadline = "April, 21, 2023";
      
        const getTime = () => {
          const time = Date.parse(deadline) - Date.now();    
      
          setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
          setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
          setMinutes(Math.floor((time / 1000 / 60) % 60));
          setSeconds(Math.floor((time / 1000) % 60));
        };
      
        useEffect(() => {
          const interval = setInterval(() => getTime(deadline), 1000);
      
          return () => clearInterval(interval);
        }, []);
      
        return (
          <div className="flex flex-row gap-4 justify-center items-center p-4" role="timer">
            <div className="flex flex-col md:w-24 justify-center items-center">
              <div className="border-2 w-16 flex justify-center items-center h-16 text-xs md:text-sm lg:text-lg font-bold border-slate-400/50 rounded-md">
                <p className="animate-pulse">{days < 10 ? "0" + days : days}</p>
              </div>
                <span className="lg:text-lg mt-2 text-sm">Days</span>
            </div>
            <div className="flex flex-col md:w-24 justify-center items-center">
              <div className="border-2 w-16 flex justify-center items-center h-16 text-xs md:text-sm lg:text-lg font-bold border-slate-400/50 rounded-md">
                <p className="animate-pulse">{hours < 10 ? "0" + hours : hours}</p>
              </div>
                <span className="lg:text-lg mt-2 text-sm">Hours</span>
            </div>
            <div className="flex flex-col md:w-24 justify-center items-center">
              <div className="border-2 w-16 flex justify-center items-center h-16 text-xs md:text-sm lg:text-lg font-bold border-slate-400/50 rounded-md">
                <p className="animate-pulse">{minutes < 10 ? "0" + minutes : minutes}</p>
              </div>
                <span className="lg:text-lg mt-2 text-sm">Minutes</span>
            </div>
            <div className="flex flex-col md:w-24 justify-center items-center">
              <div className="border-2 w-16 flex justify-center items-center h-16 text-xs md:text-sm lg:text-lg font-bold border-slate-400/50 rounded-md">
                <p className="animate-pulse">{seconds < 10 ? "0" + seconds : seconds}</p>
              </div>
                <span className="lg:text-lg mt-2 text-sm">Seconds</span>
            </div>
          </div>
        );
      };

    const texusArray = "TEXUS".split("");

    return (
        <>
        <section className="w-full h-screen overflow-hidden p-4 bg-black relative max-w-5xl mx-auto">
            <div className="w-full h-full bg-[url('https://i.ibb.co/xXzVsWm/Infinitywhite.png')] bg-contain bg-no-repeat bg-center  flex justify-center items-center">
              <video className='w-[3000px] mix-blend-multiply h-full' autoplay={"autoplay"} muted loop>
                    <source src={"https://res.cloudinary.com/dwncfhjpd/video/upload/v1678348481/samples/bgvideo_aewv6w.mp4"} type="video/mp4"/>
                </video>
            </div>
            <div className="absolute top-0 right-0 w-full h-full flex justify-evenly items-center">
                {texusArray.map((item, index) => (
                    <span key={index} className="text-white font-[Sniglet] text-2xl md:text-4xl lg:text-6xl text-center textSpan">{item}</span>
                ))}
            <div className="absolute bottom-40 md:bottom-20 lg:bottom-10 font-montserrat flex justify-center w-full text-white text-center text-lg lg:text-2xl mt-10"><Timer/></div>
            </div>
        </section>
        </>
    )
}

export default Landing;