import {useEffect} from "react";
import styles from "./Footer.module.css";
import ActiveLink from "/components/ActiveLink";

function Footer(props) {
  useEffect(() => {
    /* Scroll */
    const slider = document.getElementById("project");
    slider.addEventListener("wheel", (event) => {
      event.preventDefault();
      slider.scrollLeft += event.deltaY;
    });

    /* Drag */
    let isDown = false;
    let startX;
    let dragLeft;
    slider.addEventListener("mousedown", (event) => {
      isDown = true;
      startX = event.pageX - slider.offsetLeft;
      dragLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
    });
    slider.addEventListener("mousemove", (event) => {
      if (!isDown) return;
      event.preventDefault();
      const x = event.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = dragLeft - walk;
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
        <div className={styles.blur}>
          <img src="/Icons habillage/Blur.png" alt="Blur" />
        </div>
        <div id="project" className={styles.project}>
          <ActiveLink href="/project/2/">
            <div>
              <p className={styles.detail}>2021</p>
              <p className={styles.name}>chance/</p>
              <p className={styles.detail}>
                details::jobs
                <br />
                weight::2 details
              </p>
            </div>
          </ActiveLink>
          <ActiveLink href="/project/3/">
            <div>
              <p className={styles.detail}>2020</p>
              <p className={styles.name}>smatch/</p>
              <p className={styles.detail}>
                details::school counselling
                <br />
                weight::6 months
              </p>
            </div>
          </ActiveLink>
          <ActiveLink href="/project/4/">
            <div>
              <p className={styles.detail}>2019</p>
              <p className={styles.name}>kanamoji/</p>
              <p className={styles.detail}>
                details::art interior
                <br />
                weight::3 months
              </p>
            </div>
          </ActiveLink>
          <ActiveLink href="/project/5/">
            <div>
              <p className={styles.detail}>2019</p>
              <p className={styles.name}>kati-inc/</p>
              <p className={styles.detail}>
                details::fashion marketing
                <br />
                weight::3 months
              </p>
            </div>
          </ActiveLink>
          <ActiveLink href="/project/1/">
            <div>
              <p className={styles.detail}>2019</p>
              <p className={styles.name}>vall/</p>
              <p className={styles.detail}>
                details::art
                <br />
                weight::3 months
              </p>
            </div>
          </ActiveLink>
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
