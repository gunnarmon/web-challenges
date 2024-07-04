import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/lib/data";
import { useRouter } from "next/router";
import Head from "next/head";

export default function VolumeDetail() {
  // set router query:
  const router = useRouter();
  const { slug } = router.query;
  // use .find() method to indicate "volumes" pages from [volumes] in data.js:
  const volume = volumes.find(
    (element) => element.slug.toLocaleLowerCase() === slug
  );
  // use .findIndex() method to set variable with the volume page you are actually on:
  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);
  console.log("volumeIndex: ", volumeIndex);

  // destructure the volume object from data.js from line 11:
  const { title, description, books, cover } = volume;

  // make the sub-pages of the different volumes dynamic with the destructured object:
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <p>{description}</p>
      {/* mapping over the books array inside the volume object: */}
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: {title}
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        width={240}
        height={360}
        alt={`Image of the ${title}`}
      ></Image>
      <hr></hr>
      <Link href="/volumes">Back to volumes</Link>
    </>
  );
}
