import Link from "next/link";

export default function Volumes() {
  return (
    <>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            Volume 1: The fellowship of the ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">Volume 2: The two towers</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            Volume 3: The return of the king
          </Link>
        </li>
      </ul>
      <hr></hr>
      <Link href="./">Back to home</Link>
    </>
  );
}
