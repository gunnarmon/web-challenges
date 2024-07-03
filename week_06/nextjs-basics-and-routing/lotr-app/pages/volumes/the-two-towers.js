import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

const volumeOne = volumes.find(({ slug }) => slug === "the-two-towers");

export default function VolumeTwo() {
  return (
    <>
      <h1>{volumeOne.title}</h1>
      <p>{volumeOne.description}</p>
      <ul>
        <li>
          {volumeOne.books[0].ordinal}: {volumeOne.books[0].title}
        </li>
        <li>
          {volumeOne.books[1].ordinal}: {volumeOne.books[1].title}
        </li>
      </ul>
      <Image
        src="/images/the-two-towers.png"
        width={574}
        height={931}
        alt={volumeOne.cover}
      ></Image>
      <hr></hr>
      <Link href="/volumes">Back to volumes</Link>
    </>
  );
}
