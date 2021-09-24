const mongoose = require("mongoose");
require("dotenv").config();

const connection = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Connection Success");
  } catch (error) {
    console.log(error);
  }
};

connection();
