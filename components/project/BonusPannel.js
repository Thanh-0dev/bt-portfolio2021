import styles from "./BonusPannel.module.css";

function BonusPannel(props) {
  return (
    <section className={styles.bonusPannel}>
      <img
        src={`/Projets/${props.children.project.id}/Pannel3.png`}
        alt="Project pannel 1"
      />
      <img
        src={`/Projets/${props.children.project.id}/Pannel4.png`}
        alt="Project pannel 2"
      />
    </section>
  );
}

export default BonusPannel;
