import styles from "./BonusPannel.module.css";
import FadeInOnView from "/components/FadeInOnView";

function BonusPannel(props) {
  return (
    <section className={styles.bonusPannel}>
      <FadeInOnView>
        <img
          src={`/Projets/${props.project.id}/Pannel3.png`}
          alt="Project pannel 1"
        />
      </FadeInOnView>
      <FadeInOnView>
        <img
          src={`/Projets/${props.project.id}/Pannel4.png`}
          alt="Project pannel 2"
        />
      </FadeInOnView>
    </section>
  );
}

export default BonusPannel;
