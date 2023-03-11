import React from "react";
import Carousel from "../components/Carousel";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex w-full flex-col font-montserrat items-center justify-center">
      <div className="w-full">
        <div className="w-full lg:bg-[url('../assets/images/bgoverlay.png')] bg-right bg-cover bg-no-repeat">
          <div className="p-4 md:p-16 mt-16 max-w-6xl mx-auto">
            <h1 className="text-white font-medium text-2xl md:text-4xl lg:text-6xl">
              About <span className="font-sniglet tracking-[1rem]">Texus</span>
            </h1>
            <p className="text-gray-300 text-justify mt-3">
              Texus is a culmination achieved when the brilliance of technology meets the creative intuition that is the human brain.
              It is a National Level Tech Fest organised by Department of Computer Science and Engineering, SRM Institute of Science and Technology, Ramapuram.
              As many as 50 events occupying various spots on the creative spectrum right from 24 hour Hackathons and Ethical Hacking workshops for geeks to Open Mic events for all the writers, poets and storytellers out there, this “festival” provides a platform for students from various walks of life to come together and do what they do best.
            </p>
          </div>
          {/* <div className="lg:bg-gradient-to- bg-gradient-to-b  from-gray-600 via-gray-700 via-gray-900 via-black to-black w-full"> */}
            <div className="flex items-center p-4 md:p-16 justify-center w-full">
              <div className="flex max-w-5xl mx-auto w-full flex-col lg:flex-row items-center justify-between">
                <div className="text lg:w-[60%] mr-[3%] lg:mt-[0px] mt-[50px]">
                  <h3 className="text-3xl font-medium align-end justify-end lg:text-end from-[#ffea2c] [#ff6240] [#179ebb] to-[#ff0000] bg-gradient-to-r bg-clip-text text-transparent">
                    About SRMIST Ramapuram
                  </h3>
                  <p className="lg:text-right text-justify mt-3 text-gray-300">
                    SRM Institute of Science and Technology (formerly known as SRM University) is one of the top ranking universities in India with over 20,000 students and 1,500 faculty, offering a wide range of undergraduate, postgraduate and doctoral programs in Engineering, Management, Medicine and Health sciences, Science and Humanities.
                  </p>
                </div>
                <div className="lg:h-[500px] lg:w-[600px] h-[300px] w-full flex relative order-[-1] lg:order-[1]">
                  <div className="rounded-md overflow-hidden bg-[url('../assets/images/eventcard.png')]">
                    <Image
                      className="rounded-md w-full"
                      src={require("../assets/images/srmbuilding.png")}
                      alt="infinity"
                      fill
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
