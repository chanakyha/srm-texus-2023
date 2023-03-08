import React from 'react';


const Landing = () => {

    const texusArray = "TEXUS".split("");

    return (
        <section className="w-full overflow-hidden p-4 h-full bg-black relative max-w-5xl mx-auto">
            <div className="w-full h-full bg-[url('../assets/images/Infinitywhite.png')] bg-contain bg-no-repeat bg-center  flex justify-center items-center">
                <video className='w-full mix-blend-multiply' autoplay={"autoplay"} muted loop>
                    <source src={"https://res.cloudinary.com/dwncfhjpd/video/upload/v1678179013/samples/yellow-27798_bfiqzb.mp4"} type="video/mp4"/>
                </video>
            </div>
            <div className="absolute top-0 right-0 w-full h-full flex justify-evenly items-center">
                {texusArray.map((item, index) => (
                    <span key={index} className="text-white font-[Sniglet] text-2xl md:text-4xl lg:text-6xl text-center textSpan">{item}</span>
                ))}
            </div>
            <h1 className="absolute bottom-20 text-white text-center text-2xl w-full">21 & 22 APRIL 2023</h1>
        </section>
    )
}

export default Landing