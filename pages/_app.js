import { ConfigProvider, theme } from "antd";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import AuthProvider from "../backend/useAuth";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <Header />
        <div className="mt-28 font-montserrat">
          <Component {...pageProps} />
        </div>
        <Footer />
      </ConfigProvider>
    </AuthProvider>
  );
}

export default MyApp;
