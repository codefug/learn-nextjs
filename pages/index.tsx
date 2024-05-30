import instance from "@/shared/api";
import { MultiProduct, Product } from "@/shared/api/types";
import Header from "@/widgets/Header";
import { ProductList } from "@/widgets/ProductList";
import SearchForm from "@/widgets/SearchForm";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>();

  async function getMultiProduct() {
    const res = await instance.get("/products/");
    const products: MultiProduct = res?.data;
    setProducts(products.results);
  }

  useEffect(() => {
    getMultiProduct();
  }, []);

  return (
    <>
      <Head>
        <title>lsh-clothes</title>
        <link rel="github" href="/githubIcon.png" />
      </Head>
      <Header />
      <main className="bg-indigo-600">
        <p className="text-white">hi</p>
        <SearchForm />
        <ProductList items={products} />
      </main>
    </>
  );
}
