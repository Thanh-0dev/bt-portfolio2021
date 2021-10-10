import styles from "./SideBySide.module.css";

function SideBySide(props) {
  return (
    <section className={styles.sideBySide}>
      <img src="/Projets/smatch/smatch-6.png" alt="Statistics" />
      <div>
        <p>
          Our business model is based on the transparent exposure of schools and
          trainings where they are based on a pre-established guideline. The
          leads arriving at Smatch are thus mostly qualified, motivated and in
          line with the Ideal Customer persona defined by the formation /
          school.
          <br />
          <br />A data driven dashboard will allow you to manage your showcase
          and your leads.
        </p>
      </div>
    </section>
  );
}

export default SideBySide;
