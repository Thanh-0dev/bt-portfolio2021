import Head from "next/head";
import Script from "next/script";
import {useState, useEffect} from "react";
import Layout from "/components/layout/Layout";
import Loader from "/components/Loader";
import Transition from "/components/Transition";
import "/styles/globals.css";

function MyApp({Component, pageProps}) {
  /* Slow internet loading */
  const [finishedLoading, setFinishedLoading] = useState(false);
  const [firstTime, setFirstTime] = useState(false);
  const [firstLoading, setFirstLoading] = useState(true);
  const [leave, setLeave] = useState(false);
  useEffect(() => {
    setFirstTime(true);
    setFirstLoading(false);
    window.addEventListener(
      "load",
      () => {
        setTimeout(() => {
          setFinishedLoading(true);
        }, 500);
        setTimeout(() => {
          setLeave(true);
          setTimeout(() => {
            setFirstTime(false);
          }, 400);
        }, 2100);
      },
      {once: true}
    );
  }, []);

  /* Page transition effect */
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    /* For links without noTransition class */
    const links = document.querySelectorAll("a:not(a.noTransition)");
    for (let link = 0; link < links.length; link++) {
      links[link].addEventListener("click", () => {
        if (links[link].href !== window.location.href) {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 1500);
        }
      });
    }
  });
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta
          property="og:title"
          content="Bich Trâm Cynthia PHAM | Portfolio"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_us" />
        <meta
          property="og:description"
          content="Hi, I'm Bich Trâm Pham a digital designer based in Paris currently searching for a job or remote."
        />
        <meta
          property="og:site_name"
          content="Bich Trâm Cynthia PHAM | Portfolio"
        />
        <meta property="og:url" content="https://bichtrampham.com" />
        <meta property="og:image" content="/preview.png" />
        <meta name="author" content="Bich Trâm Cynthia Pham" />
        <meta
          name="copyright"
          content="Copyright© Bich Trâm Cynthia Pham all rights reserved."
        />
        <meta
          name="p:domain_verify"
          content="a5865c29d2592e6c312729f0190f5c88"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="Hi, I'm Bich Trâm Pham a digital designer based in Paris currently searching for a job or remote."
        />
        <meta
          name="twitter:title"
          content="Bich Trâm Cynthia PHAM | Portfolio"
        />
        <meta
          name="twitter:image"
          content="https://bichtrampham.com/preview.png"
        />
        <meta name="twitter:site" content="@BichTramPh" />
        <meta
          name="description"
          content="Hi, I'm Bich Trâm Pham, a french digital designer based in Paris. I am currently searching for a job or remote."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-152641511-1');
          `,
        }}
      />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-152641511-1"
      />
      {firstTime || !finishedLoading ? (
        <Loader {...[firstTime, finishedLoading, leave]} />
      ) : null}
      {loading ? <Transition /> : null}
      {!firstLoading ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : null}
    </>
  );
}

export default MyApp;
