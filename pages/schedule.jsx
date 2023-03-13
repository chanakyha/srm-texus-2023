import React from "react";
import React, { useCallback, useRef, useState } from "react";
import { technicalEvents } from "../assets/events";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

function Schedule() {
  const [date, setDate] = useState(1);
  const swiperRef = useRef();

  return (
    <div className='w-full h-full bg-black text-white  bg-[url("../assets/images/bgoverlay.png")] mt-8 font-[Montserrat]'>
      <div className="p-4 md:p-16">
        <div className="max-w-6xl lg:mx-auto">
          <h1 className="text-6xl my-7 font-montserrat">Schedule</h1>

          <div className="max-w-6xl h-[5vh] flex justify-center items-center text-4xl mb-4">
            <button onClick={() => swiperRef.current?.slidePrev()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-10 h-10 mr-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <div className="self-center mb-[8px]">
              {date % 2 == 0 ? "22 April" : "21 April"}
            </div>

            <button onClick={() => swiperRef.current?.slideNext()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-10 h-10 ml-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <Swiper
          modules={[Pagination, Scrollbar, A11y, Autoplay, Navigation]}
          slidesPerView={1}
          onSlideChange={() => setDate(date + 1)}
          onSwiper={(swiper) => console.log(swiper)}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="flex items-center justify-center max-w-6xl rounded-2xl"
        >
          <SwiperSlide className="rounded-2xl sm:py-8 bg-[#222222]">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
              {technicalEvents
                .filter((dateValue) => dateValue.date == "21-04-2023")
                .map((event) => (
                  <Link
                    href={`events/${event.id}`}
                    className="h-24 w-11/12 sm:w-40 sm:h-64 lg:w-48 m-4 p-3 relative items-end bg-[#179EBB] text-white rounded-md flex justify-self-center self-center items-center justify-center"
                  >
                    <div className="w-48 left-0 text-center mx-auto">
                      <p className="text-2xl">{event.eventName}</p>
                      <p>{event.time}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#222222]  rounded-2xl sm:py-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
              {technicalEvents
                .filter((dateValue) => dateValue.date == "22-04-2023")
                .map((event) => (
                  <Link
                    href={`events/${event.id}`}
                    className="h-24 w-11/12 sm:w-40 sm:h-64 lg:w-48 m-4 p-3 relative items-end bg-[#179EBB] text-white rounded-md flex justify-self-center self-center items-center justify-center"
                  >
                    <div className="w-48 left-0 text-center mx-auto">
                      <p className="text-2xl">{event.eventName}</p>
                      <p>{event.time}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Schedule;
