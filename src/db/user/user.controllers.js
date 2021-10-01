const { User } = require("./user.model");

exports.addUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).send({
      user: newUser,
      message: `User ${newUser.username} successfully added.`,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.findUser = async (req, res) => {
  try {
    const user = await User.find({
      [req.params.key]: req.params.value,
    });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.updateUser = async (req, res) => {
  try {
    await User.updateOne({ username: req.params.username }, req.body);
    res
      .status(200)
      .send({ message: `Update ${Object.keys(req.body)} success` });
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ username: req.params.username });
    res
      .status(200)
      .send({ message: `User ${req.params.username} successfully deleted` });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.loginUser = async (req, res) => {
  try {
    res.status(200).send({
      user: req.user,
      accessToken: req.token,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
