import styles from "./Flag.module.css";

function Flag(props) {
  return (
    <section className={styles.flag}>
      <img
        src={`/Projets/${props.children.project.id}/Flag.png`}
        alt="Project example image"
      />
    </section>
  );
}

export default Flag;
