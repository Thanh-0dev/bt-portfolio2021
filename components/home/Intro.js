import styles from "./Intro.module.css";

function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.introContainer}>
        <div className={styles.blur}>
          <img src="/Icons habillage/Blur.png" alt="Blur" />
        </div>
        <div className={styles.flexRow}>
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
    </section>
  );
}

export default Intro;
