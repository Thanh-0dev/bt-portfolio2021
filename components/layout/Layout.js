import {useState, useEffect} from "react";
import Header from "./Header";

/* Layout of the site */
function Layout(props) {
  /* Show the layout after it is loaded */
  const [firstLoad, setFirstLoad] = useState(true);
  useEffect(() => {
    setFirstLoad(false);
  }, []);
  return (
    <>
      {!firstLoad ? <Header /> : null}
      <main {...props} />
    </>
  );
}

export default Layout;
