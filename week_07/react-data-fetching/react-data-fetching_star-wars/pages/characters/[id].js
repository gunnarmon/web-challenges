import { useRouter } from "next/router";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";

export default function Character() {
  const router = useRouter();
  const { id } = router.query;

  const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());

  const URL = `https://swapi.dev/api/people/${id}`;

  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <p>something went wrong</p>;
  if (isLoading) return <p>loading... please wait</p>;

  console.log("data: ", data);

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
