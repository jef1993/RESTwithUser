const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../db/user/user.model");

require("dotenv").config();

exports.hashPassword = async (req, res, next) => {
  try {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }
    next();
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.decryptPassword = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (passwordMatch) {
      req.user = user;
      next();
    } else {
      res.status(403).send({ message: `Password incorrect` });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createToken = async (req, res, next) => {
  try {
    const token = jwt.sign(
      { username: req.body.username },
      process.env.ACCESS_TOKEN_SECRET
    );
    req.token = token;
    next();
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.authenticateToken = async (req, res, next) => {
  try {
  } catch (error) {
    res.status(500).send(error);
  }
};
