const express = require("express");
const cors = require("cors");
const { router } = require("./routes/todo");
const { connection } = require("./connection/connection");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", router);

app.get("/", (req, res) => {
  res.send("Hello todos");
});

connection();

app.listen(5000, () => {
  console.log("server started");
});
