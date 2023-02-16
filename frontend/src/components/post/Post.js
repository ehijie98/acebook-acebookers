import React from "react";
import Comments from "../comment/Comments";
import "./Post.css" 

const Post = ({ post }) => {
  //if statement for whether there is a photo or not
  // <div className

  return (
    <div className="container-fluid" data-cy="post" key={post._id}>
      <div className="card">
      <div class="card-header">
        <h5>{post.title}</h5>
      </div>
      <div className="card-body">
          {post.content}
    
          {post.photo}
          </div>
          <div class="justify-content d-flex justify-content-between p-2">
            <button class="btn btn-primary me-md-2" type="button"> {post.likes > 0 ? post.likes: ''}<i class="bi bi-hand-thumbs-up"></i></button>
            <button class="btn btn-danger" type="button"><i class="bi bi-trash"></i></button>
          </div>
      </div>
      <br></br>
      <Comments post_id={post._id} />
      <br></br>
    </div>
  );
};

export default Post;
