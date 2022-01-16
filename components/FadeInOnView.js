import {InView} from "react-intersection-observer";
import styles from "./FadeInOnView.module.css";

function FadeInOnView(props) {
  return (
    <InView
      threshold={0}
      triggerOnce={true}
      onChange={(inView, entry) => {
        if (inView) {
          entry.target.classList.add(styles.fadeIn);
        }
      }}
      className={styles.initial}
    >
      {props.children}
    </InView>
  );
}

export default FadeInOnView;
