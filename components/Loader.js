import {useEffect} from "react";
import styles from "./Loader.module.css";

function Loader(props) {
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
    }, 300);
    let percentInterval = setInterval(() => {
      if (percent < 100) {
        percent += 4;
        percentText.innerHTML = `loader::${percent}%`;
      } else {
        clearInterval(percentInterval);
        clearInterval(dotInterval);
      }
    }, 100);
  }, []);
  return (
    <section className={styles.loader}>
      <div className={styles.loadingLine}>
        <div>
          <img src="/Loader/loading-line.svg" alt="Loading line" />
        </div>
        <div>
          <img src="/Loader/loading-line.svg" alt="Loading line" />
        </div>
      </div>
      <div className={styles.loadingDiv}>
        <img src="/Loader/loading-image.jpeg" alt="Loading image" />
        <div className={styles.loadingText}>
          <p id="loaderBuild">.tram/digital-designer/building </p>
          <p id="loaderPercent">loader::0%</p>
        </div>
      </div>
    </section>
  );
}

export default Loader;
