import { useRouter } from "next/router";
import { useEffect } from "react/cjs/react.development";
import Footer from "../componants/Footer/Footer";
import NavBar from "../componants/Nav/NavBar/NavBar";
import PageHeader from "../componants/PageHeader/PageHeader";
import { TeamProvider } from "../context/TeamContext";
import * as ga from "../helper/ga";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <TeamProvider>
      <PageHeader />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </TeamProvider>
  );
}

export default MyApp;
