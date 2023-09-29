import React from "react";
import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Post, User } from "@/types";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import getAllUsers from "@/lib/getAllUsers";
import { notFound } from "next/navigation";
type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({ params: { userId } }: Params) {
  // note(roy): recommended by NEXT, it will be de-duplicated by the server.
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  console.log('hello!')
  if (!user?.name) {
    return {
      title: "User not found",
    };
  }

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

  if(!user?.name) {
    return notFound()
  }

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

// note(roy): this runs at build time.
export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users: User[] = await usersData;

  return users.map((user) => ({
    params: {
      userId: user.id.toString(),
    },
  }));
}
