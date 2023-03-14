import React from 'react'
import { technicalEvents } from "../../assets/events";

const Cart = () => {
  return (
    <section className='min-h-[calc(100vh-330px)] justify-center items-center font-[Montserrat]'>
        <div className="flex justify-center py-4 my-4">
            <svg width="35" height="36" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4 mt-[5px]">
                <path d="M2 2H5.91653C8.34748 2 10.2607 4.0925 10.0582 6.5L8.18992 28.91C8.11698 29.7782 8.22523 30.6521 8.50782 31.4762C8.79042 32.3004 9.24119 33.0569 9.83158 33.6979C10.422 34.3388 11.1391 34.8501 11.9375 35.1995C12.736 35.5489 13.5983 35.7287 14.4699 35.7275H38.4418C41.683 35.7275 44.5191 33.0725 44.7667 29.855L45.9822 12.98C46.2523 9.245 43.4162 6.2075 39.6572 6.2075H10.5984M17.7562 15.5H44.7667M34.075 47C34.8213 47 35.5369 46.7037 36.0646 46.1762C36.5922 45.6488 36.8886 44.9334 36.8886 44.1875C36.8886 43.4416 36.5922 42.7262 36.0646 42.1988C35.5369 41.6713 34.8213 41.375 34.075 41.375C33.3288 41.375 32.6132 41.6713 32.0855 42.1988C31.5579 42.7262 31.2614 43.4416 31.2614 44.1875C31.2614 44.9334 31.5579 45.6488 32.0855 46.1762C32.6132 46.7037 33.3288 47 34.075 47ZM16.068 47C16.8142 47 17.5299 46.7037 18.0575 46.1762C18.5852 45.6488 18.8816 44.9334 18.8816 44.1875C18.8816 43.4416 18.5852 42.7262 18.0575 42.1988C17.5299 41.6713 16.8142 41.375 16.068 41.375C15.3218 41.375 14.6061 41.6713 14.0785 42.1988C13.5508 42.7262 13.2544 43.4416 13.2544 44.1875C13.2544 44.9334 13.5508 45.6488 14.0785 46.1762C14.6061 46.7037 15.3218 47 16.068 47Z" stroke="#FF6240" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h2 className="text-5xl font-semibold">Cart</h2>
        </div>
        <div className='px-4 md:px-16'>
        <div className="w-full max-w-6xl mx-auto text-white justify-center items-end ">
            {technicalEvents.map((event) => {
            return (
            <div className="bg-zinc-800 grid grid-cols-5 md:grid-cols-5 gap-1 items-end justify-between py-6 px-9 rounded-xl my-4">
              <svg
                width="30"
                height="30"
                viewBox="0 0 51 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.48 24.9998H35.1466M25.8133 48.3332C38.6466 48.3332 49.1467 37.8332 49.1467 24.9998C49.1467 12.1665 38.6466 1.6665 25.8133 1.6665C12.98 1.6665 2.47998 12.1665 2.47998 24.9998C2.47998 37.8332 12.98 48.3332 25.8133 48.3332Z"
                  stroke="#FF0000"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="event-name text-sm md:text-xl lg:text-2xl col-span-3 md:col-span-2">
                {event.eventName}
              </span>
              <span className="event-date hidden md:flex md:text-sm lg:text-lg text-slate-400">
                {event.date}
              </span>
              <span className="event-price text-1xl lg:text-2xl font-semibold md:text-end">
                ₹ {event.entryFee}
              </span>
            </div>
          );
        })}
      </div>
        <div className="w-full max-w-6xl mx-auto border-t-[2px] border-b-[2px] border-slate-700 text-right p-4 mt-4">
            <span className="text-2xl font-medium mr-8">Total Price :</span>
            <span className="text-3xl font-semibold text-[#FF6240]">₹ 200</span>
        </div>
        <div className="w-full max-w-6xl mx-auto rounded-md bg-red-600 p-7 mt-12 text-center">
            <h1 className='mb-2 text-2xl'>Disclaimer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae laoreet lectus. Vestibulum suscipit nibh enim, ac molestie nunc dictum in. Nunc quis vehicula justo. Sed tortor mi, mattis vitae lacus vel, sagittis ultricies libero. Quisque molestie est elit, a aliquam nulla consequat a.</p>
        </div>
        <div className="w-full max-w-6xl mx-auto my-2 rounded-md p-7 leading-9">
            <input type="checkbox" id="terms" name="terms" value="terms"/>
            <label for="terms"> I agree to all terms and conditions. </label><br></br>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
            <label for="vehicle2"> Hereby I declare that the information furnished above is true, complete and correct to the best of my knowledge and belief.</label><br></br>
            <input type="checkbox" id="conduct" name="conduct" value="conduct"/>
            <label for="conduct"> I agree to the code of conduct. </label><br></br>
        </div>
        <div className="w-full max-w-6xl mx-auto rounded-md">
            <button className="bg-gradient-to-r from-[#FFEA2C] via-[#FF7A5D] to-[#FF0000] w-full max-w-6xl mx-auto text-black text-2xl h-16 my-2 rounded-md font-bold">
                Proceed to Payment
            </button>
        </div>
    </div>
    </section>
  )
}

export default Cart
