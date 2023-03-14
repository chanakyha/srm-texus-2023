import Head from "next/head";
import Landing from "../components/Landing";
import Tagline from "../components/Tagline";
import EventDetails from "../components/EventDetails";
import Carousel from "../components/Carousel";
import Sponsors from "../components/Sponsors";

const Home = () => {
  return (
    <div className="flex min-h-screen bg-black w-full">
      <Head>
        <title>SRM Texus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full bg-black">
        <Landing />
        <Carousel />
        <Tagline />
        <EventDetails />
        <Sponsors/>
      </main>
    </div>
  );
};

export default Home;
