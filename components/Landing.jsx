import React from "react";

const Landing = () => {
  const texusArray = "TEXUS".split("");

  return (
    <section className="w-full max-h-96 lg:max-h-screen overflow-hidden p-4 h-full bg-black relative max-w-5xl mx-auto">
      <div className="w-full h-full bg-[url('../assets/images/Infinity.png')] bg-contain bg-no-repeat bg-center  flex justify-center items-center">
        {/* <video className='w-full mix-blend-multiply' autoplay={"autoplay"} muted loop>
                    <source src={"https://res.cloudinary.com/dwncfhjpd/video/upload/v1678179013/samples/yellow-27798_bfiqzb.mp4"} type="video/mp4"/>
                </video> */}
      </div>
      <div className="absolute top-0 right-0 w-full h-full flex justify-evenly items-center">
        {texusArray.map((item, index) => (
          <span
            key={index}
            className="text-white font-[Sniglet] text-2xl md:text-4xl lg:text-6xl text-center textSpan"
          >
            {item}
          </span>
        ))}
        <h1 className="absolute bottom-10 md:bottom-0 lg:bottom-32 font-sniglet flex justify-center w-full text-white text-center text-lg lg:text-2xl">
          21 & 22 APRIL 2023
        </h1>
      </div>
    </section>
  );
};

export default Landing;
