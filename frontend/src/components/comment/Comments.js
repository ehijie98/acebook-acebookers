import React, { useEffect, useState } from "react";
import Comment from "../comment/Comment";
import CreateComment from "../createComment/CreateComment";

const Comments = ({ post_id }) => {
  const [comments, setComments] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  // This is triggered whenever the page is loaded as token exists
  // Changing the state of the comments and token hooks
  useEffect(() => {
    if (token) {
      fetch("/comments", {
        headers: {
          Authorization: `Bearer ${token}`,
          post_id: `${post_id}`,
        },
      })
        .then((response) => response.json())
        .then(async (data) => {
          window.localStorage.setItem("token", data.token);
          setToken(data.token);
          setComments(data.comments);
        });
    }
  }, [token, post_id]);

  return (
    <>
      <h4>Comments</h4>
      <CreateComment post_id={post_id} token={token} setToken={setToken} setComments={setComments}/>
      <br></br>
      <div id="comments">
  
        {comments
          .filter((comment) => comment.post_id === post_id)
          .map((comment) => (
            <Comment comment={comment} key={comment._id} post_id={post_id}  />
          ))}
      </div>
    </>
  );
};

export default Comments;
