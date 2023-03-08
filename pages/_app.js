import { ConfigProvider, theme } from "antd";
import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Header/>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

export default MyApp;
