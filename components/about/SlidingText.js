import styles from "./SlidingText.module.css";

function SlidingText(props) {
  return (
    <section className={styles.slidingText}>
      <img src="/Image About/habillage/about-lines.svg" alt="About lines" />
      <div className={styles.scroll}>
        <div>
          <p>
            KPI & Data driven
            <img src="/Image About/habillage/dash.svg" alt="Dash" />
            Explore, test, optimize
            <img src="/Image About/habillage/dash.svg" alt="Dash" />
            Research & docs
            <img src="/Image About/habillage/dash.svg" alt="Dash" />
          </p>
        </div>
        <div>
          <p>
            KPI & Data driven
            <img src="/Image About/habillage/dash.svg" alt="Dash" />
            Explore, test, optimize
            <img src="/Image About/habillage/dash.svg" alt="Dash" />
            Research & docs
            <img src="/Image About/habillage/dash.svg" alt="Dash" />
          </p>
        </div>
      </div>
      <img src="/Image About/habillage/about-lines-2.svg" alt="About lines" />
    </section>
  );
}

export default SlidingText;
