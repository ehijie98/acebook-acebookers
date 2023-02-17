const express = require("express");
const router = express.Router();

const PostsController = require("../controllers/posts");

router.get("/", PostsController.Index);
router.post("/", PostsController.Create);
router.delete("/", PostsController.Delete);
router.put("/", PostsController.Update);
router.post("/like", PostsController.Like)

module.exports = router;
