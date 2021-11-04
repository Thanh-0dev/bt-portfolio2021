import {useState, useEffect} from "react";
import Header from "./Header";

function Layout(props) {
  const [firstLoad, setFirstLoad] = useState(true);
  useEffect(() => {
    setFirstLoad(false);
  }, []);
  return (
    <div>
      {!firstLoad ? <Header /> : null}
      <main {...props} />
    </div>
  );
}

export default Layout;
