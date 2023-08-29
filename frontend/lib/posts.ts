import { postsJson } from "@/model/postsJson";
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export async function getAllPostsData() {
  const posts: postsJson[] = await fetch(new URL(apiUrl), {
    cache: "force-cache",
  }).then((response) => response.json());
  return posts;
}

export async function getAllPostIds() {
  const posts = await fetch(new URL(apiUrl)).then((res) => res.json());

  return posts.map((post: postsJson) => {
    return {
      id: String(post.id),
    };
  });
}

export async function getPostData(id: string) {
  const url = apiUrl + "/" + id;
  const post: postsJson = await fetch(new URL(url)).then((res) => res.json());

  return post;
}
