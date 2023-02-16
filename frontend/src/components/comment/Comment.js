import React from 'react';

const Comment = ({comment, post_id}) => {
  return(
    <article data-cy="comment" key={ comment._id } post_id={post_id}>{ comment.content }<br></br><br></br></article>
  )
}

export default Comment;
