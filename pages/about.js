import {Fragment} from "react";
import Head from "next/head";
import SlidingPuzzle from "/components/about/SlidingPuzzle";
import Info from "/components/about/Info";
import SlidingText from "/components/about/SlidingText";
import Experiences from "/components/about/Experiences";
import Footer from "/components/home/Footer";

function About() {
  return (
    <Fragment>
      <Head>
        <title>Bich Trâm Cynthia PHAM | About</title>
      </Head>
      <SlidingPuzzle />
      <Info />
      <SlidingText />
      <Experiences />
      <Footer />
    </Fragment>
  );
}

export default About;
