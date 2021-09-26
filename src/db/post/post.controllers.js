const { Post } = require("./post.model");
const { User } = require("../user/user.model");

exports.readPost = async (req, res) => {
  try {
    const posts = await Post.find({ username: req.params.username });
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.createPost = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(200).send({ post: newPost, message: `new Post created` });
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.editPost = async (req, res) => {
  try {
    await Post.updateOne({ _id: req.body._id }, { content: req.body.content });
    res.status(200).send({ message: `Post update success` });
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.deletePost = async (req, res) => {
  try {
    await Post.deleteOne({ _id: req.params.id });
    res.status(200).send({ message: `Post deleted` });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.myPost = async (req, res) => {
  try {
    const posts = await Post.find({ username: req.user.username });
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createMyPost = async (req, res) => {
  try {
    const newPost = new Post({
      username: req.user.username,
      content: req.body.content,
    });
    await newPost.save();
    res.status(200).send({ post: newPost, message: `new Post created` });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.editMyPost = async (req, res) => {
  try {
    const posts = await Post.find({ username: req.user.username });
    await Post.updateOne(
      { _id: posts[req.body.post_number - 1]._id },
      { content: req.body.content }
    );
    res.status(200).send({ message: `Post #${req.body.post_number} updated!` });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteMyPost = async (req, res) => {
  try {
    const posts = await Post.find({ username: req.user.username });
    await Post.deleteOne({ _id: posts[req.body.post_number - 1]._id });
    res.status(200).send({ message: `Post #${req.body.post_number} deleted!` });
  } catch (error) {
    res.status(500).send(error);
  }
};
