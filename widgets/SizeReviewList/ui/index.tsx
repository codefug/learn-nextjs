import { Review } from "@/shared/api/types";

function formatDate(date: Date): string {
  const MM = String(date.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(date.getUTCDate()).padStart(2, "0");
  const YYYY = String(date.getUTCFullYear());

  return `${YYYY}. ${MM}. ${dd}.`;
}

const labels = {
  sex: {
    male: "남자",
    female: "여자",
  },
  fit: {
    small: "작음",
    good: "적당함",
    big: "큼",
  },
};

interface Props {
  sizeReviews: Review[];
}

export function SizeReviewList({ sizeReviews }: Props) {
  return (
    <ul>
      {sizeReviews.map((sizeReview) => (
        <li key={sizeReview.id}>
          <div>
            <div>{formatDate(new Date(sizeReview.createdAt))}</div>
            <div>
              (
              {sizeReview.sex !== "none"
                ? labels.sex[sizeReview.sex]
                : "성별 미입력"}{" "}
              {sizeReview.height}cm 기준) {sizeReview.size}
            </div>
          </div>
          <div>{labels.fit[sizeReview.fit]}</div>
        </li>
      ))}
    </ul>
  );
}
