import styles from "./SlidingPuzzle.module.css";

function SlidingPuzzle(props) {
  return (
    <section className={styles.slidingPuzzle}>
      <img src="/Icons habillage/Blur.png" alt="Blur" />
      <img
        src="/Image About/about-1.png"
        alt="Sliding puzzle of Bich-Tram's photo"
      />
    </section>
  );
}

export default SlidingPuzzle;
