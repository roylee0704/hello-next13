"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

export default function ClientPage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/client");
    },
  });

  return (
    <section className="flex flex-col gap-6">
      <p>Session</p>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </section>
  );
}
