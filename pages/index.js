import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";
import useSWR from "swr";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Profile from "@/components/profile";
import { useState } from "react";
import FilterBar from "@/components/FilterBar/FilterBar";

const inter = Inter({ subsets: ["latin"] });
const MapWithNoSSR = dynamic(() => import("@/components/Map/Map"), {
  ssr: false,
});

export default function Home() {
  const [filterType, setFilterType] = useState("");
  const { data: session } = useSession();
  const { data, isLoading, error } = useSWR(
    filterType ? `/api/restaurants?type=${filterType}` : "/api/restaurants"
  );

  if (isLoading) <h1>Loading...</h1>;

  if (!data) {
    return;
  }

  function handleFilterChange(e) {
    setFilterType(e.target.value);
  }

  return (
    <>
      <Head>
        <title>Gourmet Berlin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Profile />
        <FilterBar type={filterType} onChange={handleFilterChange} />
        <MapWithNoSSR restaurants={data} />
        {session && (
          <div>
            <Link href="/create">Add Restaurant</Link>
          </div>
        )}
      </main>
    </>
  );
}
