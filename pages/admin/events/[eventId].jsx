import React from 'react'

const Participants = () => {
    const participants = [1,2,3,4,5];

    return (
        <section className="min-h-[calc(100vh-300px)] w-full font-montserrat mt-28">
            <div className="w-full p-4 md:p-16 max-w-6xl mx-auto flex flex-col gap-4">
                <div className='mb-4'>
                    <h1 className='text-2xl'>Event Name</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16'>
                    {
                        participants.map((participant, index) => (
                            <div className="w-full bg-slate-800/40 p-4 rounded-md hover:bg-slate-800/50 transition-all duration-300 cursor-pointer">
                                <h1>Particpant Name</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Participants