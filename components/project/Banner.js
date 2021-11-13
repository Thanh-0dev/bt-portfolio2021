import Link from "next/link";
import styles from "./Banner.module.css";

function Banner(props) {
  return (
    <section className={styles.banner}>
      <img
        className={styles.upperArrow}
        src="/Icons habillage/little-ship-arrow.svg"
        alt="Upper arrow"
      />
      <img
        className={styles.bannerImg}
        src={`/Image Home/${props.project.id}.jpeg`}
        alt="Banner image"
      />
      <div className={styles.blur}>
        <img src="/Icons habillage/Blur.png" alt="Blur" />
      </div>
      <div className={styles.underBanner}>
        <img
          className={styles.arrow}
          src="/Icons habillage/Arrow.svg"
          alt="Arrow"
        />
        <img
          className={styles.glass}
          src="/Icons habillage/0-glass-projet/projet-glass-1.svg"
          alt="Glass"
        />
        <div className={styles.flex}>
          <div className={styles.title}>
            <p>{props.project.name}</p>
            <p>
              {props.project.job}
              <br />
              {props.project.detail}
            </p>
            <div>
              {Array(props.roles.length)
                .fill(null)
                .map((e, i) => (
                  <p key={`role-${i + 1}`}>{props.roles[i].role}</p>
                ))}
            </div>
          </div>
          <div className={styles.desc}>
            <p>{props.project.descTitle}</p>
            <p>{props.project.desc}</p>
            {props.project.link ? (
              <Link href={props.project.link} passHref>
                <div className={styles.link}>
                  <p>see live</p>
                  <img
                    src="/Icons habillage/link/arrow-up-right.svg"
                    alt="Arrow up"
                  />
                  <img
                    src="/Icons habillage/see-live-line.svg"
                    alt="Underline"
                  />
                </div>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
