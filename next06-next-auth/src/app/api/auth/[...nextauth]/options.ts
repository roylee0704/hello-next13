//note(roy): https://next-auth.js.org/configuration/options#options
import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    // oauth: github, google, facebook, twitter, apple, discord, twitch, etc...,
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),

    // credentials: own backend
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your-cool-username",
        },
        password: { label: "Password:", type: "password" },
      },
      async authorize(credentials) {
        // This is where you need to retrieve user data
        // to verify with credentials
        // docs: https://next-auth.js.org/configuration/providers#credentials
        const user = { id: "1", name: "roy", password: "nextauth" };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],

  //   pages: {
  //     signIn: "/auth/signin",
  //   },
};
