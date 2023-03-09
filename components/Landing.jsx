import React, { useEffect, useState } from "react";

const Landing = () => {
    const Timer = () => {
        const [days, setDays] = React.useState(0);
        const [hours, setHours] = React.useState(0);
        const [minutes, setMinutes] = React.useState(0);
        const [seconds, setSeconds] = React.useState(0);
      
        const deadline = "March, 15, 2023";
      
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
          <div className="flex flex-row justify-center" role="timer">
            <div className="px-2">
              <div className="border-sm">
                <p>{days < 10 ? "0" + days : days}</p>
                <span className="text">Days</span>
              </div>
            </div>
            <div className="px-2">
              <div className="border-sm">
                <p>{hours < 10 ? "0" + hours : hours}</p>
                <span className="text">Hours</span>
              </div>
            </div>
            <div className="px-2">
              <div className="border-sm">
                <p>{minutes < 10 ? "0" + minutes : minutes}</p>
                <span className="text">Minutes</span>
              </div>
            </div>
            <div className="px-2">
              <div className="border-sm">
                <p>{seconds < 10 ? "0" + seconds : seconds}</p>
                <span className="text">Seconds</span>
              </div>
            </div>
          </div>
        );
      };

    const texusArray = "TEXUS".split("");

    return (
        <>
        <section className="w-full h-screen overflow-hidden p-4 bg-black relative max-w-5xl mx-auto">
            <div className="w-full h-full bg-[url('../assets/images/Infinitywhite.png')] bg-contain bg-no-repeat bg-center  flex justify-center items-center">
              <video className='w-[3000px] mix-blend-multiply h-full' autoplay={"autoplay"} muted loop>
                    <source src={"https://res.cloudinary.com/dwncfhjpd/video/upload/v1678348481/samples/bgvideo_aewv6w.mp4"} type="video/mp4"/>
                </video>
            </div>
            <div className="absolute top-0 right-0 w-full h-full flex justify-evenly items-center">
                {texusArray.map((item, index) => (
                    <span key={index} className="text-white font-[Sniglet] text-2xl md:text-4xl lg:text-6xl text-center textSpan">{item}</span>
                ))}
            <h1 className="absolute bottom-60 md:bottom-40 font-montserrat flex justify-center w-full text-white text-center text-lg lg:text-2xl uppercase">Coming Soon!</h1>
            <div className="absolute bottom-40 md:bottom-20 font-montserrat flex justify-center w-full text-white text-center text-lg lg:text-2xl"><Timer/></div>
            </div>
        </section>
        </>
    )
}

export default Landing;