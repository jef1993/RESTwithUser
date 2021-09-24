require("./db/connection");
const express = require("express");
const userRouter = require("./db/user/user.routes");
const postRouter = require("./db/post/post.routes");

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(userRouter);
app.use(postRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
