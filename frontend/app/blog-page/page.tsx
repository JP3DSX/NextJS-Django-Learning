import Image from "next/image";
import { getAllPostsData } from "@/lib/posts";
import { Suspense } from "react";
import { postsJson } from "@/model/postsJson";
import Link from "next/link";

export default async function BlogPage() {
  const postsData: postsJson[] = await Promise.all(await getAllPostsData());
  return (
    <div>
      <Suspense fallback="loading...">
        <ul className="m-10 text-white">
          {postsData.map((item, index) => {
            return (
              <li key={"blog-entry" + index + item.id}>
                <span>
                  {"["}Entry-{String(item.id).padStart(3, "0")}
                  {"]"}:
                </span>
                <Link href={`/posts/${item.id}`}>
                  <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
                    {item.title}
                  </span>{" "}
                </Link>
              </li>
            );
          })}
        </ul>
      </Suspense>
    </div>
  );
}
