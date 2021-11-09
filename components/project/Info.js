import styles from "./Info.module.css";

function Info(props) {
  return (
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
  );
}

export default Info;
