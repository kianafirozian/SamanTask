"use client";
import { getPostApi } from "@/app/api/route";
import { useEffect, useState } from "react";

const ShowPosts = () => {
  const [posts, setPosts] = useState<any>([]);
  const [loading, setLoading] = useState<any>(false);

  const handleGetApi = async () => {
    const res = await getPostApi();
    setPosts(res);
    console.log("res", res);
  };
  useEffect(() => {
    handleGetApi();
  }, []);

  const DeletePosts = () => {
    console.log("e");
  };

  return (
    <div className="items-center">
      <h1 className="font-bold text-4xl">Posts</h1>
      <ul>
        {(posts || []).map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShowPosts;
