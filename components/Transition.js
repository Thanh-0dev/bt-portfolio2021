import styles from "./Transition.module.css";

/* Page transition animation on page change */
function Transition() {
  return (
    <section className={styles.transition}>
      <div className={styles.blur}></div>
      <div className={styles.blur}></div>
    </section>
  );
}

export default Transition;
