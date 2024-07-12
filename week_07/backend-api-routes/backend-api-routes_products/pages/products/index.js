import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function ProductsOverview() {
  const { data: products, isLoading } = useSWR("/api/products", fetcher);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <title>smells fishy in here...</title>
      <h1>Welcome to the fishy-section!</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <small>ID: {product.id}</small>
            <Link href={`/products/${product.id}`}>
              <h2>Name: {product.name}</h2>
              <h3>Description: {product.description}</h3>
              <b>
                Price: {product.price} {product.currency}
              </b>
              <h4>Category: {product.category}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
