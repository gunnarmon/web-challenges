import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function ProductsDetail() {
  const router = useRouter();
  const { id } = router.query;

  const { data: products, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <title>{products.name}</title>
      <section>
        <small>ID: {products.id}</small>
        <h2>Name: {products.name}</h2>
        <h3>Description: {products.description}</h3>
        <b>
          Price: {products.price} {products.currency}
        </b>
        <h4>Category: {products.category}</h4>
      </section>
      <Link href={"../products"}>Back the fishy-section...</Link>
    </>
  );
}
