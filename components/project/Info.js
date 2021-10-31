import {useEffect} from "react";
import styles from "./Info.module.css";

function Info(props) {
  useEffect(() => {
    let adjectives = "";
    for (let nbAdj in props.children.adj) {
      adjectives += props.children.adj[nbAdj].adj + "<br />";
    }
    document.getElementById("summary").innerHTML = adjectives;
  });
  return (
    <section className={styles.info}>
      <p id="summary"></p>
      <p>{props.children.project.info}</p>
    </section>
  );
}

export default Info;
