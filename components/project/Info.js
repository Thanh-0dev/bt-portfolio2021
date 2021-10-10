import styles from "./Info.module.css";

function Info(props) {
  return (
    <section className={styles.info}>
      <p>
        a touch of eccentricity,
        <br />
        kinda flashy,
        <br />
        open-minded.
      </p>
      <p>
        Their logo being a combination of electric colors, the totality of the
        brand has been thought to integrate the atmosphere depicted by it. So we
        decided to explore a streetwear, casual environment that could integrate
        this color palette - giving a youngfull image to Valls overall.
      </p>
    </section>
  );
}

export default Info;
