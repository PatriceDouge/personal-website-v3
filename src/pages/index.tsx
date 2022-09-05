import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Patrice Dougé</title>
        <meta name="description" content="Personal Website" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          Patrice Dougé
        </h1>
        <p className="text-xl text-gray-700">software engineer. alumni @<a className="underline" href="https://www.rochester.edu/">UofR</a>. taker of pictures.</p>
      </main>
    </>
  );
};

export default Home;
