import Link from "next/link";
import styles from "./Banner.module.css";

function Banner(props) {
  return (
    <section className={styles.banner}>
      <img
        className={styles.glassOne}
        src="/Icons habillage/Glass/Glass-1.svg"
        alt="Glass1"
      />
      <img
        className={styles.glassTwo}
        src="/Icons habillage/Glass/Glass-2.svg"
        alt="Glass2"
      />
      <img className={styles.blur} src="/Icons habillage/Blur.png" alt="Blur" />
      <p className={styles.projectId}>01</p>
      <div className={styles.bannerRow}>
        <img
          className={styles.arrow}
          src="Icons habillage/Arrow.svg"
          alt="Arrow"
        />
        <div className={styles.bannerColumn}>
          <Link href="/project/1">
            <div className={styles.projectImg}></div>
          </Link>
          <p className={styles.title}>{props.children.projects[0]["name"]}</p>
          <p>
            {props.children.projects[0]["job"]}
            <br />
            {props.children.projects[0]["detail"]}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
