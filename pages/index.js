import Head from "next/head";
import Landing from "../components/Landing";

const Home = () => {
  return (
    <div className="flex min-h-screen w-full">
      <Head>
        <title>SRM Texus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full bg-black">
        <Landing/>
      </main>
    </div>
  );
};

export default Home;
