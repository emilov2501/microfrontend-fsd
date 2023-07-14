import React, { useCallback, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { PostCard } from "./widgets/post-card";
import { useGetPosts } from "./features/posts";

import "./index.css";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await useGetPosts();
      setPosts(response);
    }

    fetchData();
  }, []);

  const handleClick = useCallback((post) => {
    console.log(post)
  }, [])

  return (
    <div className="container">
      <div className="post-list">
        {posts.length > 0 && posts.map((post) => <PostCard post={post} onClick={handleClick} />)}
      </div>
    </div>
  );
};
const root = createRoot(document.getElementById("app"));
root.render(<App />);
