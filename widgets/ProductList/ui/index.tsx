import { Product } from "@/shared/api/types";
import Link from "next/link";

interface Props {
  products: Product[];
}

export function ProductList({ products }: Props) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <figure>
            <div className="*:text-white">
              <h1>{product.name}</h1>
              <h2>{product.englishName}</h2>
              <img
                className="rounded-md"
                src={product.imgUrl}
                alt={product.englishName}
              />
              <section>{product.price}</section>
              <div>{product.starRating}</div>
            </div>
          </figure>
        </Link>
      ))}
    </div>
  );
}
