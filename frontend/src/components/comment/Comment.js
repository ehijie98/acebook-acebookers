import React from 'react';

const Comment = ({comment}) => {
  return(
    <article data-cy="comment" key={ comment._id }>{ comment.content }<br></br><br></br></article>
  )
}

export default Comment;
