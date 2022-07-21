import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ results, currentGenre }) {
  console.log(currentGenre);
  const data = results.results;

  let randomMovie;
  if (data) {
    randomMovie = data[Math.floor(Math.random() * data.length)];
  }
  return (
    <div>
      <Head>Hulu 2.0</Head>
      <Header />
      <Hero movie={randomMovie} />
      <Nav />
      <Results results={data} genre={currentGenre} />
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
  const currentGenre = requests[genre]?.title || requests.fetchTrending.title;
  return {
    props: {
      results: request,
      currentGenre,
    },
  };
}
