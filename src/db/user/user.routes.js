const { Router } = require("express");
const {
  addUser,
  findUser,
  updateUser,
  deleteUser,
  loginUser,
} = require("./user.controllers");

const {
  hashPassword,
  decryptPassword,
  createToken,
  authenticateToken,
} = require("../../middleware/middleware");

const userRouter = Router();

userRouter.post("/add", hashPassword, addUser);
userRouter.get("/get/:key/:value", findUser);
userRouter.patch("/update/:username", hashPassword, updateUser);
userRouter.delete("/delete/:username", deleteUser);

userRouter.post("/register", hashPassword, addUser);
userRouter.post("/login", decryptPassword, createToken, loginUser);

userRouter.post("/return", authenticateToken, loginUser);

module.exports = userRouter;
