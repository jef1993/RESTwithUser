const { Router } = require("express");
const {
  createPost,
  readPost,
  editPost,
  deletePost,
  myPost,
  createMyPost,
  editMyPost,
  deleteMyPost,
} = require("./post.controllers");

const postRouter = Router();

const { authenticateToken } = require("../../middleware/middleware");

postRouter.get("/post/user=:username", readPost);
postRouter.post("/post", createPost);
postRouter.patch("/post", editPost);
postRouter.delete("/post/id=:id", deletePost);

postRouter.get("/myPosts", authenticateToken, myPost);
postRouter.post("/myPosts", authenticateToken, createMyPost);
postRouter.patch("/myPosts", authenticateToken, editMyPost);
postRouter.delete("/myPosts", authenticateToken, deleteMyPost);

module.exports = postRouter;
