import { getServerSession } from "next-auth/next";
import { options } from "./api/auth/[...nextauth]/options";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <>
      {session ? (
        <div>
          <p>Session</p>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
      ) : (
        <h1 className="text-5xl">You shall not Pass!</h1>
      )}
    </>
  );
}
