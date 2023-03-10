import React from "react";

const Landing = () => {

    const texusArray = "TEXUS".split("");

    return (
        <section className="w-full animate-maxWidth relative h-96 md:min-h-screen overflow-clip p-4 bg-black mx-auto">
        <div className="bg-contain animate-none lg:animate-infinityAnimation w-full h-full bg-[url('../assets/images/InfinityWhite.png')] bg-no-repeat bg-center flex justify-center items-center">
            <video className='w-[3000px] mix-blend-multiply h-full bg-black' autoplay={"autoplay"} muted loop>
                <source src={"https://res.cloudinary.com/dwncfhjpd/video/upload/v1678348481/samples/bgvideo_aewv6w.mp4"} type="video/mp4"/>
            </video>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full flex justify-evenly items-center max-w-3xl md:max-w-5xl mx-auto">
            {texusArray.map((item, index) => (
                <span key={index} className="text-white font-[Sniglet] text-2xl md:text-4xl lg:text-6xl text-center textSpan">{item}</span>
            ))}
        <h1 className="absolute textSpan2 bottom-10 md:bottom-28 lg:bottom-32 font-sniglet flex justify-center w-full text-white text-center text-lg lg:text-2xl">21 & 22 APRIL 2023</h1>
        </div>
    </section>
    )
}

export default Landing;
