import ActiveLink from "/components/ActiveLink";
import styles from "./Project.module.css";
import FadeInOnView from "/components/FadeInOnView/FadeInOnView";

/* Project section of the homepage */
function Project(props) {
  return (
    <section className={styles.project}>
      <div className={styles.projectContainer}>
        {/* Background decoration */}
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
            <FadeInOnView>
              <p className={styles.projectId}>02</p>
              <div className={styles.projectCard}>
                {/* Clickable image card */}
                <ActiveLink href="/project/2" className="discover">
                  <img
                    src="/Image Home/2.jpeg"
                    alt="First project image"
                    id="projectCard1"
                    className={styles.projectImg}
                  />
                </ActiveLink>
              </div>
              {/* Foreground decoration */}
              <img src="/Icons habillage/Cadre-1.svg" alt="Arrow" />
              <img src="/Icons habillage/Glass/Glass-3.svg" alt="Glass" />
            </FadeInOnView>
            <FadeInOnView>
              <ActiveLink href="/project/2" className="discover">
                {/* Modulable content within Prisma Studio */}
                <h3 className={styles.projectTitle}>
                  {props.projects[1]["name"]}
                </h3>
                <p>
                  {props.projects[1]["job"]}
                  <br />
                  {props.projects[1]["detail"]}
                </p>
              </ActiveLink>
            </FadeInOnView>
          </div>
          <div className={styles.fourthProject}>
            <FadeInOnView>
              <p className={styles.projectId}>04</p>
              <div className={styles.projectCard}>
                {/* Clickable image card */}
                <ActiveLink href="/project/4" className="discover">
                  <img
                    src="/Image Home/4.jpeg"
                    alt="Fourth project image"
                    id="projectCard3"
                    className={styles.projectImg}
                  />
                </ActiveLink>
              </div>
              {/* Foreground decoration */}
              <img src="/Icons habillage/Cadre-3.svg" alt="Arrow" />
              <img src="/Icons habillage/Glass/Glass-5.svg" alt="Glass" />
            </FadeInOnView>
            <FadeInOnView>
              <ActiveLink href="/project/4" className="discover">
                {/* Modulable content within Prisma Studio */}
                <h3 className={styles.projectTitle}>
                  {props.projects[3]["name"]}
                </h3>
                <p>
                  {props.projects[3]["job"]}
                  <br />
                  {props.projects[3]["detail"]}
                </p>
              </ActiveLink>
            </FadeInOnView>
          </div>
          {/* <div className={styles.sixthProject}>
            <FadeInOnView>
              <p className={styles.projectId}>06</p>
              <div className={styles.projectCard}>
                <ActiveLink href="/project/6" className="discover">
                <img
                  src="/Image Home/6.jpeg"
                  alt="Sixth project image"
                  id="projectCard5"
                  className={styles.projectImg}
                />
                </ActiveLink>
              </div>
              <img src="/Icons habillage/Cadre-5.svg" alt="Arrow" />
              <img src="/Icons habillage/Glass/Glass-7.svg" alt="Glass" />
            </FadeInOnView>
            <FadeInOnView>
              <ActiveLink href="/project/6" className="discover">
                <h3 className={styles.projectTitle}>{props.projects[5]["name"]}</h3>
                <p>
                  {props.projects[5]["job"]}
                  <br />
                  {props.projects[5]["detail"]}
                </p>
              </ActiveLink>
            </FadeInOnView>
          </div> */}
        </div>

        <div className={styles.right}>
          <img
            className={styles.shadowRight}
            src="/Image Home/ombre/ombre-all-right.png"
            alt="Shadows Right"
          />
          <div className={styles.thirdProject}>
            <FadeInOnView>
              <p className={styles.projectId}>03</p>
              <div className={styles.projectCard}>
                {/* Clickable image card */}
                <ActiveLink href="/project/3" className="discover">
                  <img
                    src="/Image Home/3.jpeg"
                    alt="Third project image"
                    id="projectCard2"
                    className={styles.projectImg}
                  />
                </ActiveLink>
              </div>
              {/* Foreground decoration */}
              <img src="/Icons habillage/Cadre-2.svg" alt="Arrow" />
              <img src="/Icons habillage/Glass/Glass-4.svg" alt="Glass" />
            </FadeInOnView>
            <FadeInOnView>
              <ActiveLink href="/project/3" className="discover">
                {/* Modulable content within Prisma Studio */}
                <h3 className={styles.projectTitle}>
                  {props.projects[2]["name"]}
                </h3>
                <p>
                  {props.projects[2]["job"]}
                  <br />
                  {props.projects[2]["detail"]}
                </p>
              </ActiveLink>
            </FadeInOnView>
          </div>
          <div className={styles.fifthProject}>
            <FadeInOnView>
              <p className={styles.projectId}>05</p>
              {/* Clickable image card */}
              <div className={styles.projectCard}>
                <ActiveLink href="/project/5" className="discover">
                  <img
                    src="/Image Home/5.jpeg"
                    alt="Fifth project image"
                    id="projectCard4"
                    className={styles.projectImg}
                  />
                </ActiveLink>
              </div>
              {/* Foreground decoration */}
              <img src="/Icons habillage/Cadre-4.svg" alt="Arrow" />
              <img src="/Icons habillage/Glass/Glass-6.svg" alt="Glass" />
            </FadeInOnView>
            <FadeInOnView>
              <ActiveLink href="/project/5" className="discover">
                {/* Modulable content within Prisma Studio */}
                <h3 className={styles.projectTitle}>
                  {props.projects[4]["name"]}
                </h3>
                <p>
                  {props.projects[4]["job"]}
                  <br />
                  {props.projects[4]["detail"]}
                </p>
              </ActiveLink>
            </FadeInOnView>
          </div>
        </div>
        <div className={styles.mobile}>
          {/* Mobile decoration of the project section */}
          <FadeInOnView>
            <img src="/Mobile/mobile-cadre.svg" alt="Mobile project line" />
          </FadeInOnView>
          <FadeInOnView>
            <img src="/Mobile/mobile-cadre-2.svg" alt="Mobile project line" />
          </FadeInOnView>
          <FadeInOnView>
            <img src="/Mobile/mobile-cadre.svg" alt="Mobile project line" />
          </FadeInOnView>
          <FadeInOnView>
            <img src="/Mobile/mobile-cadre-2.svg" alt="Mobile project line" />
          </FadeInOnView>
        </div>
      </div>
    </section>
  );
}

export default Project;
