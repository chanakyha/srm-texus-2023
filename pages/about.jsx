import React from "react";
import Carousel from "../components/Carousel";
import Image from "next/image";

export default function about() {
  return (
    <div className="about flex flex-col items-center justify-center">
      <div className="about-container w-[90%]">
        <h1 className="mt-[10vh] text-8xl font-semibold font-[Montserrat]">
          About
        </h1>
        {/* <Carousel /> */}
        <p className="py-[3vh] font-[Sniglet] md:text-2xl mb-[4vh] text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
          ducimus. Numquam cum quo ipsam esse autem tempore perspiciatis aut
          delectus? Incidunt corporis qui et facere ut temporibus. Ad error,
          deleniti, veniam nam cumque reprehenderit perferendis magnam eos
          excepturi fuga ut numquam modi accusamus? Quaerat fuga, et quibusdam
          ipsam soluta saepe ducimus eligendi neque nemo voluptate nihil ullam?
          Commodi dignissimos possimus itaque labore cupiditate illo quidem,
          nulla, in exercitationem repellat quo ab amet magni doloribus dicta
          natus aut asperiores ipsa explicabo similique necessitatibus fugit
          nemo modi. Atque dignissimos, quaerat veritatis ab illo eum quod saepe
          rerum numquam deleniti error eius at. Nostrum minima reiciendis,
          impedit necessitatibus doloribus distinctio tenetur saepe hic eaque
          consectetur amet, sint dolor eligendi quod! Nam accusantium
          voluptatibus dolorem esse, obcaecati recusandae temporibus aliquid
          sapiente aperiam perspiciatis architecto at cum assumenda tempora
          sunt, quos necessitatibus eos consectetur enim earum repellendus
          soluta excepturi facere quia? Maxime in enim animi eius, quisquam sit
          aspernatur, voluptate quod ad omnis illo nobis ipsum. Assumenda
          accusamus qui ipsum distinctio reiciendis asperiores rerum voluptatum
          neque recusandae aliquam quam debitis, facilis dolorem alias,
          consectetur, obcaecati veritatis maxime voluptates culpa officiis
          nostrum. Inventore nostrum voluptatum quia aut amet, deleniti a enim,
          unde voluptatem recusandae soluta consectetur!
        </p>
      </div>
      <div className="about-srm flex items-center justify-center md:bg-gradient-to-l bg-gradient-to-b  from-gray-600 via-gray-700 via-gray-900 via-black to-black ">
        <div className="flex flex-col md:flex-row w-[90%] items-center justify-between py-[15vh]">
          <div className="text md:w-[60%] w-[90%] mr-[3%] md:mt-[0px] mt-[50px]">
            <h3 className="text-4xl font-bold align-end justify-end md:text-end from-[#ffea2c] [#ff6240] [#179ebb] to-[#ff0000] bg-gradient-to-r bg-clip-text text-transparent font-[Montserrat]">
              About SRMIST Ramapuram
            </h3>
            <p className="md:text-end font-[Sniglet] md:text-2xl text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              labore est atque perspiciatis magni earum, deleniti enim nostrum
              inventore facilis optio dicta consequuntur ipsum explicabo
              voluptatem dolorem voluptatibus. Sapiente, obcaecati quod? Nulla,
              voluptates. Autem aliquid nam non aspernatur, veritatis unde
              minima, reiciendis corporis obcaecati blanditiis eum impedit
              cumque voluptate veniam!
            </p>
          </div>
          <div className="md:h-[500px] md:w-[500px] h-[300px] w-[300px] flex relative relative mr-[2%] order-[-1] md:order-[1]">
            <div className="image-container rounded-3xl overflow-hidden">
              <Image
                className="rounded-3xl"
                src={require("../assets/images/eventcard.png")}
                alt="infinity"
                fill
              ></Image>
            </div>
            <div className="image-container absolute h-[18%] w-[40%] top-[-8%] right-[-40px]">
              <Image
                className="rounded-3xl"
                src={require("../assets/images/Infinitywhite.png")}
                alt="infinity"
                fill
              ></Image>
            </div>
            <div className="relative top-[-6vh] right-[-70%] h-[100px] w-[100px] bg-[url('../assets/images/Infinitywhite.png')]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
