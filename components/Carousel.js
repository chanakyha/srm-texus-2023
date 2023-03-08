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
    <div className="carousel-container  flex justify-center items-center">
      <Swiper
        className="w-5/6 flex items-center flex align-items justify-center bg-transparent rounded-3xl"
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="flex items-center  justify-center items-center bg-transparent">
          <div className="img-container flex items-center justify-center  h-[60vh] bg-transparent">
            <Image
              className="object-cover rounded-3xl"
              src={require("/assets/images/car-one.jpg")}
              alt="slide one"
              fill
            ></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center  justify-center items-center bg-transparent">
          <div className="img-container flex items-center justify-center  h-[60vh] bg-transparent">
            <Image
              className="object-cover rounded-3xl"
              src={require("/assets/images/car-two.jpg")}
              alt="slide one"
              fill
            ></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center  justify-center items-center bg-transparent">
          <div className="img-container flex items-center justify-center  h-[60vh] bg-transparent">
            <Image
              className="object-cover rounded-3xl"
              src={require("/assets/images/car-three.jpg")}
              alt="slide one"
              fill
            ></Image>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
