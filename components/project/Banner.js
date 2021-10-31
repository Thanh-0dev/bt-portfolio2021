import Link from "next/link";
import {useEffect} from "react";
import styles from "./Banner.module.css";

function Banner(props) {
  useEffect(() => {
    let alljobs = "";
    for (let nbRole in props.children.roles) {
      alljobs += "&gt" + props.children.roles[nbRole].role + "<br />";
    }
    document.getElementById("jobs").innerHTML = alljobs;
  });
  return (
    <section className={styles.banner}>
      <img
        className={styles.upperArrow}
        src="/Icons habillage/little-ship-arrow.svg"
        alt="Upper arrow"
      />
      <img
        className={styles.bannerImg}
        src={`/Image Home/Hover/${props.children.project.id}.jpeg`}
        alt="Banner image"
      />
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
            <p>{props.children.project.name}</p>
            <p>
              {props.children.project.job}
              <br />
              {props.children.project.detail}
            </p>
            <p id="jobs"></p>
          </div>
          <div className={styles.desc}>
            <p>{props.children.project.descTitle}</p>
            <p>{props.children.project.desc}</p>
            <Link href={props.children.project.link} passHref>
              <div className={styles.link}>
                <p>see live</p>
                <img
                  src="/Icons habillage/link/arrow-up-right.svg"
                  alt="Arrow up"
                />
                <img src="/Icons habillage/see-live-line.svg" alt="Underline" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
