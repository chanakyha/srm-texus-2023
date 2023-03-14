import Image from 'next/image'
import React from 'react';
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {

    const contacts = [
        {
            name: "Manoj Kumar G",
            img: "https://i.ibb.co/LkjmGQk/manoj1.jpg",
            designation: "President",
            phone: "+91 7550049628",
            insta: "stories.by.manoj",
            link: "https://instagram.com/stories.by.manoj?igshid=YmMyMTA2M2Y=",
            mail : "mk5728@srmist.edu.in",
        },
        {
            name: "Guru Thejitha G",
            img: "https://i.ibb.co/pwMTmHN/theju.jpg",
            designation: "President",
            phone: "+91 9791357669",
            insta: "theju_reddy_16",
            link: "https://instagram.com/theju_reddy_16?igshid=YmMyMTA2M2Y=",
            mail : "gt7404@srmist.edu.in",
        },
    ]

    return (
        <section className='w-full h-screen mt-20 p-4 md:p-16 font-montserrat'>
            <div className='grid grid-cols-1 bg-[url("https://i.ibb.co/C8Z3942/BG-OVERLAY.png")] bg-contain bg-no-repeat bg-bottom h-full md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
                {
                    contacts.map((contact, index) => (
                        <div className='w-full h-80 bg-[url("https://i.ibb.co/vkmsdTJ/eventcard.png")] bg-cover bg-center bg-no-repeat rounded-md'>
                            <div className='w-full h-full flex flex-col lg:flex-row lg:items-center justify-around p-4 bg-gradient-to-t lg:bg-gradient-to-l from-black/75 to-transparent'>
                                <div className='w-full lg:w-1/3 flex justify-center rounded-full'>
                                    <Image width={100} height={100} className='rounded-full w-32 h-32 object-cover' src={contact.img} alt={""} />
                                </div>
                                <div className='w-full lg:w-2/3 flex flex-col gap-4'>
                                    <div className='text-center mt-4'>
                                        <h1 className='font-medium lg:text-2xl'>{contact.name}</h1>
                                        <p className='lg:text-lg'>{contact.designation}</p>
                                    </div>
                                    <div className='grid grid-cols-2 items-center w-full justify-center gap-4'>
                                        <div className='flex justify-center items-center col-span-1'>
                                            <AiOutlinePhone/>
                                            <a href={`tel:${contact.phone}`} className='text-sm ml-1'>{contact.phone}</a>
                                        </div>
                                        <div className='flex justify-center items-center col-span-1'>
                                            <AiOutlineInstagram/>
                                            <a target='_blank' href={contact.link} className='text-sm ml-1'>{contact.insta}</a>
                                        </div>
                                        <div className='flex justify-center items-center col-span-2'>
                                            <AiOutlineMail/>
                                            <a href={`mailto:${contact.mail}`} className='text-sm ml-1'>{contact.mail}</a>
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