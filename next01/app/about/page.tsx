import React from "react";
import Link from "next/link";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'About Page',
  description: 'Generated by Roy',
}

export default function About() {
  return (
    <>
      <h1>About</h1>
      <Link href="/">Link to Home Page</Link>
    </>
  );
}