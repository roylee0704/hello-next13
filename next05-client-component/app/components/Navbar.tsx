import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-slate-600 p-4 flex-col">
      <h1>
        <Link href="/">WikiRocket!</Link>
      </h1>
    </nav>
  );
}
