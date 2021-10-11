import {useEffect} from "react";
import styles from "./Footer.module.css";

function Footer(props) {
  useEffect(() => {
    const scrollTimelineFolder = document.getElementById("project");
    scrollTimelineFolder.addEventListener("wheel", (event) => {
      event.preventDefault();
      scrollTimelineFolder.scrollLeft += event.deltaY;
      console.log(scrollTimelineFolder.scrollLeft);
    });
  });
  return (
    <section className={styles.footer}>
      <img
        src="/Icons habillage/0-glass-projet/projet-glass-3.svg"
        alt="Glass footer"
      />
      <img src="/Icons habillage/footer-projet.svg" alt="Footer line" />
      <div className={styles.timelineFolder}>
        <p>.timeline folder</p>
        <div className={styles.fade}></div>
        <div id="project" className={styles.project}>
          <div>
            <p className={styles.detail}>2021</p>
            <p className={styles.name}>chance/</p>
            <p className={styles.detail}>
              details::jobs
              <br />
              weight::2 details
            </p>
          </div>
          <div>
            <p className={styles.detail}>2020</p>
            <p className={styles.name}>smatch/</p>
            <p className={styles.detail}>
              details::school counselling
              <br />
              weight::6 months
            </p>
          </div>
          <div>
            <p className={styles.detail}>2019</p>
            <p className={styles.name}>kanamoji/</p>
            <p className={styles.detail}>
              details::art interior
              <br />
              weight::3 months
            </p>
          </div>
          <div>
            <p className={styles.detail}>2019</p>
            <p className={styles.name}>kati-inc/</p>
            <p className={styles.detail}>
              details::fashion marketing
              <br />
              weight::3 months
            </p>
          </div>
          <div>
            <p className={styles.detail}>2019</p>
            <p className={styles.name}>vall/</p>
            <p className={styles.detail}>
              details::art
              <br />
              weight::3 months
            </p>
          </div>
          <div>
            <p className={styles.detail}>always</p>
            <p className={styles.name}>wip/</p>
            <p className={styles.detail}>
              details::labs
              <br />
              weight::hobbies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
