import styles from "./FirstMockup.module.css";
import FadeInOnView from "/components/FadeInOnView";

/* First mockup of any project page */
function FirstMockup(props) {
  return (
    <section className={styles.firstMockup}>
      <FadeInOnView>
        {/* Main mockup image */}
        <img
          src={`/Projets/${props.project.id}/Mockup1.png`}
          alt="First mockup"
        />
        {/* Background image */}
        <img
          src="/Icons habillage/0-glass-projet/projet-glass-2.svg"
          alt="Glass"
        />
      </FadeInOnView>
    </section>
  );
}

export default FirstMockup;
