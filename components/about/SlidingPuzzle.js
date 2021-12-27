import {useEffect} from "react";
import styles from "./SlidingPuzzle.module.css";
import lottie from "lottie-web";

function SlidingPuzzle() {
  useEffect(() => {
    /* Lottie Animation */
    const aboutAnimation = document.querySelector("#slidingPuzzleAnimation");

    lottie.loadAnimation({
      container: aboutAnimation, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/Image About/Animation/data.json", // the path to the animation json
    });
  }, []);
  return (
    <section className={styles.slidingPuzzle}>
      <img src="/Icons habillage/Blur.png" alt="Blur" />
      <div id="slidingPuzzleAnimation"></div>
    </section>
  );
}

export default SlidingPuzzle;
