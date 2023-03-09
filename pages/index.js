import Head from "next/head";
import React, { useEffect, useState } from "react";
import Landing from "../components/Landing";
// import Tagline from "../components/Tagline";
// import EventDetails from "../components/EventDetails";
// import Carousel from "../components/Carousel";

const Home = () => {
  
  
  return (
    <div className="flex min-h-screen bg-black w-full">
      <Head>
        <title>SRM Texus</title>
        <link rel="icon" href="/fav.ico" />
      </Head>
      <main className="w-full bg-black">
        <Landing/>
        {/* <Carousel/>
        <Tagline/>
        <EventDetails/> */}
      </main>
    </div>
  );
};

export default Home;
