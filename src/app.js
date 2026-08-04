const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Virat",
    lastName: "Kohli",
    emailId: "virat@kohli.com",
    password: "harshit@123",
  });
  
  try{
  await user.save();
  res.send("User Added successfully!");
  } catch (err) {
    res.status(400).send("Error saving th user:" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established  ... ");

    app.listen(5000, () => {
      console.log("Server is successfully listening on port 5000...");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected!!");
  });
