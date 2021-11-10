import Head from "next/head";
import ActiveLink from "/components/ActiveLink";
import {useEffect} from "react";
import styles from "./Project.module.css";

/* Filter grayscale pour les hover -> pas de reload */
/* On mouseenter -> grayscale progressif none */
/* On mouseleave -> grayscale progressf */
function Project(props) {
  useEffect(() => {
    const action1 = document.getElementById("projectAction1");
    const card1 = document.getElementById("projectCard1");
    action1.addEventListener("mouseover", () => {
      card1.classList.add(styles.hover);
    });
    action1.addEventListener("mouseleave", () => {
      card1.classList.remove(styles.hover);
    });

    const action2 = document.getElementById("projectAction2");
    const card2 = document.getElementById("projectCard2");
    action2.addEventListener("mouseover", () => {
      card2.classList.add(styles.hover);
    });
    action2.addEventListener("mouseleave", () => {
      card2.classList.remove(styles.hover);
    });

    const action3 = document.getElementById("projectAction3");
    const card3 = document.getElementById("projectCard3");
    action3.addEventListener("mouseover", () => {
      card3.classList.add(styles.hover);
    });
    action3.addEventListener("mouseleave", () => {
      card3.classList.remove(styles.hover);
    });

    const action4 = document.getElementById("projectAction4");
    const card4 = document.getElementById("projectCard4");
    action4.addEventListener("mouseover", () => {
      card4.classList.add(styles.hover);
    });
    action4.addEventListener("mouseleave", () => {
      card4.classList.remove(styles.hover);
    });

    const action5 = document.getElementById("projectAction5");
    const card5 = document.getElementById("projectCard5");
    action5.addEventListener("mouseover", () => {
      card5.classList.add(styles.hover);
    });
    action5.addEventListener("mouseleave", () => {
      card5.classList.remove(styles.hover);
    });
  });
  return (
    <section className={styles.project}>
      {/* <Head>
        <link rel="preload" href="/Image Home/2.jpeg" as="image" />
        <link rel="preload" href="/Image Home/3.jpeg" as="image" />
        <link rel="preload" href="/Image Home/4.jpeg" as="image" />
        <link rel="preload" href="/Image Home/5.jpeg" as="image" />
        <link rel="preload" href="/Image Home/6.jpeg" as="image" />
        <link rel="preload" href="/Image Home/Hover/2.jpeg" as="image" />
        <link rel="preload" href="/Image Home/Hover/3.jpeg" as="image" />
        <link rel="preload" href="/Image Home/Hover/4.jpeg" as="image" />
        <link rel="preload" href="/Image Home/Hover/5.jpeg" as="image" />
        <link rel="preload" href="/Image Home/Hover/6.jpeg" as="image" />
      </Head> */}
      <div className={styles.projectContainer}>
        <div className={styles.blur}>
          <img src="./Icons habillage/Blur.png" alt="Blur" />
        </div>
        <div className={styles.left}>
          <img
            className={styles.shadowLeft}
            src="./Image Home/ombre/ombre-all-left.png"
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
              <ActiveLink href="/project/2">
                <path
                  id="projectAction1"
                  d="M403 39.527L32.6456 1L1.00024 673.471L380.049 715L403 39.527Z"
                  fill="black"
                  fillOpacity="0"
                />
              </ActiveLink>
            </svg>
            <div className={styles.projectCard} id="projectCard1"></div>
            <img src="./Icons habillage/Cadre-1.svg" alt="Arrow" />
            <img src="./Icons habillage/Glass/Glass-3.svg" alt="Glass" />
            <ActiveLink href="/project/2">
              <p className={styles.projectTitle}>{props.projects[1]["name"]}</p>
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
              <ActiveLink href="/project/4">
                <path
                  id="projectAction3"
                  d="M404 39.5206L32.7242 0.993652L1.00012 673.465L380.991 714.994L404 39.5206Z"
                  fill="black"
                  fillOpacity="0"
                />
              </ActiveLink>
            </svg>
            <div className={styles.projectCard} id="projectCard3"></div>
            <img src="./Icons habillage/Cadre-3.svg" alt="Arrow" />
            <img src="./Icons habillage/Glass/Glass-5.svg" alt="Glass" />
            <ActiveLink href="/project/4">
              <p className={styles.projectTitle}>{props.projects[3]["name"]}</p>
              <p>
                {props.projects[3]["job"]}
                <br />
                {props.projects[3]["detail"]}
              </p>
            </ActiveLink>
          </div>
          <div className={styles.sixthProject}>
            <p className={styles.projectId}>06</p>
            <svg
              viewBox="0 0 405 716"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <ActiveLink href="/project/6">
                <path
                  id="projectAction5"
                  d="M404.001 39.5275L32.7255 1.00049L1.00146 673.471L380.993 715L404.001 39.5275Z"
                  fill="black"
                  fillOpacity="0"
                />
              </ActiveLink>
            </svg>
            <div className={styles.projectCard} id="projectCard5"></div>
            <img src="./Icons habillage/Cadre-5.svg" alt="Arrow" />
            <img src="./Icons habillage/Glass/Glass-7.svg" alt="Glass" />
            <ActiveLink href="/project/6">
              <p className={styles.projectTitle}>{props.projects[5]["name"]}</p>
              <p>
                {props.projects[5]["job"]}
                <br />
                {props.projects[5]["detail"]}
              </p>
            </ActiveLink>
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
            <svg
              viewBox="0 0 406 716"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <ActiveLink href="/project/3">
                <path
                  id="projectAction2"
                  d="M0.997559 39.5L373.195 1L404.998 673L24.0633 714.5L0.997559 39.5Z"
                  fill="black"
                  fillOpacity="0"
                />
              </ActiveLink>
            </svg>
            <div className={styles.projectCard} id="projectCard2"></div>
            <img src="./Icons habillage/Cadre-2.svg" alt="Arrow" />
            <img src="./Icons habillage/Glass/Glass-4.svg" alt="Glass" />
            <ActiveLink href="/project/3">
              <p className={styles.projectTitle}>{props.projects[2]["name"]}</p>
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
              <ActiveLink href="/project/5">
                <path
                  id="projectAction4"
                  d="M1 39.5L373.197 1L405 673L24.0658 714.5L1 39.5Z"
                  fill="black"
                  fillOpacity="0"
                />
              </ActiveLink>
            </svg>
            <div className={styles.projectCard} id="projectCard4"></div>
            <img src="./Icons habillage/Cadre-4.svg" alt="Arrow" />
            <img src="./Icons habillage/Glass/Glass-6.svg" alt="Glass" />
            <ActiveLink href="/project/5">
              <p className={styles.projectTitle}>{props.projects[4]["name"]}</p>
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
