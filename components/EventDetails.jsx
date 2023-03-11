import React from 'react';
import TechnicalEvents from "../components/TechnicalEvents";
import NonTechEvents from "../components/NonTechEvents";

const EventsDetails = () => {
    return (
        <div className="w-full bg-black p-4 md:p-16 -scroll-pt-96 text-white">
            <div className="w-full  bg-black relative max-w-5xl mx-auto bg-[url('../assets/images/bgoverlay.png')] bg-contain bg-no-repeat bg-center">
                <div className="absolut top-0 w-full">
                    {/* <section id="events-details" className="w-full h-full grid grid-cols-1 gap-4 lg:gap-16 md:grid-cols-2">
                        <div className="w-full h-56 lg:h-80 lg:hover:scale-[105%] cursor-pointer transition-all duration-300 rounded-md bg-[url('../assets/images/eventcard.png')] bg-cover bg-no-repeat bg-center">
                            <div className='bg-gradient-to-r rounded-md flex flex-col justify-end p-8 from-black/75 to-transparent h-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h1 className='font-montserrat font-bold text-2xl lg:text-3xl'>Technical <br/><span className="font-normal">Events</span></h1>
                            </div>
                        </div>
                        <div className="w-full h-56 lg:h-80 lg:hover:scale-[105%] cursor-pointer transition-all duration-300 rounded-md bg-[url('../assets/images/eventcard.png')] bg-cover bg-no-repeat bg-center">
                            <div className='bg-gradient-to-r rounded-md flex flex-col justify-end p-8 from-black/75 to-transparent h-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h1 className='font-montserrat font-bold text-2xl lg:text-3xl'>Non Technical <br/><span className="font-normal">Events</span></h1>
                            </div>
                        </div>
                    </section> */}
                    <section id="events" className="container mt-16 w-full h-full grid grid-cols-1 gap-4 lg:gap-12 md:grid-cols-2">
                        <TechnicalEvents/>
                        <NonTechEvents/>
                    </section>
                    <section className="font-montserrat w-full h-full my-16 lg:my-32">
                        <div className="mb-16 lg:mb-32">
                            <h1 className="text-center text-xl md:text-3xl ">Pro Shows</h1>
                        </div>
                        <div className="w-full h-full mt-12 grid grid-cols-1 gap-4 lg:gap-12 lg:grid-cols-2">
                            <div className="w-full h-56 lg:h-full cursor-pointer lg:row-span-2 transition-all duration-300 rounded-md bg-gray-400 bg-opacity-40 animate-pulse bg-cover bg-no-repeat bg-center">
                                <div className='bg-gradient-to-t rounded-md flex flex-col justify-end p-8 from-black/75 to-transparent h-full'>
                                    <h1 className='font-montserrat font-bold text-2xl lg:text-3xl'><span className="font-normal"></span>Coming Soon!</h1>
                                    {/* <p>Coming Soon!</p> */}
                                </div>
                            </div>
                            <div className="w-full h-56 lg:h-56 cursor-pointer transition-all duration-300 rounded-md bg-gray-400 bg-opacity-40 animate-pulse bg-cover bg-no-repeat bg-center">
                                <div className='bg-gradient-to-r rounded-md flex flex-col justify-end p-8 from-black/75 to-transparent h-full'>
                                <h1 className='font-montserrat font-bold text-2xl lg:text-3xl'><span className="font-normal"></span>Coming Soon!</h1>
                                    {/* <p>Coming Soon!</p> */}
                                </div>
                            </div>
                            <div className="w-full h-56 lg:h-56 cursor-pointer transition-all duration-300 rounded-md bg-gray-400 bg-opacity-40 animate-pulse bg-cover bg-no-repeat bg-center">
                                <div className='bg-gradient-to-r rounded-md flex flex-col justify-end p-8 from-black/75 to-transparent h-full'>
                                <h1 className='font-montserrat font-bold text-2xl lg:text-3xl'><span className="font-normal"></span>Coming Soon!</h1>
                                    {/* <p>Coming Soon!</p> */}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default EventsDetails