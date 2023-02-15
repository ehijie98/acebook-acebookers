import React, { useState } from "react";

const CreateComment = ({ token, post_id }) => {
  const [comment, setComment] = useState("");
  const [error, setError] = useState(false);

  const handleCommentChange = (event) => {
    const newValue = event.target.value;
    if (newValue.length < 150) {
      setError(false);
      setComment(event.target.value);
    } else {
      setError(true);
      //show error under textbox
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(post_id);

    let response = await fetch("/comments", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ content: comment, post_id: post_id }),
    });

    if (response.status !== 201) {
      console.log("new comment created");
    } else {
      console.log("comment NOT created");
    }
  };

  if (token) {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="What do you think about this post?"
            id="newComment"
            rows="2"
            cols="50"
            value={comment}
            onChange={handleCommentChange}
          />
          <input
            role="submit-button"
            id="submit"
            type="submit"
            value="Submit"
          />
        </form>
        {error && <p>Comments can only be 150 chars</p>}
      </>
    );
  } else {
    return <></>;
  }
};

export default CreateComment;
