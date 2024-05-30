import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between bg-white dark:bg-black">
      <figure>
        <Link href="/">
          <Image src="/githubIcon.png" alt="homePage" width={30} height={30} />
        </Link>
      </figure>
      <nav>
        <Link href="/setting">설정</Link>
      </nav>
    </header>
  );
}
