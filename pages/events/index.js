import Link from 'next/link';
import React from 'react';
import {technicalEvents} from '../../assets/events';
import { useRouter } from 'next/router';

const EventList = () => {

  const router = useRouter()
  const { type } = router.query

  return (
    <section className="w-full mt-20 font-montserrat h-full bg-black text-white">
    <div className="w-full max-w-6xl mx-auto bg-[url('../assets/images/demo3.jpg')] bg-center bg-cover bg-no-repeat h-96 ">
    
    </div>
    <div className='p-4 md:p-16'>
      <div>
        <h1 className="text-3xl my-8 max-w-6xl lg:mx-auto">{type === "technical" ? "Technical Events" : type === "nontech" ? "Non Technical Events" : ""}</h1>
      </div>

      {
        technicalEvents.map((event,index)=> (
          <Link href={`events/${event.id}`} key={index} className="w-full max-w-6xl border border-gray-800 cursor-pointer mx-auto group h-auto p-8 rounded-md grid lg:grid-cols-6 gap-4 mb-8 bg-[url('https://i.ibb.co/MGKsrc1/listbg.png')] bg-center bg-cover bg-no-repeat">
            <h1 className="col-span-3 lg:col-span-2 text-2xl my-auto">{event.eventName}</h1>
            <p className="col-span-3 lg:col-span-3 my-auto">{event.desc}</p>
            <div className="my-auto pl-[10px] lg:mx-auto hidden lg:col-span-1 lg:group-hover:flex lg:justify-end transition-all duration-300">
              <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </div>
          </Link> 
        ))
      }
    </div>
  </section>
  )
}
export default EventList