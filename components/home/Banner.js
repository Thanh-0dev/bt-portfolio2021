import styles from "./Banner.module.css";

function Banner(props) {
  return (
    <section className={styles.banner}>
      <img
        className={styles.glassOne}
        src="/Icons habillage/Glass/Glass-1.svg"
        alt="Glass1"
      />
      <img
        className={styles.glassTwo}
        src="/Icons habillage/Glass/Glass-2.svg"
        alt="Glass2"
      />
      <p className={styles.projectId}>01</p>
      <div className={styles.bannerRow}>
        <img
          className={styles.arrow}
          src="Icons habillage/Arrow.svg"
          alt="Arrow"
        />
        <div className={styles.bannerColumn}>
          <div className={styles.projectImg}></div>
          <p className={styles.title}>.Vall’s Artwork Streaming Service</p>
          <p>
            WEB-DESIGNER/ <br />
            JAPAN/2019/
          </p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
