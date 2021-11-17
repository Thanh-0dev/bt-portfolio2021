import styles from "./Banner.module.css";
import ActiveLink from "/components/ActiveLink";

function Banner(props) {
  const mouseEnter = (id) => {
    document.getElementById(id).classList.add(styles.hover);
    document.getElementById(id).classList.remove(styles.unhover);
  };

  const mouseLeave = (id) => {
    document.getElementById(id).classList.add(styles.unhover);
    document.getElementById(id).classList.remove(styles.hover);
  };
  return (
    <section className={styles.banner}>
      <div className={styles.bannerContainer}>
        <ActiveLink href="/project/1/">
          <div
            className={styles.projectAction}
            onMouseEnter={() => {
              mouseEnter("projectBanner");
            }}
            onMouseLeave={() => {
              mouseLeave("projectBanner");
            }}
          ></div>
        </ActiveLink>
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
        <div className={styles.blur}>
          <img src="/Icons habillage/Blur.png" alt="Blur" />
        </div>
        <p className={styles.projectId}>01</p>
        <div className={styles.bannerRow}>
          <img
            className={styles.arrow}
            src="/Icons habillage/Arrow.svg"
            alt="Arrow"
          />
          <div className={styles.bannerColumn}>
            <div className={styles.projectDiv}>
              <img
                src="/Image Home/1.jpeg"
                alt="Project banner image"
                className={styles.projectImg}
                id="projectBanner"
              />
            </div>
            <ActiveLink href="/project/1">
              <h2 className={styles.title}>{props.projects[0]["name"]}</h2>
              <h1>{props.projects[0]["job"]}</h1>
              <p>{props.projects[0]["detail"]}</p>
            </ActiveLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
