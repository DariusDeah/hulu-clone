import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
  const data = results.results;
  return (
    <div>
      <Head>Hulu 2.0</Head>
      <Header />
      <Nav />
      <Results results={data} />
    </div>
  );
}

//SSR
export async function getServerSideProps(contex) {
  const genre = contex.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3/${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request,
    },
  };
}
