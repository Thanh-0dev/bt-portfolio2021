import styles from "./Info.module.css";
import FadeInOnView from "/components/FadeInOnView";

function Info(props) {
  return (
    <FadeInOnView>
      <section className={styles.info}>
        <div className={styles.adjectives}>
          {Array(props.adj.length)
            .fill(null)
            .map((e, i) => (
              <p key={`adj-${i + 1}`}>{props.adj[i].adj}</p>
            ))}
        </div>
        <p>{props.project.info}</p>
      </section>
    </FadeInOnView>
  );
}

export default Info;
