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
        src="/Image Home/Hover/vall-2.jpeg"
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
          alt="Arrow"
        />
        <div className={styles.title}>
          <p>.Vall’s Artwork Streaming Service</p>
          <p>
            digital-designer/
            <br />
            Japan/2019/
          </p>
        </div>
        <div className={styles.info}>
          <div>
            <p>
              &gt;Web designer <br />
              &gt;Front developer
              <br />
              &gt;Illustration
              <br />
              &gt;Branding
            </p>
          </div>
          <div className={styles.desc}>
            <p>Targeting art enthusiast, artist and tech lovers</p>
            <p>
              A flat-rate streaming platform allowing to view digitized art
              works wherever you are on screen. Vall makes art more accessible
              and easier to enjoy from home or at work will supporting our
              favourite artists.
            </p>
            <Link href="#">
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
