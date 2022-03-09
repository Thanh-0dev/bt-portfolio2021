import styles from "./Footer.module.css";
import ActiveLink from "/components/ActiveLink";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

/* Footer section of any project page */
function Footer(props) {
  return (
    <section className={styles.footer}>
      {/* Background decoration */}
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
        {/* Slider with all projects */}
        <Splide
          options={{
            type: "loop",
            perPage: 1,
            perMove: 1,
            gap: "140px",
            speed: 1000,
            autoWidth: true,
            wheel: true,
            classes: {
              arrows: `${styles.none}`,
              pagination: `${styles.none}`,
            },
          }}
        >
          <SplideSlide>
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
          </SplideSlide>
          <SplideSlide>
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
          </SplideSlide>
          <SplideSlide>
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
          </SplideSlide>
          <SplideSlide>
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
          </SplideSlide>
          <SplideSlide>
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
          </SplideSlide>
          {/* <div>
            <p className={styles.detail}>always</p>
            <p className={styles.name}>wip/</p>
            <p className={styles.detail}>
              details::labs
              <br />
              weight::hobbies
            </p>
          </div> */}
        </Splide>
      </div>
    </section>
  );
}

export default Footer;
