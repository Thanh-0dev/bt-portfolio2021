import Head from "next/head";
import {useEffect} from "react";
import styles from "./Loader.module.css";
import Image from "next/image";

function Loader() {
  useEffect(() => {
    const buildText = document.getElementById("loaderBuild");
    const percentText = document.getElementById("loaderPercent");
    let percent = 0;
    let dot = "";
    let dotInterval = setInterval(() => {
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
        clearInterval(dotInterval);
      }
    }, 100);
  }, []);
  return (
    <section className={styles.loader}>
      <Head>
        <link rel="preload" href="/Loader/loading-image.jpeg" as="image" />
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
            <Image
              src="/Loader/loading-image.jpeg"
              alt="Loading image"
              width={260}
              height={260}
              priority
            />
            <div className={styles.loadingText}>
              <p id="loaderBuild">.tram/digital-designer/building </p>
              <p id="loaderPercent">loader::0%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Loader;
