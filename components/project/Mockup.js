import styles from "./Mockup.module.css";
import FadeInOnView from "/components/FadeInOnView/FadeInOnView";

/* Mockup of any project page */
function Mockup(props) {
  return (
    <section className={styles.mockup}>
      <FadeInOnView>
        <img
          src={`/Projets/${props[0].project.id}/Mockup${props[1]}.png`}
          alt="Mockup"
        />
      </FadeInOnView>
    </section>
  );
}

export default Mockup;
