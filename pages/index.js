import prisma from "/components/client";
import {Fragment} from "react";
import Head from "next/head";
import Banner from "/components/home/Banner";
import Project from "/components/home/Project";
import Footer from "/components/home/Footer";

export async function getStaticProps() {
  const allProject = await prisma.project.findMany();
  return {
    props: {
      projects: allProject,
    },
  };
}

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Bich Trâm Cynthia PHAM | Portfolio</title>
      </Head>
      <Banner>{props}</Banner>
      <Project>{props}</Project>
      <Footer></Footer>
    </Fragment>
  );
}

export default HomePage;
