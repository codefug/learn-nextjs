import Header from "@/widgets/Header";
import { ProductList } from "@/widgets/ProductList";
import SearchForm from "@/widgets/SearchForm";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-indigo-600">
        <p className="text-white">hi</p>
        <SearchForm />
        <ProductList />
      </main>
    </>
  );
}
