import Head from "next/head";
import {useEffect, useState, useRef} from "react";
import styles from "./Loader.module.css";
import lottie from "lottie-web";

/* Page loader on hard / first load */
function Loader({firstTime, leave, setLoaderIsLoaded, pageIsLoaded}) {
  /* Load animation */
  const [percentage, setPercentage] = useState(0);
  const [dot, setDot] = useState("");
  const dotTimer = useRef(null);
  const percentageTimer = useRef(null);

  useEffect(() => {
    if (percentage >= 80 && !pageIsLoaded) {
      setPercentage(80);
    }

    if (percentage >= 100) {
      clearInterval(percentageTimer.current);
      setTimeout(() => {
        clearInterval(dotTimer.current);
      }, 1000);
    }
  }, [percentage]);

  useEffect(() => {
    lottie.unfreeze();
  }, [pageIsLoaded]);

  useEffect(() => {
    if (dot === "....") {
      setDot("");
    }
  }, [dot]);

  useEffect(() => {
    /* Changing dots and loading percent */
    setTimeout(() => {
      dotTimer.current = setInterval(() => {
        setDot((e) => e + ".");
      }, 250);

      percentageTimer.current = setInterval(() => {
        setPercentage((e) => e + 10);
      }, 150);
    }, 400);

    /* Lottie Animation */
    const loaderAnimation = document.querySelector("#loaderAnimation");

    lottie.loadAnimation({
      container: loaderAnimation, // the dom element that will contain the animation
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: "/Loader/Animation/data.json", // the path to the animation json
    });
    lottie.freeze();

    /* Loader is loaded */
    setLoaderIsLoaded(true);

    return () => {
      clearInterval(dotTimer.current);
      clearInterval(percentageTimer.current);
    };
  }, []);
  return (
    <section
      className={
        !leave
          ? styles.loader
          : firstTime
          ? `${styles.loader} ${styles.leave}`
          : styles.none
      }
    >
      <Head>
        <link
          rel="preload"
          href="/Font/DesktopFonts/UntitledSans-Regular.otf"
          as="font"
          type="font/otf"
          fetchpriority="high"
          crossOrigin="anonymous"
        />
        {Array(14)
          .fill(0)
          .map((_, index) => (
            <link
              rel="preload"
              href={`/Loader/Animation/images/img_${index + 1}.png`}
              as="image"
              fetchpriority="high"
              key={index}
            />
          ))}
        <link
          rel="preload"
          href="/Loader/Animation/images/img_15.jpg"
          as="image"
          fetchpriority="high"
        />
        <link
          rel="preload"
          href="/Loader/Animation/images/img_0.jpg"
          as="image"
          fetchpriority="high"
        />
        <link
          rel="preload"
          href="/Loader/loading-line.svg"
          as="image"
          fetchpriority="high"
        />
      </Head>
      <div className={styles.loaderContainer}>
        {/* Moving decoration */}
        <div className={styles.loadingLine}>
          <div>
            <img src="/Loader/loading-line.svg" alt="Loading line" />
          </div>
          <div>
            <img src="/Loader/loading-line.svg" alt="Loading line" />
          </div>
        </div>
        <div className={styles.loadingDiv}>
          {/* Loader animation */}
          <div>
            <div id="loaderAnimation"></div>
            <div className={styles.loadingText}>
              <p id="loaderBuild">.tram/digital-designer/building {dot}</p>
              <p id="loaderPercent">loader::{percentage}%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Loader;
