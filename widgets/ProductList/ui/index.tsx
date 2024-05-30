import { Product } from "@/shared/api/types";
import Link from "next/link";

interface Props {
  items?: Product[];
}

export function ItemsList({ items }: Props) {
  if (!items) return;

  return (
    <div className="grid grid-cols-4 gap-4">
      {items.map((item) => (
        <Link key={item.id} href={`/products/${item.id}`}>
          <figure>
            <div className="*:text-white">
              <img
                src={item.imgUrl}
                alt={item.englishName}
                className="rounded-lg"
              />
              <h1>{item.name}</h1>
              <section>{item.price}</section>
            </div>
          </figure>
        </Link>
      ))}
    </div>
  );
}
