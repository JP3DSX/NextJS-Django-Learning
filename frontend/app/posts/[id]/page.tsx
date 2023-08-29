import Link from "next/link";
import Layout from "../../layout";
import { postsJson } from "../../../model/postsJson";
import {
  getAllPostIds,
  getAllPostsData,
  getPostData,
} from "../../../lib/posts";
import { Suspense } from "react";

export async function generateStaticParams() {
  const paths = await getAllPostIds();
  return paths;
}

export default async function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post: postsJson = await getPostData(id);
  return (
    <div className="text-white">
      <Suspense fallback="Loading...">
        <p className="m-4">
          {"Entry : "}
          {post.id}
        </p>
        <p className="mb-8 text-xl font-bold">{post.title}</p>
        <p className="px-10">{post.body}</p>
      </Suspense>
      <Link href="/blog-page">
        <div className="flex cursor-pointer mt-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
          <span>Back to blog-page</span>
        </div>
      </Link>
    </div>
  );
}
