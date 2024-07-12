import Link from "next/link";
import ProductsOverview from "./products";

export default function HomePage() {
  return (
    <>
      <h1>Welcome to the pet-shop!</h1>
      <Link href={"/products/"}>To the fishes!</Link>
    </>
  );
}
