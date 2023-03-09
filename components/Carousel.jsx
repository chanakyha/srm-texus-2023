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
        <div className="img-container flex items-center justify-center h-56 md:h-[36rem] bg-transparent">
            <Image
            className="object-cover w-full object-bottom rounded-3xl"
            src={"https://s3-alpha-sig.figma.com/img/088a/fc6f/3ae16143aaf8702f9bcd312ca4c52365?Expires=1679270400&Signature=BGYdTySwNMxvWR2E926uGK8gyX6M3xXOKV4Y9SspjfeAoZ9eLG6i35HF9QrNhdWzuL8L-LU5NCsDIjGG9WzNEiGfdrWsN9XGGf05lq-Tl76qRr4KAXIXyKJeuD2GeB3oJ57LcwHbAgspXh8h6jQvKG0M6VZ0OoCrQlT1GwIVjt~gJsy2gx8JOMEJ7KCd4gG9pIeUrb2E9D8Imb3z9ynD6X7B6jRmOd8pfw-BdqAtqFAw0OwFyE-Grb7QWddtZfA~E-bvMBqpaiazx~cQbAA62lZqzjlzhSrVixBuz~R~KC78h1ZBqy1M1TTgm14HgJHaj4FVaIn-j4FSX-gKxEclHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
            alt="slide one"
            fill
            // width={100}
            // height={100}
            ></Image>
        </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-transparent">
        <div className="img-container flex items-center justify-center h-56 md:h-[36rem] bg-transparent">
            <Image
                className="object-cover w-full object-bottom rounded-3xl"
                src={"https://s3-alpha-sig.figma.com/img/e05b/a82d/cd75c46ac4ac091295bda3eef1dbd9ff?Expires=1679270400&Signature=jMrV3dTMbL5K6Gz726CHYbLKdn2gvcvk3-kb9z10tjjbgQnP~J4VSyWG-TsrKaxpc-qIqdi~0JUEGLGGjDKBAtCCPMrfNgZ8Vj9Bsupev~E61713u64glQMp0l4~OgsqFululwbb3JnaxXTBrfNNrEe~G0aKPGcFC2f8iQdYJDeFMmRbvym022AXXB8XR5qHrLhex4OsQfn3MbNJGoVtNaNl3Y1kBNrYTaNjmaMZLMsFW-BaC1K0LvoM535jko3vT8J0h40h5aB85SDfazARWqRxiuzgL8YbO-7Et74a9aJqipTn8O3A2UJv2tks9Befb76wyWQeIhIalXKl48Mg8Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
                alt="slide one"
                fill
                // width={100}
                // height={100}
            ></Image>
        </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-transparent">
        <div className="img-container flex items-center justify-center h-56 md:h-[36rem] bg-transparent">
            <Image
                className="object-cover w-full object-bottom rounded-3xl"
                src={"https://s3-alpha-sig.figma.com/img/def2/4f6e/af064db861c349ccdab6acf4b1913efe?Expires=1679270400&Signature=lP3zLTEhRq1vMCW2eA5dp3KHNzCv9vkA8xLUd4JjmnNKWdXcPpeMUjiy2vVM4H1TRjLX52jEgFGzJVporHJOsrL3AxDdJV51dY1AKp~b07pp9iQgx6yGS7cDYdPnz7GxnUKI88hzxmY2akYDj1dHneMJIEfsCbYlS866PkgbcWJydm8~quqLUOQbz8GQOehf72P8Iroh9zqBNJ6KsgJtBQ7LmHDe2Sl3VztxCZY9KG0hKqSgAV9218S7jnaowHvo-xIE4dt-AEhwPwThrTrKxbm-lcIV94F4CNNy6n8DG0OdBJvoshX0zSHoJhtHUPxuUdqX0zgx7-kwBNunXqJpjw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
                alt="slide one"
                fill
                // width={100}
                // height={100}
            ></Image>
        </div>
        </SwiperSlide>
    </Swiper>
    </div>
);
}