import instance from "@/shared/api";
import { MultiProduct, Product } from "@/shared/api/types";
import Header from "@/widgets/Header";
import { ProductList } from "@/widgets/ProductList";
import SearchForm from "@/widgets/SearchForm";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Search() {
  const [products, setProducts] = useState<Product[]>();
  const router = useRouter();
  const { q } = router.query;

  async function getProduct(q: string) {
    const res = await instance.get(`/products?q=${q}`);
    const data: MultiProduct = res.data;
    setProducts(data.results);
  }

  useEffect(() => {
    if (!q) return;

    if (typeof q === "string") getProduct(q);
  }, [q]);

  if (!products) return;

  return (
    <>
      <main>
        <h1>Search 페이지</h1>
        <SearchForm initialValue={q} />
        <div>검색 결과</div>
        <ProductList products={products} />
      </main>
    </>
  );
}
