const express = require("express");

const app = express();

const {adminAuth,userAuth} = require("./middlewares/auth");

app.use("/admin", adminAuth);


app.post("/user/login", (req,res) => {
  res.send("User logged in successfully!")
});

app.get("/user/data", userAuth, (req, res) => {
  res.send("User Data Sent");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All Data Sent");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Delete a user Data Sent");
});

app.listen(6666, () => {
  console.log("Server is successfully listening on port 6666...");
});
