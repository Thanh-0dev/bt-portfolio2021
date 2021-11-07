import styles from "./Footer.module.css";

function Footer() {
  return (
    <section className={styles.footer}>
      <img
        className={styles.footerLine}
        src="/Icons habillage/Footer-line.svg"
        alt="Footer Line"
      />
      <div className={styles.info}>
        <img
          className={styles.footerGlass1}
          src="/Icons habillage/Glass/glass-footer-1.svg"
          alt="Glass footer 1"
        />
        <div className={styles.footerGlass2}>
          <img
            src="/Icons habillage/Glass/glass-footer-2.svg"
            alt="Glass footer 2"
          />
        </div>
        <div className={styles.blur}>
          <img src="/Icons habillage/Blur.png" alt="Blur" />
        </div>
        <p>Hello.</p>
        <p>
          Nice to meet you. I’m available for freelance and new opportunities.
        </p>
        <div className={styles.contact}>
          <a
            href="mailto:bichtrampham.design@gmail.com"
            rel="noreferrer noopener nofollow"
          >
            /email
          </a>
          <a
            href="https://www.linkedin.com/in/bichtrampham/"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            /linkedIn
          </a>
          <a
            href="https://www.instagram.com/tram.inprogress/"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            /instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
