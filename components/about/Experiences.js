import styles from "./Experiences.module.css";
import FadeInOnView from "/components/FadeInOnView";

function Experiences(props) {
  return (
    <section className={styles.experiences}>
      <FadeInOnView>
        <img src="/Image About/about-2.png" alt="Photo of France" />
        <img src="/Image About/about-3.png" alt="Photo of Japan" />
      </FadeInOnView>
      <div className={styles.flex}>
        <FadeInOnView>
          <h3>Experiences</h3>
        </FadeInOnView>
        {Array(props.exp.length)
          .fill(null)
          .map((e, i) => (
            <FadeInOnView key={`exp-${i + 1}`}>
              <div className={styles.exp} key={`exp-${i + 1}`}>
                <p>{props.exp[i].role}</p>
                <p>{props.exp[i].detail}</p>
              </div>
            </FadeInOnView>
          ))}
      </div>
    </section>
  );
}

export default Experiences;
