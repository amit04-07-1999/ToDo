const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://todo:9315264682@todo.cyyco0i.mongodb.net/"
      )
      .then(() => {
        console.log("Atlas MongoDB Connected");
      });
  } catch (error) {
    console.log(error);
  }
};
conn();
