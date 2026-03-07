const API_URL = import.meta.env.VITE_API_URL || "/api";
const BEARER_TOKEN = import.meta.env.VITE_API_BEARER_TOKEN || "my_super_secret_token_123";

// Need to update the .env and add VITE_API_BEARER_TOKEN so the frontend can read it
// Because API_BEARER_TOKEN is only available in Node (backend)

const getHeaders = () => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${BEARER_TOKEN}`,
  };
};

export const fetchPosts = async () => {
  const response = await fetch(`${API_URL}/posts`, {
    headers: getHeaders(), // Even public endpoints can accept it without error
  });
  if (!response.ok) throw new Error("Failed to fetch posts");
  return response.json();
};

export const fetchPostBySlug = async (slug: string) => {
  const response = await fetch(`${API_URL}/posts/${slug}`, {
    headers: getHeaders(),
  });
  if (!response.ok) throw new Error("Failed to fetch post");
  return response.json();
};

export const createPost = async (data: any) => {
  const response = await fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to create post");
  return response.json();
};

export const updatePost = async (id: number | string, data: any) => {
  const response = await fetch(`${API_URL}/posts/${id}`, {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to update post");
  return response.json();
};

export const deletePost = async (id: number | string) => {
  const response = await fetch(`${API_URL}/posts/${id}`, {
    method: "DELETE",
    headers: getHeaders(),
  });
  if (!response.ok) throw new Error("Failed to delete post");
  return response.json();
};
