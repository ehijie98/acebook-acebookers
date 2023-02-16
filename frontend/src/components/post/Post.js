import React from "react";
import Comments from "../comment/Comments";
const Post = ({ post }) => {
  return (
    <article data-cy="post" key={post._id}>
      {post.title}
      <br></br>
      <br></br>
      {post.content}
      <br></br>
      <br></br>
      {post.photo}
      <br></br>
      <br></br>
      <Comments post_id={post._id} />
    </article>
  );
};

export default Post;
