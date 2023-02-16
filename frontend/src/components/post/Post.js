import React from "react";
import Comments from "../comment/Comments";
const Post = ({ post }) => {
  //if statement for whether there is a photo or not
  // <div className

  return (
    <article data-cy="post" key={post._id}>
      {post.title}
    
      {post.content}
 
      {post.photo}
   
      <Comments post_id={post._id} />
    </article>
  );
};

export default Post;
