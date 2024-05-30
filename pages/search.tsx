import Header from "@/widgets/Header";
import SearchForm from "@/widgets/SearchForm";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;

  return (
    <>
      <Header />
      <main>
        <h1>Search 페이지</h1>
        <SearchForm initialValue={q} />
        <div>검색 결과</div>
        <div>{q}</div>
      </main>
    </>
  );
}
