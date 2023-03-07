import Head from "next/head";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="min-h-screen w-full">
      <Head>
        <title>SRM Texus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
      </main>
    </div>
  );
};

export default Home;
