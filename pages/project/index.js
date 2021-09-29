import Link from 'next/link';
import { Fragment } from 'react';

function ProjectPage() {
    return (
    <Fragment>
        <h1>The Project Page</h1>
        <ul>
            <li>
                <Link href="/project/next-js">
                    Next-js
                </Link>
            </li>
            <li>
                Something
            </li>
        </ul>
    </Fragment>
    );
}

export default ProjectPage;