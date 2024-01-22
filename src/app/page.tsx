"use client";
import { getPostApi } from "@/app/api/route";
import Form from "@/components/Form";
import Posts from "@/components/Posts";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<any>([]);
  // const [loading, setLoading] = useState<any>(false);

  function deletePost(id: number) {
    const newPost = posts.filter((post: any) => post.id !== id);
    console.log("id", id);
    setPosts(newPost);
  }

  const handleGetApi = async () => {
    const res = await getPostApi();
    setPosts(res);
  };
  useEffect(() => {
    handleGetApi();
  }, []);
  return (
    <div className="col-2 p-5">
      <Form onAddPost={(data) => setPosts([data, ...posts])} />
      <Posts key={posts.userId} posts={posts} onDelete={deletePost} />
    </div>
  );
}
