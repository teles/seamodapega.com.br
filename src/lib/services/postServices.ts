import type { IncomingPost } from "../../types/incomingPost";
import type { Post } from "../../types/post";
import { adaptPost } from "../adapters/postAdapter";

const apiUrl = import.meta.env.PUBLIC_WP_JSON_API_URL;

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
