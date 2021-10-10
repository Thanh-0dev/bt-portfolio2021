import styles from "./BannerPannel.module.css";

function BannerPannel(props) {
  return (
    <section className={styles.bannerPannel}>
      <img
        className={styles.banner}
        src="/Projets/vall/Vall-projet-0.png"
        alt="Second project banner"
      />
      <div className={styles.pannel}>
        <img src="/Projets/vall/vall-rectangle-1.png" alt="Project pannel 1" />
        <img src="/Projets/vall/vall-rectangle-2.png" alt="Project pannel 2" />
      </div>
    </section>
  );
}

export default BannerPannel;
