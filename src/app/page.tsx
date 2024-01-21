import Image from "next/image";
import ShowPosts from "./components/ShowPosts";
import Form from "./components/Form";

export default function Home() {
  return (
    <div className="flex">
      <Form />
      <ShowPosts />
    </div>
  );
}
