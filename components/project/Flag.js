import styles from "./Flag.module.css";
import FadeInOnView from "/components/FadeInOnView";

function Flag(props) {
  return (
    <section className={styles.flag}>
      <FadeInOnView>
        <img
          src={`/Projets/${props.project.id}/Flag.png`}
          alt="Project example image"
        />
      </FadeInOnView>
    </section>
  );
}

export default Flag;
