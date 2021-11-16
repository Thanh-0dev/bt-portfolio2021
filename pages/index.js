import prisma from "/components/client";
import Head from "next/head";
import Banner from "/components/home/Banner";
import Project from "/components/home/Project";
import Footer from "/components/home/Footer";

export async function getStaticProps() {
  const allProject = await prisma.project.findMany({
    select: {name: true, job: true, detail: true},
  });
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
    <>
      <Head>
        <title>Bich Trâm Cynthia PHAM | Portfolio</title>
      </Head>
      <Banner {...props} />
      <Project {...props} />
      <Footer {...props} />
    </>
  );
}

export default HomePage;
