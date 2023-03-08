import React from 'react'

const Tagline = () => {
    return (
        <div class="relative flex bg-black text-white overflow-x-hidden bg-[url('../assets/images/band.png')] bg-cover md:bg-contain bg-no-repeat bg-center">
        <div class="my-12 animate-marquee whitespace-nowrap">
            <span class="lg:text-4xl md:text-xl text-lg mx-4">Marquee Item 1</span>
            <span class="lg:text-4xl md:text-xl text-lg mx-4">Marquee Item 2</span>
            <span class="lg:text-4xl md:text-xl text-lg mx-4">Marquee Item 3</span>
            <span class="lg:text-4xl md:text-xl text-lg mx-4">Marquee Item 4</span>
            <span class="lg:text-4xl md:text-xl text-lg mx-4">Marquee Item 5</span>
        </div>

        <div class="absolute top-0 my-12 animate-marquee2 whitespace-nowrap">
            <span class="lg:text-4xl md:text-xl text-lg mx-4">Marquee Item 1</span>
            <span class="lg:text-4xl md:text-xl text-lg mx-4">Marquee Item 2</span>
            <span class="lg:text-4xl md:text-xl text-lg mx-4">Marquee Item 3</span>
            <span class="lg:text-4xl md:text-xl text-lg mx-4">Marquee Item 4</span>
            <span class="lg:text-4xl md:text-xl text-lg mx-4">Marquee Item 5</span>
        </div>
        </div>
    )
}

export default Tagline