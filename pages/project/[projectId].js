// EXEMPLE DE PAGE DYNAMIQUE QUI CHANGE EN FONCTION DE L'URL ex: mondomaine.com/project/--> ici <--

import { useRouter } from 'next/router';

function ProjectPage1() {
    const router = useRouter();

    const projectId = router.query.projectId;

    // --> Send a request to the backend API
    // to fetch the news item with projectId

    return <h1>The Project Page 1 : {projectId}</h1>;
}

export default ProjectPage1;