import styles from "./Intro.module.css";
import FadeInOnView from "/components/FadeInOnView/FadeInOnView";

/* Intro section of the homepage */
function Intro() {
  return (
    <section className={styles.intro}>
      <FadeInOnView>
        <div className={styles.introContainer}>
          {/* Background decoration */}
          <div className={styles.blur}>
            <img src="/Icons habillage/Blur.png" alt="Blur" />
          </div>
          <div className={styles.flexRow}>
            {/* Presentation text */}
            <h1>Bich Trâm Pham</h1>
            <div>
              <p>
                /BASED
                <br />
                IN PARIS
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <h2>.digital designer</h2>
            <img
              className={styles.right}
              src="/Icons habillage/h1-line-home.svg"
              alt="Designer underline"
            />
          </div>
        </div>
      </FadeInOnView>
    </section>
  );
}

export default Intro;
