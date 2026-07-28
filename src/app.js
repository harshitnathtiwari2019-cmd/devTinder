const express = require("express");

const app = express();

app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Harshit", lastName: "Tiwari" });
});

app.listen(6666, () => {
  console.log("Server is successfully listening on port 6666...");
});
