import styles from "./SideBySide.module.css";

function SideBySide(props) {
  return (
    <section className={styles.sideBySide}>
      <img
        src={`/Projets/${props.children.project.id}/Side.png`}
        alt="Statistics"
      />
      <div>
        <p>{props.children.project.aside}</p>
      </div>
    </section>
  );
}

export default SideBySide;
