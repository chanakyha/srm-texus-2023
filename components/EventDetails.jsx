import React from 'react';
import TechnicalEvents from "../components/TechnicalEvents";
import NonTechEvents from "../components/NonTechEvents";

const EventsDetails = () => {
    return (
        <div id="events" className="w-full -scroll-pt-70 bg-black p-4 md:mt-16 text-white">
            <div  className="w-full bg-black relative max-w-5xl mx-auto bg-[url('../assets/images/bgoverlay.png')] bg-contain bg-no-repeat bg-center">
                <div className="absolut top-0 w-full">
                    <section className="container mt-16 w-full h-full grid grid-cols-1 gap-4 lg:gap-12 md:grid-cols-2">
                        <TechnicalEvents/>
                        <NonTechEvents/>
                    </section>
                    <section className="font-montserrat w-full h-full my-16 lg:my-32">
                        <div className="mb-16 lg:mb-32">
                            <h1 className="text-white font-normal text-2xl md:text-4xl lg:text-5xl text-center">Pro Shows</h1>
                        </div>
                        <div className="w-full h-full mt-12 grid grid-cols-1 gap-4 lg:gap-12 lg:grid-cols-2">
                            <div className="w-full h-56 lg:h-full cursor-pointer lg:row-span-2 transition-all duration-300 rounded-md bg-[url('https://s3-alpha-sig.figma.com/img/85d0/46ca/7944524fdcde845bcad699095e361241?Expires=1679270400&Signature=nE~Hxb-8uPTz6IrlJvHtJsvJRuPJFEWhgllcjJ1WzB-ADP0opT7yOoz1PsQI9fylDjGtPvkY1yJAUVyyDP6LVybxx~s1sfZ652Fr-i4h4hOsW-x7ASv90Gu0SwI5FP35p3vyuXxJ62kJ6ijw~dXou~0WzfzxwAbJb-50pj13rt8C~mK3a1Ce74M7D5uI~KE2aBvtqNZA6NOtSEv~bK~xCxWibFJ5-oNifs6ftgj2iRNTJwPbsm1rItE-u6glixpE1HsurCD0qJi45wjl~N9I0QdvxF2V~oKcU~GumY8w5EWkwVIQFvNBT6eKEcHEJ8RUioIWx0fk4gNKBFYmV1V7sQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')] bg-cover bg-no-repeat bg-center">
                                <div className='bg-gradient-to-t rounded-md flex flex-col justify-end p-8 from-black/75 to-transparent h-full'>
                                    <h1 className='font-montserrat font-bold text-2xl lg:text-3xl'><span className="font-normal">Mr</span> Elon Musk</h1>
                                    <p>Chief executive officer of Tesla </p>
                                </div>
                            </div>
                            <div className="w-full h-56 lg:h-56 cursor-pointer transition-all duration-300 rounded-md bg-[url('https://s3-alpha-sig.figma.com/img/7459/50c1/9b7471a3307b757e79b0c78914fded22?Expires=1679270400&Signature=LyR3UHYRee5~Y81WX3LAL2bV20aaHHI3N3kUSnbPAxEOrTavtD-xj7MyDRw2Jrr8B38qYYy6jN6~HTq4M83DtCo~TEmwNxM60zJrO-MqJbs8qWgHqDMcL1VIFBNN90Pi1iJvAbGI6RyrfYcU-wCTVjDaTXWeHte7UaOQmRZH7BbqYZSPd895NQwnA6FpJNxqb2MilFzubU~zM1jdpPrEmmVAv6sozV5jai21XHlFrxwst2PmPOOhjyPoBti7p5ZIfSXMWhFIu69WGnAB8m-X2BIKNltdq1GlTm6p7lK5XnO8ko96So8~a8OrednsK5Khn-IsXLDAoIzUZ1oIzD8y-g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')] bg-cover bg-no-repeat bg-center">
                                <div className='bg-gradient-to-r rounded-md flex flex-col justify-end p-8 from-black/75 to-transparent h-full'>
                                    <h1 className='font-montserrat font-bold text-2xl lg:text-3xl'><span className="font-normal">Mr</span> Andrew Tate</h1>
                                    <p>Top G</p>
                                </div>
                            </div>
                            <div className="w-full h-56 lg:h-56 cursor-pointer transition-all duration-300 rounded-md bg-[url('https://s3-alpha-sig.figma.com/img/0851/b35f/18fdd7fb6135ec2f74441b83e6502275?Expires=1679270400&Signature=KuqMzZPgDdjXs52zVM64sjyDd5SV1f9pSlq~aaUv80ZDfBG28IV7OyxEom0LJ2V1NKXR4gFiLRQl54BqtpiyxqLLRqcBpr8BwkYInLv8a6gyH9Q8HBbLh4Lhj0ju0g0B80SWg7OJYr0dE2AXn~dTk3pXyJLCfRGQHBCAUjIFWQWpyZEH5UL8h4h53HBR-~2xtaECvX4Zgx4BiRxug4KZ6R~c3reHAd28OaufzHYp1A~9dUtx4Pzpe1LgeSTM-sVx1suQfjDQ2~cxQteRws-kZ3vwrW4-chnzhvHGnuTrRQY~l6MpVhSuQ9VGxUvHAvqXuKHPRB00vLF724A3ZsZzAA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')] bg-cover bg-no-repeat bg-center">
                                <div className='bg-gradient-to-r rounded-md flex flex-col justify-end p-8 from-black/75 to-transparent h-full'>
                                    <h1 className='font-montserrat font-bold text-2xl lg:text-3xl'><span className="font-normal">Mr</span> Ratan Tata</h1>
                                    <p>Buisnessman, Tata Groups</p>
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