const { Post } = require("./post.model");

exports.readPost = async (req, res) => {
  try {
    const posts = Post.find(req.params.username);
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.createPost = async (req, res) => {};
exports.editPost = async (req, res) => {};
exports.deletePost = async (req, res) => {};
