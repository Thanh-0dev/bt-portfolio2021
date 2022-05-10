import ActiveLink from "/components/ActiveLink";
import {useRouter} from "next/router";
import {useEffect} from "react";
import styles from "./Header.module.css";

/* Header of the site */
function Header() {
  /* Burger menu */
  const router = useRouter();
  useEffect(() => {
    /* Open mobile menu on burger menu click and disable scrolling */
    const burgerMenu = document.getElementById("burger");
    const menu = document.getElementById("menu");
    const html = document.documentElement;
    let menuIsOpen = false;
    burgerMenu.addEventListener("click", () => {
      setTimeout(() => {
        if (!menuIsOpen) {
          menu.classList.add(styles.active);
          html.classList.add("noScroll");
        } else {
          menu.classList.remove(styles.active);
          html.classList.remove("noScroll");
        }
        menuIsOpen = !menuIsOpen;
      }, 550);
    });
    const menuLinks = document.querySelectorAll("#menu a");
    for (let link = 0; link < menuLinks.length; link++) {
      /* Close mobile menu on page change */
      if (menuLinks[link].href !== router.pathname) {
        menuLinks[link].addEventListener("click", () => {
          menuIsOpen = false;
          menu.classList.remove(styles.active);
          html.classList.remove("noScroll");
        });
      } else {
        menuIsOpen = true;
      }
    }
  }, [router.pathname]);

  useEffect(() => {
    /* Get all links and show an underline under it if we're already on the page */
    const menuLinks = document.querySelectorAll("#menu a");
    for (let link = 0; link < menuLinks.length; link++) {
      if (menuLinks[link].href === window.location.href) {
        menuLinks[link].classList.add(styles.underline);
      } else {
        menuLinks[link].classList.remove(styles.underline);
      }
    }
  });

  /* Show time */
  useEffect(() => {
    setInterval(() => {
      let date = new Date();
      let time =
        date.toLocaleTimeString("fr-FR", {hour: "2-digit", minute: "2-digit"}) +
        " UTC+2";
      document.getElementById("time").innerHTML = time;
    }, 1000);
  });
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.burgerMenu} id="menu">
          <ul>
            {/* Mobile links */}
            <ActiveLink href="/">
              <li>/workshop</li>
            </ActiveLink>
            <ActiveLink href="/about">
              <li>/statistics</li>
            </ActiveLink>
          </ul>
          <ul>
            {/* Social media links and mail */}
            <a
              className="noTransition"
              href="mailto:bichtrampham.design@gmail.com"
              rel="noreferrer noopener nofollow"
            >
              <li>/email</li>
            </a>
            <a
              className="noTransition"
              href="https://www.linkedin.com/in/bichtrampham/"
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              <li>/linkedIn</li>
            </a>
            <a
              className="noTransition"
              href="https://www.instagram.com/tram.inprogress/"
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              <li>/instagram</li>
            </a>
          </ul>
        </div>
        <ul>
          {/* Links */}
          <li>
            <ActiveLink href="/">.tram/workshop</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/about">/statistics</ActiveLink>
          </li>
          <li>
            <a>
              <img
                id="burger"
                src="/Mobile/burger-menu.svg"
                alt="burger menu"
              />
            </a>
          </li>
        </ul>
        <div className={styles.info}>
          {/* Information */}
          <span>.actually in France</span>
          <span>.open to opportunities</span>
          <span id="time"></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
