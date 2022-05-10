import styles from "./BannerPannel.module.css";
import FadeInOnView from "/components/FadeInOnView/FadeInOnView";

/* Banner pannel with modulable images of any project page */
function BannerPannel(props) {
  return (
    <section className={styles.bannerPannel}>
      {/* Background image */}
      <FadeInOnView>
        <img
          className={styles.banner}
          src={`/Projets/${props.project.id}/BannerPannel.png`}
          alt="Second project banner"
        />
      </FadeInOnView>
      <div className={styles.pannel}>
        {/* Foreground image */}
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
