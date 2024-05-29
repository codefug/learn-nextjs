import instance from "@/shared/api";
import { MultiProduct, Product } from "@/shared/api/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export function ProductList() {
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
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <figure>
            <div className="*:text-white">
              <h1>{product.name}</h1>
              <h2>{product.englishName}</h2>
              <img src={product.imgUrl} alt={product.englishName} />
              <section>{product.price}</section>
              <div>{product.starRating}</div>
            </div>
          </figure>
        </Link>
      ))}
    </div>
  );
}
