import type { IncomingPost } from "../../types/incomingPost";
import type { Post } from "../../types/post";
import { adaptPost } from "../adapters/postAdapter";

const apiUrl = import.meta.env.PUBLIC_WP_JSON_API_URL;

interface WPResponse<T> {
  json: () => Promise<T[]>;
  headers: {
    get: (arg0: string) => string;
  };
}

interface WPPostsResponse extends WPResponse<IncomingPost> {}

export const fetchPostBySlug = async (slug: string): Promise<Post | null> => {
  const response = await fetch(`${apiUrl}/posts?slug=${slug}`);

  if (!response.ok) {
    throw new Error(`Error fetching post: ${response.statusText}`);
  }

  const data: IncomingPost[] = await response.json();

  if (data.length === 0) {
    return null;
  }

  if (data[0] === undefined) {
    throw new Error("No post data found.");
  }

  return adaptPost(data[0]);
};

export const fetchAllPostSlugs = async (): Promise<
  Pick<IncomingPost, "slug">[]
> => {
  const slugs: Pick<IncomingPost, "slug">[] = [];
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const response = (await fetch(
      `${apiUrl}/posts?per_page=100&_fields=slug&page=${page}`
    )) as WPPostsResponse;
    const posts = await response.json();

    posts.forEach((post) => slugs.push({ slug: post.slug }));

    if (page === 1) {
      totalPages = parseInt(response.headers.get("X-WP-TotalPages"), 10);
    }

    page++;
  }

  return slugs;
};
