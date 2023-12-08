import "@/styles/globals.css";
import "leaflet/dist/leaflet.css";
import { SWRConfig } from "swr";
import { SessionProvider } from "next-auth/react";
import Profile from "@/components/profile";
import Footer from "@/components/Footer/Footer";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <SessionProvider session={session}>
        <SWRConfig value={{ fetcher }}>
          <Profile />
          <Component {...pageProps} />
          <Footer />
        </SWRConfig>
      </SessionProvider>
    </>
  );
}
