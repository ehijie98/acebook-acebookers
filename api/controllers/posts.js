const Post = require("../models/post");
const TokenGenerator = require("../models/token_generator");


const PostsController = {
  Index: (req, res) => {
    const newPosts = Post.find().populate("author");
    newPosts.find().sort('-createdAt').find(async (err, posts) => {
      if (err) {
        throw err;
      }

      const token = await TokenGenerator.jsonwebtoken(req.user_id)
      res.status(200).json({ posts: posts, token: token });
    });
  },
  Create: (req, res) => {
    const postData = {
      title: req.body.title,
      content: req.body.content,
      photo: req.body.photo,
      author: req.user_id
    }

    const post = new Post(postData)

    post.save(async (err) => {
      if (err) {
        throw err;
      }

      const token = await TokenGenerator.jsonwebtoken(req.user_id)
      res.status(201).json({ message: postData.content, token: token });
    });
  },

  Delete: (req, res) => {
    Post.deleteOne({_id: req.body._id}, async (err) => {
      if (err) {
        throw err;
      } else {

        const token = await TokenGenerator.jsonwebtoken(req.user_id);
        res.status(201).json({ message: "post deleted", token: token });
      }
    });
  },

  Update: (req, res) => {
    Post.updateOne({_id: req.body._id, content: req.body.content}, async (err) => {
      if (err) {
        throw err;
      } else {

        const token = await TokenGenerator.jsonwebtoken(req.user_id);
        res.status(201).json({ message: req.body.content, token: token });
      }
    });
  }
};

module.exports = PostsController;
