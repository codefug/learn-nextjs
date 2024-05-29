import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const { q } = router.query;

  return <div>{q}dynamic route</div>;
}
