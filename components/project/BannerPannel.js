import styles from "./BannerPannel.module.css";

function BannerPannel(props) {
  return (
    <section className={styles.bannerPannel}>
      <img
        className={styles.banner}
        src={`/Projets/${props.children.project.id}/BannerPannel.png`}
        alt="Second project banner"
      />
      <div className={styles.pannel}>
        <img
          src={`/Projets/${props.children.project.id}/Pannel1.png`}
          alt="Project pannel 1"
        />
        <img
          src={`/Projets/${props.children.project.id}/Pannel2.png`}
          alt="Project pannel 2"
        />
      </div>
    </section>
  );
}

export default BannerPannel;
