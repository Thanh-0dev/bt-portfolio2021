import Link from "next/link";
import {useEffect} from "react";
import styles from "./Header.module.css";

function Header(props) {
  let date = new Date();
  let time =
    date.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"}) +
    " UTC+2";

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
    <header className={styles.header}>
      <div className={styles.nav}>
        <Link href="/pages/index.js">.tram/workshop</Link>
        <Link href="#About">/statistics</Link>
      </div>
      <div className={styles.info}>
        <span>.actually in France</span>
        <span>.open to opportunities</span>
        <span id="time">{time}</span>
      </div>
    </header>
  );
}

export default Header;
