import getAllUsers from "@/lib/getAllUsers";
import { User } from "@/types";
import type { Metadata } from "next";
import React from "react";
import Link from 'next/link';
export const metadata: Metadata = {
  title: "Users",
};
// note(roy): this is a static page (SSG) - generated on built phase.
export default async function UsersPage() {
    const usersData: Promise<User[]> = getAllUsers()

    const users = await usersData

    console.log('Hello')

    const content = (
        <section>
            <h2>
                <Link href="/">Back to Home</Link>
                <br/>
                {
                    users.map((user) => (
                        <p key={user.id}>
                            {/* note(roy): dynamic pages */}
                            <Link href={`/users/${user.id}`}>
                               {user.name}
                            </Link>
                        </p>
                    ))
                }
            </h2>
        </section>
    )

  return content;
}
