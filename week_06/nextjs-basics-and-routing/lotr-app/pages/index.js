import Link from "next/link";
import { introduction, volumes } from "@/lib/data";
import Head from "next/head";

export default function HomePage() {
  // get random index' of the volumes array and use it in line 17 to get random links:
  function getRandomVolume(volumes) {
    return volumes[Math.floor(Math.random() * volumes.length)];
  }

  return (
    <>
      <Head>
        <title>Lord of the Rings</title>
      </Head>
      <div>
        <h1>Lord of the Rings</h1>
        <p>{introduction}</p>
        <hr></hr>
        <Link href="/volumes">Go to the LOTR volumes overview</Link>
        <hr></hr>
        <Link href={`/volumes/${getRandomVolume(volumes).slug}`}>
          Go to a random LOTR volume
        </Link>
      </div>
    </>
  );
}
