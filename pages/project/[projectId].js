// EXEMPLE DE PAGE DYNAMIQUE QUI CHANGE EN FONCTION DE L'URL ex: mondomaine.com/project/--> ici <--

import {useRouter} from "next/router";
import {Fragment} from "react";
import Banner from "/components/project/Banner";
import Flag from "/components/project/Flag";
import Info from "/components/project/Info";
import Mockup from "/components/project/Mockup";
import BannerPannel from "/components/project/BannerPannel";
import BonusPannel from "/components/project/BonusPannel";
import Footer from "/components/project/Footer";
import FirstMockup from "/components/project/FirstMockup";
import SideBySide from "/components/project/SideBySide";

function ProjectPage() {
  const router = useRouter();

  const projectId = router.query.projectId;

  // --> Send a request to the backend API
  // to fetch the news item with projectId

  return (
    <Fragment>
      <Banner></Banner>
      <Flag></Flag>
      <Info></Info>
      <FirstMockup></FirstMockup>
      <Mockup></Mockup>
      <SideBySide></SideBySide>
      <BannerPannel></BannerPannel>
      <BonusPannel></BonusPannel>
      <Footer></Footer>
    </Fragment>
  );
}

export default ProjectPage;
