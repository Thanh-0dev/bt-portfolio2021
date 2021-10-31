import styles from "./Mockup.module.css";

function Mockup(props) {
  return (
    <section className={styles.mockup}>
      <img
        src={`/Projets/${props.children[0].project.id}/Mockup${props.children[1]}.png`}
        alt="Mockup"
      />
    </section>
  );
}

export default Mockup;
