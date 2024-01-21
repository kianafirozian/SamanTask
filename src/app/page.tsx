"use client";
import { getPostApi } from "@/app/api/route";
import Form from "@/components/Form";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<any>([]);
  // const [loading, setLoading] = useState<any>(false);

  const handleGetApi = async () => {
    const res = await getPostApi();
    setPosts(res);
    console.log("res", res);
  };
  useEffect(() => {
    handleGetApi();
  }, []);
  return (
    <div className="col p-5">
      <Form />
      {posts.map((post: any) => (
        <h2 key={post.id}>{post.title}</h2>
      ))}
    </div>
  );
}
