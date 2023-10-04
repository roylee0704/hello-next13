import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function ServerPage() {
  const session = await getServerSession(options);

  // note(roy): manual protection. middleware.ts? auto protection.
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }

  return (
    <section className="flex flex-col gap-6">
      <p>Session</p>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </section>
  );
}
