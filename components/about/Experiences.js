import styles from "./Experiences.module.css";

function Experiences(props) {
  return (
    <section className={styles.experiences}>
      <img src="/Image About/about-2.png" alt="Photo of France" />
      <img src="/Image About/about-3.png" alt="Photo of Japan" />
      <div className={styles.flex}>
        <p>Experiences</p>
        <div className={styles.exp}>
          <p>UX UI Designer/Growth & product team</p>
          <p>at @Chance/French/Startup/2020-2022</p>
        </div>
        <div className={styles.exp}>
          <p>Designer & frond-end developer/</p>
          <p>at @Garden Eight/Japan/Digital Agency/2019</p>
        </div>
        <div className={styles.exp}>
          <p>Art director junior/</p>
          <p>at @WNP/Ads agency/2018</p>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
