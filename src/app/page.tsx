"use client";
import { getPostApi } from "@/app/api/route";
import Form from "@/components/Form";
import Posts from "@/components/Posts";
import { Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<any>([]);
  const [loading, setLoading] = useState<any>(true);

  function deletePost(id: number) {
    const newPost = posts.filter((post: any) => post.id !== id);
    setPosts(newPost);
  }

  const handleGetApi = async () => {
    const res = await getPostApi();
    setLoading(false);
    setPosts(res);
  };
  useEffect(() => {
    handleGetApi();
  }, []);
  return (
    <div className="col-2 p-5">
      <div className="">
        <Form onAddPost={(post) => setPosts([post, ...posts])} />
        {loading ? <Spinner className="p-2 m-10" color="violet" /> : null}
      </div>

      <Posts posts={posts} onDelete={deletePost} />
    </div>
  );
}
