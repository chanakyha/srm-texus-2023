import { ConfigProvider, theme } from "antd";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </ConfigProvider>
  );
}

export default MyApp;
