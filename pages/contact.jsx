import Image from 'next/image'
import React from 'react';
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

const Contact = () => {

    const contacts = [
        {
            name: "Name",
            img: "https://res.cloudinary.com/dwncfhjpd/image/upload/v1675874822/samples/people/kitchen-bar.jpg",
            designation: "Prsident",
            phone: "+911234567899",
            instagram: "instaId",
        },
        {
            name: "Name",
            img: "https://res.cloudinary.com/dwncfhjpd/image/upload/v1675874822/samples/people/kitchen-bar.jpg",
            designation: "Prsident",
            phone: "+911234567899",
            instagram: "instaId",
        },
        {
            name: "Name",
            img: "https://res.cloudinary.com/dwncfhjpd/image/upload/v1675874822/samples/people/kitchen-bar.jpg",
            designation: "Prsident",
            phone: "+911234567899",
            instagram: "instaId",
        },
    ]

    return (
        <section className='w-full mt-20 p-4 md:p-16 font-montserrat'>
            <div className='grid grid-cols-1 bg-[url("https://i.ibb.co/C8Z3942/BG-OVERLAY.png")] bg-contain bg-no-repeat bg-bottom h-full md:grid-cols-2 gap-4 max-w-6xl mx-auto'>
                {
                    contacts.map((contact, index) => (
                        <div className='w-full h-72 bg-[url("https://i.ibb.co/vkmsdTJ/eventcard.png")] bg-cover bg-center bg-no-repeat rounded-md'>
                            <div className='w-full h-full flex flex-col lg:flex-row lg:items-center justify-around p-4 bg-gradient-to-t lg:bg-gradient-to-l from-black/75 to-transparent'>
                                <div className='w-full flex justify-center rounded-full'>
                                    <Image width={100} height={100} className='rounded-full w-32 h-32 object-cover' src={"https://res.cloudinary.com/dwncfhjpd/image/upload/v1675874822/samples/people/kitchen-bar.jpg"} alt={""} />
                                </div>
                                <div className='w-full flex flex-col gap-4'>
                                    <div className='text-center mt-4'>
                                        <h1 className='font-medium lg:text-2xl'>Name</h1>
                                        <p className='lg:text-lg'>President</p>
                                    </div>
                                    <div className='flex items-center w-full justify-center gap-4'>
                                        <div className='flex items-center'>
                                            <AiOutlinePhone/>
                                            <span className='text-sm ml-1'>+91 1234567899</span>
                                        </div>
                                        <div className='flex items-center'>
                                            <AiOutlineInstagram/>
                                            <span className='text-sm ml-1'>instaId</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Contact