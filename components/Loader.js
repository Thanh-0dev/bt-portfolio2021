import Head from "next/head";
import {useEffect} from "react";
import styles from "./Loader.module.css";
import lottie from "lottie-web";

function Loader(props) {
  useEffect(() => {
    const buildText = document.getElementById("loaderBuild");
    const percentText = document.getElementById("loaderPercent");
    let percent = 0;
    let dot = "";
    setTimeout(() => {
      const dotInterval = setInterval(() => {
        if (dot === "...") {
          dot = "";
        } else {
          dot += ".";
        }
        buildText.innerHTML = `.tram/digital-designer/building ${dot}`;
      }, 250);
      let percentInterval = setInterval(() => {
        if (percent < 100) {
          percent += 10;
          percentText.innerHTML = `loader::${percent}%`;
        } else {
          clearInterval(percentInterval);
          window.addEventListener("load", () => {
            setTimeout(() => {
              clearInterval(dotInterval);
            }, 1000);
          });
        }
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
  }, []);
  return (
    <section
      className={
        !props[1]
          ? styles.loader
          : props[0]
          ? [styles.loader, styles.leave].join(" ")
          : styles.none
      }
    >
      <Head>
        <link
          rel="preload"
          href="/Font/DesktopFonts/UntitledSans-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link rel="preload" href="/Loader/loading-image.jpeg" as="image" />
        <link rel="preload" href="/Loader/loading-line.svg" as="image" />
      </Head>
      <div className={styles.loaderContainer}>
        <div className={styles.loadingLine}>
          <div>
            <img src="/Loader/loading-line.svg" alt="Loading line" />
          </div>
          <div>
            <img src="/Loader/loading-line.svg" alt="Loading line" />
          </div>
        </div>
        <div className={styles.loadingDiv}>
          <div>
            <div id="loaderAnimation"></div>
            <div className={styles.loadingText}>
              <p id="loaderBuild">.tram/digital-designer/building </p>
              <p id="loaderPercent">loader::0%</p>
            </div>
          </div>
        </div>
      </div>
      <script src="/components/lottie.js" type="text/javascript"></script>
    </section>
  );
}

export default Loader;
