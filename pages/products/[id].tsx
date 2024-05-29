import instance from "@/shared/api";
import { MultiReview, Product, Review } from "@/shared/api/types";
import Header from "@/widgets/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const [product, setProduct] = useState<Product>();
  const [reviews, setReviews] = useState<Review[]>();
  const router = useRouter();
  const { id } = router.query;

  async function getProduct(targetId: string) {
    const res = await instance.get(`/products/${targetId}`);
    const nextProduct = res?.data;
    setProduct(nextProduct);
  }

  async function getSizeReviews(targetId: string) {
    const res = await instance.get(`/size_reviews?product_id=${targetId}`);
    const nextReview: MultiReview = res?.data;
    setReviews(nextReview.results);
  }

  useEffect(() => {
    if (!id) return;

    if (typeof id === "string") {
      getProduct(id);
      getSizeReviews(id);
    }
  }, [id]);

  if (!product) return null;

  return (
    <>
      <Header />
      <div>
        <h1>{product.name}</h1>
        <img src={product.imgUrl} alt={product.name} />
        <div>
          {reviews?.map((review) => (
            <section key={review.id}>
              <h1>{review.updatedAt}</h1>
              <h2>{review.sex}</h2>
              <p>{review.fit}</p>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
