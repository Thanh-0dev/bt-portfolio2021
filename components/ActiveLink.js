import {useRouter} from "next/router";
import Link from "next/link";

function ActiveLink({children, href, className = ""}) {
  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();
    setTimeout(() => {
      router.push(href);
    }, 550);
  };

  return (
    <Link href={href}>
      <a
        className={className}
        style={{width: "fit-content"}}
        onClick={handleClick}
      >
        {children}
      </a>
    </Link>
  );
}

export default ActiveLink;
