const ShowPosts = ({ posts }: Props) => {
  const DeletePosts = () => {};

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
