const express = require("express");

const app = express();

app.use("/user", (req,res) => {
  res.send("HAHAHAHAHAHAH")
})



// This will  only handle  GET call to /user
app.get("/user", (req, res) => {
  res.send({ firstName: "Harshit", lastName: "Tiwari" });
});

app.post("/user",(req, res) => {
    // Saving data to db
    res.send("Data successfully saved to the database");
  });

app.delete("/user",(req,res) => {
  res.send("Deleted succuessfully");
});  

// This will match all the HTTP method API calls to  /test
app.use("/test", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
