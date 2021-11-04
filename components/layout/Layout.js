import {useState, useEffect} from "react";
import Header from "./Header";
import styles from "./Layout.module.css";

function Layout(props) {
  const [firstLoad, setFirstLoad] = useState(true);
  useEffect(() => {
    setFirstLoad(false);
  }, []);
  return (
    <div className={styles.container}>
      {!firstLoad ? <Header /> : null}
      <main {...props} />
    </div>
  );
}

export default Layout;
