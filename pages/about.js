import {Fragment} from "react";
import SlidingPuzzle from "/components/about/SlidingPuzzle";
import Info from "/components/about/Info";
import SlidingText from "/components/about/SlidingText";
import Experiences from "/components/about/Experiences";
import Footer from "/components/home/Footer";

function About() {
  return (
    <Fragment>
      <SlidingPuzzle></SlidingPuzzle>
      <Info></Info>
      <SlidingText></SlidingText>
      <Experiences></Experiences>
      <Footer></Footer>
    </Fragment>
  );
}

export default About;
