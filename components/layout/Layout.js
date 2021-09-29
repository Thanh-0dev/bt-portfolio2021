import Header from "./Header";
import styles from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={styles.container}>
      <Header />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
