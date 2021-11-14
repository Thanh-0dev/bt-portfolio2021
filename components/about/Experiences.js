import styles from "./Experiences.module.css";

function Experiences(props) {
  return (
    <section className={styles.experiences}>
      <img src="/Image About/about-2.png" alt="Photo of France" />
      <img src="/Image About/about-3.png" alt="Photo of Japan" />
      <div className={styles.flex}>
        <h3>Experiences</h3>
        {Array(props.exp.length)
          .fill(null)
          .map((e, i) => (
            <div className={styles.exp} key={`exp-${i + 1}`}>
              <p>{props.exp[i].role}</p>
              <p>{props.exp[i].detail}</p>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Experiences;
