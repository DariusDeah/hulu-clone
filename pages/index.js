import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div>
      <Head>Hulu 2.0</Head>
      {/* Header */}
      <Header />
      <Nav />
      {/* Results */}
    </div>
  );
}
