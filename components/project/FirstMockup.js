import styles from "./FirstMockup.module.css";
import FadeInOnView from "/components/FadeInOnView";

function FirstMockup(props) {
  return (
    <section className={styles.firstMockup}>
      <FadeInOnView>
        <img
          src={`/Projets/${props.project.id}/Mockup1.png`}
          alt="First mockup"
        />
        <img
          src="/Icons habillage/0-glass-projet/projet-glass-2.svg"
          alt="Glass"
        />
      </FadeInOnView>
    </section>
  );
}

export default FirstMockup;
