import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-indigo-600">
      <p className="text-white">hi</p>
      <Link href="/search">Search Page</Link>
    </main>
  );
}
