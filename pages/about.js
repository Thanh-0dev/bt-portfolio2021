import prisma from "/components/client";
import {Fragment} from "react";
import Head from "next/head";
import SlidingPuzzle from "/components/about/SlidingPuzzle";
import Info from "/components/about/Info";
import SlidingText from "/components/about/SlidingText";
import Experiences from "/components/about/Experiences";
import Footer from "/components/home/Footer";

export async function getStaticProps() {
  const about = await prisma.about.findMany();
  const recap = await prisma.recap.findMany();
  const exp = await prisma.exp.findMany();
  const footer = await prisma.footer.findMany();
  return {
    props: {
      about: about,
      recap: recap,
      exp: exp,
      footer: footer,
    },
  };
}

function About(props) {
  return (
    <Fragment>
      <Head>
        <title>Bich Trâm Cynthia PHAM | About</title>
      </Head>
      <SlidingPuzzle />
      <Info {...props} />
      <SlidingText />
      <Experiences {...props} />
      <Footer {...props} />
    </Fragment>
  );
}

export default About;
