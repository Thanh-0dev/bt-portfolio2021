import styles from "./BonusPannel.module.css";

function BonusPannel(props) {
  return (
    <section className={styles.bonusPannel}>
      <img src="/Projets/vall/vall-rectangle-3.png" alt="Project pannel 1" />
      <img src="/Projets/vall/vall-rectangle-4.png" alt="Project pannel 2" />
    </section>
  );
}

export default BonusPannel;
