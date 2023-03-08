import React from 'react'

const EventList = () => {
  const events=[1,2,3,4,5]
  return (
    <section className="w-full h-full bg-black py-[130px] font-sniglet text-white">
    <div className="w-full max-w-6xl mx-auto bg-gradient-to-r from-sky-500 to-indigo-500 h-96 ">
    
    </div>
    <div className='p-4 md:p-16'>
      <div>
        <h1 className="text-3xl my-8 max-w-6xl lg:mx-auto  h-400">Technical Events</h1>
      </div>

      {
        events.map((event,index)=> (
          <div key={index} className="w-full max-w-6xl mx-auto bg-gradient-to-r from-sky-500 to-indigo-500 border border-FFFFFF-500 h-auto p-[30px] rounded-md grid lg:grid-cols-6 gap-4 mb-8 ">
            <div className="col-span-2 text-4xl my-auto pl-[10px]">Capture the Flag</div>
            <div className="col-span-3 text-lg my-auto pl-[10px]">It's a coding event, that consists of 3 challenges. The a coding event, that consists challenges.</div>
            <div className="my-auto pl-[10px] lg:mx-auto"> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div> 
        ))
      }
    </div>
  </section>
  )
}
export default EventList