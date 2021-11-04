import styles from "./Mockup.module.css";

function Mockup(props) {
  return (
    <section className={styles.mockup}>
      <img
        src={`/Projets/${props[0].project.id}/Mockup${props[1]}.png`}
        alt="Mockup"
      />
    </section>
  );
}

export default Mockup;
