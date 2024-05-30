import instance from "@/shared/api";
import { MultiProduct, Product } from "@/shared/api/types";
import { ProductList } from "@/widgets/ProductList";
import SearchForm from "@/widgets/SearchForm";
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

  if (!products) return;

  return (
    <>
      <main className="bg-indigo-600">
        <p className="text-white">hi</p>
        <SearchForm />
        <ProductList products={products} />
      </main>
    </>
  );
}
