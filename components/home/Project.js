import ActiveLink from "/components/ActiveLink";
import styles from "./Project.module.css";

function Project(props) {
  const mouseEnter = (id) => {
    document.getElementById(id).classList.add(styles.hover);
    document.getElementById(id).classList.remove(styles.unhover);
  };

  const mouseLeave = (id) => {
    document.getElementById(id).classList.add(styles.unhover);
    document.getElementById(id).classList.remove(styles.hover);
  };
  return (
    <section className={styles.project}>
      <div className={styles.projectContainer}>
        <div className={styles.blur}>
          <img src="/Icons habillage/Blur.png" alt="Blur" />
        </div>
        <div className={styles.left}>
          <img
            className={styles.shadowLeft}
            src="/Image Home/ombre/ombre-all-left.png"
            alt="Shadows Left"
          />
          <div className={styles.secondProject}>
            <p className={styles.projectId}>02</p>
            <svg
              viewBox="0 0 404 716"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <ActiveLink href="/project/2/">
                <path
                  onMouseEnter={() => {
                    mouseEnter("projectCard1");
                  }}
                  onMouseLeave={() => {
                    mouseLeave("projectCard1");
                  }}
                  d="M403 39.527L32.6456 1L1.00024 673.471L380.049 715L403 39.527Z"
                  fill="black"
                  fillOpacity="0"
                />
              </ActiveLink>
            </svg>
            <div className={styles.projectCard}>
              <img
                src="/Image Home/2.jpeg"
                alt="First project image"
                id="projectCard1"
                className={styles.projectImg}
              />
            </div>
            <img src="/Icons habillage/Cadre-1.svg" alt="Arrow" />
            <img src="/Icons habillage/Glass/Glass-3.svg" alt="Glass" />
            <ActiveLink href="/project/2">
              <h2 className={styles.projectTitle}>
                {props.projects[1]["name"]}
              </h2>
              <p>
                {props.projects[1]["job"]}
                <br />
                {props.projects[1]["detail"]}
              </p>
            </ActiveLink>
          </div>
          <div className={styles.fourthProject}>
            <p className={styles.projectId}>04</p>
            <svg
              viewBox="0 0 405 716"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <ActiveLink href="/project/4/">
                <path
                  onMouseEnter={() => {
                    mouseEnter("projectCard3");
                  }}
                  onMouseLeave={() => {
                    mouseLeave("projectCard3");
                  }}
                  d="M404 39.5206L32.7242 0.993652L1.00012 673.465L380.991 714.994L404 39.5206Z"
                  fill="black"
                  fillOpacity="0"
                />
              </ActiveLink>
            </svg>
            <div className={styles.projectCard}>
              <img
                src="/Image Home/4.jpeg"
                alt="Fourth project image"
                id="projectCard3"
                className={styles.projectImg}
              />
            </div>
            <img src="/Icons habillage/Cadre-3.svg" alt="Arrow" />
            <img src="/Icons habillage/Glass/Glass-5.svg" alt="Glass" />
            <ActiveLink href="/project/4">
              <h2 className={styles.projectTitle}>
                {props.projects[3]["name"]}
              </h2>
              <p>
                {props.projects[3]["job"]}
                <br />
                {props.projects[3]["detail"]}
              </p>
            </ActiveLink>
          </div>
          {/* <div className={styles.sixthProject}>
            <p className={styles.projectId}>06</p>
            <svg
              viewBox="0 0 405 716"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <ActiveLink href="/project/6/">
                <path
                  onMouseEnter={() => {
                    mouseEnter("projectCard5");
                  }}
                  onMouseLeave={() => {
                    mouseLeave("projectCard5");
                  }}
                  d="M404.001 39.5275L32.7255 1.00049L1.00146 673.471L380.993 715L404.001 39.5275Z"
                  fill="black"
                  fillOpacity="0"
                />
              </ActiveLink>
            </svg>
            <div className={styles.projectCard}>
              <img
                src="/Image Home/6.jpeg"
                alt="Sixth project image"
                id="projectCard5"
                className={styles.projectImg}
              />
            </div>
            <img src="/Icons habillage/Cadre-5.svg" alt="Arrow" />
            <img src="/Icons habillage/Glass/Glass-7.svg" alt="Glass" />
            <ActiveLink href="/project/6">
              <h2 className={styles.projectTitle}>{props.projects[5]["name"]}</h2>
              <p>
                {props.projects[5]["job"]}
                <br />
                {props.projects[5]["detail"]}
              </p>
            </ActiveLink>
          </div> */}
        </div>

        <div className={styles.right}>
          <img
            className={styles.shadowRight}
            src="/Image Home/ombre/ombre-all-right.png"
            alt="Shadows Right"
          />
          <div className={styles.thirdProject}>
            <p className={styles.projectId}>03</p>
            <svg
              viewBox="0 0 406 716"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <ActiveLink href="/project/3/">
                <path
                  onMouseEnter={() => {
                    mouseEnter("projectCard2");
                  }}
                  onMouseLeave={() => {
                    mouseLeave("projectCard2");
                  }}
                  d="M0.997559 39.5L373.195 1L404.998 673L24.0633 714.5L0.997559 39.5Z"
                  fill="black"
                  fillOpacity="0"
                />
              </ActiveLink>
            </svg>
            <div className={styles.projectCard}>
              <img
                src="/Image Home/3.jpeg"
                alt="Third project image"
                id="projectCard2"
                className={styles.projectImg}
              />
            </div>
            <img src="/Icons habillage/Cadre-2.svg" alt="Arrow" />
            <img src="/Icons habillage/Glass/Glass-4.svg" alt="Glass" />
            <ActiveLink href="/project/3">
              <h2 className={styles.projectTitle}>
                {props.projects[2]["name"]}
              </h2>
              <p>
                {props.projects[2]["job"]}
                <br />
                {props.projects[2]["detail"]}
              </p>
            </ActiveLink>
          </div>
          <div className={styles.fifthProject}>
            <p className={styles.projectId}>05</p>
            <svg
              viewBox="0 0 406 716"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <ActiveLink href="/project/5/">
                <path
                  onMouseEnter={() => {
                    mouseEnter("projectCard4");
                  }}
                  onMouseLeave={() => {
                    mouseLeave("projectCard4");
                  }}
                  d="M1 39.5L373.197 1L405 673L24.0658 714.5L1 39.5Z"
                  fill="black"
                  fillOpacity="0"
                />
              </ActiveLink>
            </svg>
            <div className={styles.projectCard}>
              <img
                src="/Image Home/5.jpeg"
                alt="Fifth project image"
                id="projectCard4"
                className={styles.projectImg}
              />
            </div>
            <img src="/Icons habillage/Cadre-4.svg" alt="Arrow" />
            <img src="/Icons habillage/Glass/Glass-6.svg" alt="Glass" />
            <ActiveLink href="/project/5">
              <h2 className={styles.projectTitle}>
                {props.projects[4]["name"]}
              </h2>
              <p>
                {props.projects[4]["job"]}
                <br />
                {props.projects[4]["detail"]}
              </p>
            </ActiveLink>
          </div>
        </div>
        <div className={styles.mobile}>
          <img src="/Mobile/mobile-cadre.svg" alt="Mobile project line" />
          <img src="/Mobile/mobile-cadre-2.svg" alt="Mobile project line" />
          <img src="/Mobile/mobile-cadre.svg" alt="Mobile project line" />
          <img src="/Mobile/mobile-cadre-2.svg" alt="Mobile project line" />
        </div>
      </div>
    </section>
  );
}

export default Project;
