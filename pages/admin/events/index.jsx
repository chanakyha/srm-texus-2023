import React from 'react'

const Events = () => {

    const technicalEvents = [1,2,3,4,5]
    return (
        <section className="min-h-[calc(100vh-300px)] w-full font-montserrat mt-28">
            <div className="w-full p-4 md:p-16 max-w-6xl mx-auto flex flex-col gap-4">
                <div className='mb-4'>
                    <h1 className='text-2xl'>Technical Events</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16'>
                    {
                        technicalEvents.map((event, index) => (
                            <div className="w-full bg-slate-800/40 p-4 rounded-md hover:bg-slate-800/50 transition-all duration-300 cursor-pointer">
                                <h1>Event Name</h1>
                            </div>
                        ))
                    }
                </div>
                <div className='mb-4'>
                    <h1 className='text-2xl'>Non Technical Events</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16'>
                    {
                        technicalEvents.map((event, index) => (
                            <div className="w-full bg-slate-800/40 p-4 rounded-md hover:bg-slate-800/50 transition-all duration-300 cursor-pointer">
                                <h1>Event Name</h1>
                            </div>
                        ))
                    }
                </div>
                <div className='mb-4'>
                    <h1 className='text-2xl'>Workshop</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16'>
                    {
                        technicalEvents.map((event, index) => (
                            <div className="w-full bg-slate-800/40 p-4 rounded-md hover:bg-slate-800/50 transition-all duration-300 cursor-pointer">
                                <h1>Event Name</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Events