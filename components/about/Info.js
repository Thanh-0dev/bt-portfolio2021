import styles from "./Info.module.css";

function Info(props) {
  return (
    <section className={styles.info}>
      <img src="/Icons habillage/Arrow.svg" alt="Arrow" />
      <div className={styles.flex}>
        <img
          src="/Icons habillage/0-glass-projet/projet-glass-1.svg"
          alt="Glass"
        />
        <div className={styles.title}>
          <p>00.Bich Trâm Pham (24mo) </p>
          <p>type: FRENCH JUNIOR digital-designer/</p>
          <p>
            &gt;create 14.12.2020
            <br />
            &gt;open: 1xp oversea
            <br />
            &gt;environment known:
            <br />
            startup & agency (2)
          </p>
        </div>
        <div className={styles.desc}>
          <p>
            Hi there.
            <br />I like to add flavor to every{" "}
            <span className={styles.underline}>digital experience</span>.
            <br />I work on and have a sweet tooth for anything related to{" "}
            <span className={styles.underline}>interface</span>.
          </p>
          <p>
            More informations: Over the past few years, thanks to various
            exchanges with caring and talented people, I have grown and learned
            as much as a designer as a person.
            <br />
            <br /> Through my experiences, I have been able to clarify and be
            more aware of the type of environment and the mindset I strive for
            in a company.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Info;
