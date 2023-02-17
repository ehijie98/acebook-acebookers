import React from 'react';
import './Comment.css';

const Comment = ({comment, post_id}) => {
  return(
    <div className="card border-light">
      <div className="card-body bg-primary-subtle border border-primary-subtle rounded-3" data-cy="comment" key={ comment._id } post_id={post_id}>
       <p> { comment.content } {comment.user_id.firstName + comment.user_id.lastName}</p>
      </div>
    </div>
  )
}

export default Comment;
