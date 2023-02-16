const Comment = require("../models/comment");
const TokenGenerator = require("../models/token_generator");

const CommentsController = {
  // finds a post with post_id
  Index: (req, res) => {
    const newComments = Comment.find().populate("user_id");
    newComments.find(async (err, comments) => {
      if (err) {
        throw err;
      }
      const token = await TokenGenerator.jsonwebtoken(req.user_id)
      res.status(200).json({ comments: comments, token: token });
    });
  },
  Create: (req, res) => {
    const commentBody = {
      content: req.body.content,
      post_id: req.body.post_id,
      user_id: req.user_id
    }
    //we create an instance of the Comment model
    const comment = new Comment(commentBody);
    //we save it to the database 
    comment.save(async (err) => {
      if (err) {
        throw err;
      }

      const token = await TokenGenerator.jsonwebtoken(req.user_id)
      //express returns a response object. We set that to a success here
      res.status(201).json({ message: commentBody.content, token: token });
    });
  },
};

module.exports = CommentsController;
