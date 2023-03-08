import Head from "next/head";
import Header from "../components/Header";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>SRM Texus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Carousel />
      </main>
    </div>
  );
};

export default Home;
