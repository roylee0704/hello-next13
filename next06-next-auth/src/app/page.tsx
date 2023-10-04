import { getServerSession } from "next-auth/next";
import { options } from "./api/auth/[...nextauth]/options";
import UserCard from "./components/UserCard";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <>
      {session ? (
        <UserCard user={session.user} pageType="Home" />
      ) : (
        <h1 className="text-5xl">You shall not Pass!</h1>
      )}
    </>
  );
}
