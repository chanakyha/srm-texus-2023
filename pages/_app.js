import { ConfigProvider, theme } from "antd";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import Landing from "../components/Landing";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Header />
      <div className="font-montserrat mt-28">
        <Component {...pageProps} />
      </div>
      <Footer />
    </ConfigProvider>
  );
}

export default MyApp;
