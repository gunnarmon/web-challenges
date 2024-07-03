import Link from "next/link";
import { introduction } from "@/lib/data";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <Link href="/volumes">All LOTR volumes</Link>
      <hr></hr>
      <Link href="/index">Back to home</Link>
    </div>
  );
}
