// note(roy): not available to the public, because the file is not named as Page.tsx

import { Post } from "@/types";

type Props = {
  promise: Promise<Post[]>;
};

export default async function UserPosts({ promise }: Props) {
  // delay 5 seconds before rendering the posts.
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const posts = await promise;

  const content = posts.map((post) => {
    return (
      <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <br />
      </article>
    );
  });

  return content;
}
