import Link from 'next/link';
import React from 'react';
import {technicalEvents} from '../../assets/events'

const EventList = () => {
  const events=[1,2,3,4,5]
  return (
    <section className="w-full h-full bg-black font-sniglet text-white">
    <div className="w-full max-w-6xl mx-auto bg-[url('../assets/images/demo3.jpg')] bg-center bg-cover bg-no-repeat h-96 ">
    
    </div>
    <div className='p-4 md:p-16'>
      <div>
        <h1 className="text-3xl my-8 max-w-6xl lg:mx-auto">Technical Events</h1>
      </div>

      {
        technicalEvents.map((event,index)=> (
          <Link href={`events/${event.id}`} key={index} className="w-full max-w-6xl border border-gray-800 cursor-pointer mx-auto group h-auto p-8 rounded-md grid lg:grid-cols-6 gap-4 mb-8 bg-[url('../assets/images/listbg.png')] bg-center bg-cover bg-no-repeat">
            <div className="col-span-3 lg:col-span-2 text-2xl my-auto">{event.eventName}</div>
            <p className="col-span-3 lg:col-span-3 my-auto">{event.desc}</p>
            <div className="my-auto pl-[10px] lg:mx-auto">
              <div className="hidden lg:col-span-1 lg:group-hover:inline-block transition-all duration-300">
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