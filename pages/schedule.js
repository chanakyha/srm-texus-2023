import React from 'react'

const Schedule = () => {
  const events=[1,2,3,4,5,6,7,8]
  return (
    <div className='w-full h-full bg-black font-sniglet text-white'>
        <div className='p-4 md:p-16'>
            <div className='max-w-6xl lg:mx-auto'>
                <h1 className="text-3xl my-7 ">Schedule</h1>
                <div className='grid grid-cols-2'>
                    <div><p className="text-2xl mb-5">21 April</p></div>
                    <div class='place-self-end mb-3'> 
                        <div className='inline-block'> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hover:text-sky-400 mr-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </div>
                        <div className='inline-block'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hover:text-sky-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div> 
                </div>             
            </div>
            <div className='bg-[#1B1B1B] max-w-6xl mx-auto lg:mx-auto p-8 rounded-md flex flex-wrap items-strech justify-center'>
                {events.map((event,index)=> (
                    <div className='h-64 w-48 m-8 p-3 relative items-end bg-[#179EBB] text-white rounded-md'>
                        <div className='absolute bottom-2  w-48 left-0 text-center mx-auto'>
                            <p>Mindwrap</p>
                            <p>8:00 AM</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
        
    </div>
  )
}

export default Schedule