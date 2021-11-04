import styles from "./SideBySide.module.css";

function SideBySide(props) {
  return (
    <section className={styles.sideBySide}>
      <img src={`/Projets/${props.project.id}/Side.png`} alt="Statistics" />
      <div>
        <p>{props.project.aside}</p>
      </div>
    </section>
  );
}

export default SideBySide;
