import React from "react";
import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Post, User } from "@/types";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({ params: { userId } }: Params) {
  // note(roy): recommended by NEXT, it will be de-duplicated by the server.
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  return {
    title: user.name,
    description: `This is the user page for ${user.name}`,
  };
}


// note(roy): async indicates server components.
export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);


  // 1. Fetch user data in Parallel
  // note(roy): requesting these datas in parallel.
  // note(roy): we start the requests at the same time, but wait until
  // they are finished.
  // const [user, userPosts] = await Promise.all([userData, userPostsData]);

  // 2. Fetch user data using Loading, Suspense.
  const user = await userData;

return (
    <>
    <h2>{user.name}</h2>
    <br />
    <Suspense fallback={<h2>Loading...</h2>}>
      <UserPosts promise={userPostsData} />
    </Suspense>
  </>
  );
}
