/** @format */

// import { NextIntlProvider } from 'next-intl';
import "@/styles/globals.css";
import Head from "next/head";
import { TranslationProvider } from "../translations/provider.js";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
// import LanguageSwitcher from "../components/LanguageSwitcher.js";
import { Playfair_Display, Karla, Dancing_Script } from "next/font/google";
import FloatingOrderButton from "@/components/FloatingButton.js";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-karla",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <div
        className={`${playfair.variable} ${karla.variable} ${dancing.variable}`}
      >
        <TranslationProvider>
          {/* <NextIntlProvider messages={pageProps.messages}> */}
          <Head>
            <title>Sweet Artistry</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </Head>

          <div className="layout">
            <Header />
            <Component {...pageProps} />
            <FloatingOrderButton />
            <Footer />

            {/* <a href="#top" className="back-to-top" title="Back to top">
              ↑
            </a> */}
          </div>
          {/* </NextIntlProvider> */}
        </TranslationProvider>
      </div>
    </>
  );
}
