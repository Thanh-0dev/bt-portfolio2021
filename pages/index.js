import prisma from "/components/client";
import {Fragment} from "react";
import Head from "next/head";
import Banner from "/components/home/Banner";
import Project from "/components/home/Project";
import Footer from "/components/home/Footer";

export async function getStaticProps() {
  const allProject = await prisma.project.findMany();
  const footer = await prisma.footer.findMany();
  return {
    props: {
      projects: allProject,
      footer: footer,
    },
  };
}

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Bich Trâm Cynthia PHAM | Portfolio</title>
        <link rel="canonical" href="/" />
      </Head>
      <Banner {...props} />
      <Project {...props} />
      <Footer {...props} />
    </Fragment>
  );
}

export default HomePage;
