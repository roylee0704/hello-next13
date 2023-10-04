import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="flex bg-blue-800 text-white p-4 justify-between font-bold">
      <Link href="/">Home</Link>
      <Link href="/api/auth/signin">Sign In</Link>
      <Link href="/api/auth/signout">Sign Out</Link>
      <Link href="/server">Server</Link>
      <Link href="/client">Client</Link>
      <Link href="/extra">Extra</Link>
    </nav>
  );
}
