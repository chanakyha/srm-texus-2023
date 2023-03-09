import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export default function Slider() {
return (
    <div className="carousel-container md:p-12 mx-auto flex justify-center items-center my-16">
    <Swiper
        className="flex items-center align-items justify-center bg-transparent md:rounded-md"
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
        delay: 2000,
        disableOnInteraction: true,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide className="flex justify-center items-center bg-transparent">
        <div className="img-container flex items-center justify-center h-56 md:h-96 bg-transparent">
            <Image
            className="object-fill w-full object-center rounded-3xl"
            src={require("/assets/images/demo1.jpg")}
            alt="slide one"
            // fill
            ></Image>
        </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-transparent">
        <div className="img-container flex items-center justify-center h-56 md:h-96 bg-transparent">
            <Image
            className="object-fill w-full object-center rounded-3xl"
            src={require("/assets/images/demo2.jpg")}
            alt="slide one"
            // fill
            ></Image>
        </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-transparent">
        <div className="img-container flex items-center justify-center h-56 md:h-96 bg-transparent">
            <Image
            className="object-fill w-full object-center rounded-3xl"
            src={require("/assets/images/demo1.jpg")}
            alt="slide one"
            // fill
            ></Image>
        </div>
        </SwiperSlide>
    </Swiper>
    </div>
);
}