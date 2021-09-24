const { Router } = require("express");
const {
  createPost,
  readPost,
  editPost,
  deletePost,
} = require("./post.controllers");

const postRouter = Router();

postRouter.get("/post/:username", readPost);
postRouter.post("/post", createPost);
postRouter.patch("/post", editPost);
postRouter.delete("/post", deletePost);

module.exports = postRouter;
