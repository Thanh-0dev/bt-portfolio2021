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
          <p>{props.about[0].title}</p>
          <p>{props.about[0].type}</p>
          <div>
            {Array(props.recap.length)
              .fill(null)
              .map((e, i) => (
                <p key={`recap-${i + 1}`}>{props.recap[i].text}</p>
              ))}
          </div>
        </div>
        <div className={styles.desc}>
          <p>
            Hi there.
            <br />I like to add flavor to every{" "}
            <span className={styles.underline}>digital experience</span> I work
            on, and have a sweet tooth for anything related to{" "}
            <span className={styles.underline}>interface</span>.
          </p>
          <p>
            {props.about[0].moreInfo1}
            <br />
            <br />
            {props.about[0].moreInfo2}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Info;
