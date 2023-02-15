const Comment = require("../models/comment");
const Post = require("../models/post");
const User = require("../models/user")
const TokenGenerator = require("../models/token_generator");

const CommentsController = {
  // finds a post with post_id
  Index: (req, res) => {
    Comments.find(async (err, comments) => {
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
      user_id: req.body.user_id,
      likes: req.body.likes,
      likers: req.body.likers
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
      res.status(201).json({ message: 'OK', token: token });
    });
  },
};

module.exports = CommentsController;
