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
          <div className={styles.projectCard}></div>
          <img src="./Icons habillage/Cadre-1.svg" alt="Arrow" />
          <img src="./Icons habillage/Glass/Glass-3.svg" alt="Glass" />
          <p className={styles.projectTitle}>.Growth with Chance</p>
          <p>
            digital-designer/
            <br />
            France/2021/
          </p>
        </div>
        <div className={styles.fourthProject}>
          <p className={styles.projectId}>04</p>
          <div className={styles.projectCard}></div>
          <img src="./Icons habillage/Cadre-3.svg" alt="Arrow" />
          <img src="./Icons habillage/Glass/Glass-5.svg" alt="Glass" />
          <p className={styles.projectTitle}>.あ, か, さ, kanamoji</p>
          <p>
            digital-designer/
            <br />
            japan/2019/
          </p>
        </div>
        <div className={styles.sixthProject}>
          <p className={styles.projectId}>06</p>
          <div className={styles.projectCard}></div>
          <img src="./Icons habillage/Cadre-5.svg" alt="Arrow" />
          <img src="./Icons habillage/Glass/Glass-7.svg" alt="Glass" />
          <p className={styles.projectTitle}>.workInProgress</p>
          <p>
            trying-hard/
            <br />
            house/always
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
            .Smatch, matching <br />
            student x school
          </p>
          <p>
            digital-designer/
            <br />
            france/2020/
          </p>
        </div>
        <div className={styles.fifthProject}>
          <p className={styles.projectId}>05</p>
          <div className={styles.projectCard}></div>
          <img src="./Icons habillage/Cadre-4.svg" alt="Arrow" />
          <img src="./Icons habillage/Glass/Glass-6.svg" alt="Glass" />
          <p className={styles.projectTitle}>.株式会社カチ Kati Inc.</p>
          <p>
            digital-designer/
            <br />
            japan/2019/
          </p>
        </div>
      </div>
    </section>
  );
}

export default Project;
