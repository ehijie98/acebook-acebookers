import React from "react";

const Comment = ({ comment }) => {
  return (
    <article data-cy="comment" key={comment._id}>
      {comment.content}
      <br></br>
      <br></br>
      {comment.likes}
      <br></br>
      <br></br>
      {comment.likers}
    </article>
  );
};

export default Comment;
