import Link from "next/link";
import { volumes } from "@/lib/data";
import Head from "next/head";

export default function Volumes() {
  return (
    <>
      <Head>
        <title>LOTR volumes overview</title>
      </Head>
      <h2>All LOTR volumes</h2>
      {/* mapping over the volumes array to dynamcly create the volumes-links: */}
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <hr></hr>
      <Link href="./">Back to home</Link>
    </>
  );
}
