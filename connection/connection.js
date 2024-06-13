const mongoose = require("mongoose");

const connection = async () => {
  await mongoose
    .connect(
      "mongodb+srv://abdullahbhatti3399:abdullah2255@cluster0.p3frlwi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB", err);
    });
};
module.exports = { connection };