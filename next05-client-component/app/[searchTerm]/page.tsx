import React from "react";
import getWikiResults from "@/lib/getWikiResults";
import Item from "./components/Item";
type Props = {
  params: {
    searchTerm: string;
  };
};

// 11 - 12 (next-auth)
// 12 - 1pm (next-auth)
// 1 - 2pm (lunch)
// 2 - 3pm (project dir)
// 3 - 4pm (project dir)
// 4 - 5pm (gym)

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const displayTerm = searchTerm.replaceAll("%20", " ");

  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} Not Found`,
      description: `${displayTerm} Not Found`,
    };
  }
  return {
    title: `${displayTerm} - WikiRocket!`,
    description: `Search results for ${displayTerm}!`,
  };
}
export default async function SearchResults({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages;

  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result) => {
          return <Item key={result.pageid} result={result} />;
        })
      ) : (
        <h2>{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  );

  return content;
}
