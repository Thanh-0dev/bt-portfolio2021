import styles from "./SideBySide.module.css";

/* Text and image sibe by side section of any project page */
function SideBySide(props) {
  return (
    <section className={styles.sideBySide}>
      {/* Left side image */}
      <img src={`/Projets/${props.project.id}/Side.png`} alt="Statistics" />
      {/* Right side text */}
      <div>
        <p>{props.project.aside}</p>
      </div>
    </section>
  );
}

export default SideBySide;
