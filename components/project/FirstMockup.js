import styles from "./FirstMockup.module.css";

function FirstMockup(props) {
  return (
    <section className={styles.firstMockup}>
      <img src="/Projets/vall/Vall-projet-2.png" alt="First mockup" />
      <img
        src="/Icons habillage/0-glass-projet/projet-glass-2.svg"
        alt="Glass"
      />
    </section>
  );
}

export default FirstMockup;
