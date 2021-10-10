import {Fragment} from "react";
import Banner from "/components/home/Banner";
import Project from "/components/home/Project";
import Footer from "/components/home/Footer";

function HomePage() {
  return (
    <Fragment>
      <Banner></Banner>
      <Project></Project>
      <Footer></Footer>
    </Fragment>
  );
}

export default HomePage;
