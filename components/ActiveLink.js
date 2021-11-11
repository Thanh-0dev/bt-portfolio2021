import {useRouter} from "next/router";
import Link from "next/link";

function ActiveLink({children, href}) {
  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();
    setTimeout(() => {
      router.push(href);
    }, 550);
  };

  return (
    <Link href={href}>
      <a onClick={handleClick}>{children}</a>
    </Link>
  );
}

export default ActiveLink;
