const express = require("express");

const app = express();



app.use("/hello", (req, res) => {
  res.send("Hello Hello!");
});

app.use("/test", (req, res) => {
  res.send("Hello Hello Hello!");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
