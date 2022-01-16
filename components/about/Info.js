import styles from "./Info.module.css";
import FadeInOnView from "/components/FadeInOnView";

function Info(props) {
  return (
    <section className={styles.info}>
      <FadeInOnView>
        <img
          className={styles.arrow}
          src="/Icons habillage/Arrow.svg"
          alt="Arrow"
        />
      </FadeInOnView>
      <FadeInOnView>
        <img
          className={styles.glass}
          src="/Icons habillage/0-glass-projet/projet-glass-1.svg"
          alt="Glass"
        />
      </FadeInOnView>
      <div className={styles.flex}>
        <div className={styles.title}>
          <FadeInOnView>
            <h1>{props.about[0].title}</h1>
          </FadeInOnView>
          <FadeInOnView>
            <p>{props.about[0].type}</p>
          </FadeInOnView>
          <FadeInOnView>
            <div>
              {Array(props.recap.length)
                .fill(null)
                .map((e, i) => (
                  <p key={`recap-${i + 1}`}>{props.recap[i].text}</p>
                ))}
            </div>
          </FadeInOnView>
        </div>
        <div className={styles.desc}>
          <FadeInOnView>
            <h2>
              Hi there.
              <br />I like to add flavor to every{" "}
              <span className={styles.underline}>digital experience</span> I
              work on, and have a sweet tooth for anything related to{" "}
              <span className={styles.underline}>interface</span>.
            </h2>
          </FadeInOnView>
          <FadeInOnView>
            <p>
              {props.about[0].moreInfo1}
              <br />
              <br />
              {props.about[0].moreInfo2}
            </p>
          </FadeInOnView>
        </div>
      </div>
    </section>
  );
}

export default Info;
