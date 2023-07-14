import React from "react";
import "./styles.css";
import { PostEntity } from "@api/entities/PostEntity";
import { Button } from "@uikit/Button";

type TProps = {
  post: PostEntity;
  onClick: (post) => void;
};

export const PostCard: React.FC<TProps> = ({ post, onClick = () => ({}) }) => {
  return (
    <div className="post-card">
      <h4>{post.title}</h4>
      <p>{post.description}</p>

      <Button onClick={() => onClick(post)}>Просмотреть</Button>
    </div>
  );
};
