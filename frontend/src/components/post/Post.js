import React from "react";
import Comments from "../comment/Comments";
import "./Post.css" 

const Post = ({ post, token, setPosts }) => {
  //if statement for whether there is a photo or not
  // <div className

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch("/posts", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({_id: post._id}),
    });

    if (response.status !== 201) {
      console.log("post not deleted")
    } else {
      console.log("post deleted")
      let data = await response.json()
      window.localStorage.setItem("token", data.token)
      let responseTwo = await fetch("/posts", {
        headers: {
          Authorization: `Bearer ${data.token}`,
        }
      })
      let dataTwo = await responseTwo.json();
      setPosts(dataTwo.posts)
      window.localStorage.setItem("token", dataTwo.token)
    }
  }

  return (
    <div className="container-fluid" data-cy="post" key={post._id}>
      <div className="card">
      <div className="card-header">
        <h5>{post.title}</h5>
      </div>
      <div className="card-body">
          {post.content}<br></br><br></br>
          <p>
            - {post.author.firstName} {post.author.lastName}
          </p>
          
          {post.photo}
          </div>
          <div className="justify-content d-flex justify-content-between p-2">
          <a href="/like-post">
            <button className="btn btn-primary me-md-2" type="button"> {post.likes > 0 ? post.likes: ''}<i className="bi bi-hand-thumbs-up"></i></button>
          </a>
          <form onSubmit={handleSubmit}>
            <button className="btn btn-danger" type="button"><i className="bi bi-trash"></i></button>
          </form>
          </div>
      </div>
      <br></br>
      <Comments post_id={post._id} />
      <br></br>
    </div>
  );
};

export default Post;
