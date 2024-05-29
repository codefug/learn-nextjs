export interface Product {
  id: number;
  name: string;
  englishName: string;
  brand: string;
  productCode: string;
  price: number;
  salePrice: number;
  starRating: number;
  starRatingCount: number;
  likeCount: number;
  point: number;
  imgUrl: string;
  createdAt: number;
  updatedAt: number;
}

export interface MultiProduct {
  count: number;
  next: string | null;
  previous: string | null;
  results: Product[];
}

export interface Review {
  id: number;
  sex: "male" | "female" | "none";
  height: number;
  size: "S" | "M" | "L" | "XL";
  fit: "small" | "good" | "big";
  productId: number;
  createdAt: number;
  updatedAt: number;
}

export interface MultiReview {
  count: number;
  next: string;
  previous: string;
  results: Review[];
}
