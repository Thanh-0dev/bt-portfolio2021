import Link from "next/link";
import styles from "./Project.module.css";

function Project(props) {
  return (
    <section className={styles.project}>
      <img
        className={styles.blur}
        src="./Icons habillage/Blur.png"
        alt="Blur"
      />
      <div className={styles.left}>
        <img
          className={styles.shadowLeft}
          src="./Image Home/ombre/ombre-all-left.png"
          alt="Shadows Left"
        />
        <div className={styles.secondProject}>
          <p className={styles.projectId}>02</p>
          <Link href="/project/2" passHref>
            <div className={styles.projectCard}></div>
          </Link>
          <img src="./Icons habillage/Cadre-1.svg" alt="Arrow" />
          <img src="./Icons habillage/Glass/Glass-3.svg" alt="Glass" />
          <p className={styles.projectTitle}>
            {props.children.projects[1]["name"]}
          </p>
          <p>
            {props.children.projects[1]["job"]}
            <br />
            {props.children.projects[1]["detail"]}
          </p>
        </div>
        <div className={styles.fourthProject}>
          <p className={styles.projectId}>04</p>
          <Link href="/project/4" passHref>
            <div className={styles.projectCard}></div>
          </Link>
          <img src="./Icons habillage/Cadre-3.svg" alt="Arrow" />
          <img src="./Icons habillage/Glass/Glass-5.svg" alt="Glass" />
          <p className={styles.projectTitle}>
            {props.children.projects[3]["name"]}
          </p>
          <p>
            {props.children.projects[3]["job"]}
            <br />
            {props.children.projects[3]["detail"]}
          </p>
        </div>
        <div className={styles.sixthProject}>
          <p className={styles.projectId}>06</p>
          <Link href="/project/6" passHref>
            <div className={styles.projectCard}></div>
          </Link>
          <img src="./Icons habillage/Cadre-5.svg" alt="Arrow" />
          <img src="./Icons habillage/Glass/Glass-7.svg" alt="Glass" />
          <p className={styles.projectTitle}>
            {props.children.projects[5]["name"]}
          </p>
          <p>
            {props.children.projects[5]["job"]}
            <br />
            {props.children.projects[5]["detail"]}
          </p>
        </div>
      </div>

      <div className={styles.right}>
        <img
          className={styles.shadowRight}
          src="./Image Home/ombre/ombre-all-right.png"
          alt="Shadows Right"
        />
        <div className={styles.thirdProject}>
          <p className={styles.projectId}>03</p>
          <div className={styles.projectCard}></div>
          <img src="./Icons habillage/Cadre-2.svg" alt="Arrow" />
          <img src="./Icons habillage/Glass/Glass-4.svg" alt="Glass" />
          <p className={styles.projectTitle}>
            {props.children.projects[2]["name"]}
          </p>
          <p>
            {props.children.projects[2]["job"]}
            <br />
            {props.children.projects[2]["detail"]}
          </p>
        </div>
        <div className={styles.fifthProject}>
          <p className={styles.projectId}>05</p>
          <div className={styles.projectCard}></div>
          <img src="./Icons habillage/Cadre-4.svg" alt="Arrow" />
          <img src="./Icons habillage/Glass/Glass-6.svg" alt="Glass" />
          <p className={styles.projectTitle}>
            {props.children.projects[4]["name"]}
          </p>
          <p>
            {props.children.projects[4]["job"]}
            <br />
            {props.children.projects[4]["detail"]}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Project;
