import Link from "next/link";
import React from "react";

async function getMovies() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  return res.json();
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const movies = await getMovies();

  return (
    <div className="flex">
      <ul className="pr-10 text-sm">
        {movies.map((movie: any) => {
          return (
            <li key={movie.id}>
              <Link href={`/movie/${movie.id}`}>{movie.name}</Link>
            </li>
          );
        })}
      </ul>
      <div className="">{children}</div>
    </div>
  );
}
