import React from "react";
import { technicalEvents } from "../../assets/events";
import { useRouter } from "next/router";

const EventList = () => {
  const router = useRouter();
  const { type } = router.query;

  return (
    <section className="w-full h-full bg-black mt-20 text-white">
      <div className="w-full max-w-6xl mx-auto bg-[url('https://i.ibb.co/9nPtRVH/IMG-2814-01.jpg')] lg:rounded-md bg-center bg-cover bg-no-repeat h-[500px] "></div>
      <div className="p-4 md:p-16">
        <div>
          <h1 className="text-3xl my-8 max-w-6xl lg:mx-auto">
            {type === "technical" ? "Technical" : "Non Technical"}
          </h1>
        </div>

        {technicalEvents.map((event, index) => (
          <div
            key={index}
            className="w-full max-w-6xl border border-gray-800 mx-auto group h-auto p-8 rounded-md grid grid-cols-1 lg:grid-cols-5 gap-4 mb-8 bg-[url('../assets/images/listbg.png')] bg-center bg-cover bg-no-repeat"
          >
            <div className="col-span-3 lg:col-span-1 text-2xl my-auto">
              {event.eventName}
            </div>
            <p className="col-span-3 lg:col-span-3 my-auto invisible">
              {event.desc}
            </p>
            <div className="my-auto pl-[10px] lg:mx-auto">
              <div className="">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg> */}
                <p className="text-center text-gray-400 animate-pulse">
                  Coming Soon!
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default EventList;
