import styles from "./BannerPannel.module.css";
import FadeInOnView from "/components/FadeInOnView";

function BannerPannel(props) {
  return (
    <section className={styles.bannerPannel}>
      <FadeInOnView>
        <img
          className={styles.banner}
          src={`/Projets/${props.project.id}/BannerPannel.png`}
          alt="Second project banner"
        />
      </FadeInOnView>
      <div className={styles.pannel}>
        <FadeInOnView>
          <img
            src={`/Projets/${props.project.id}/Pannel1.png`}
            alt="Project pannel 1"
          />
        </FadeInOnView>
        <FadeInOnView>
          <img
            src={`/Projets/${props.project.id}/Pannel2.png`}
            alt="Project pannel 2"
          />
        </FadeInOnView>
      </div>
    </section>
  );
}

export default BannerPannel;
