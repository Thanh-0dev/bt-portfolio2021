import {useEffect} from "react";
import styles from "./SlidingPuzzle.module.css";
import lottie from "lottie-web";
import FadeInOnView from "/components/FadeInOnView";

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
      <FadeInOnView>
        <img src="/Icons habillage/Blur.png" alt="Blur" />
        <div id="slidingPuzzleAnimation"></div>
      </FadeInOnView>
    </section>
  );
}

export default SlidingPuzzle;
