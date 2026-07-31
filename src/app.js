const express = require("express");

const app = express();

app.use("/", (err, req, res, next) => {
  if (err) {
    // Log your error message
    res.status(500).send("something went wrong");
  }

});


app.get("/getUserData", (req, res) => {
  // try{

  // Logical of DB call and user data
  throw new Error("dkjkjjkkd");
   res.send("User Data Sent");
  }
  // catch(err){
  //  res.status(500).send("Some Error contact support team");
  // }
 
//  }
);

app.use("/", (err, req, res, next) => {
  if (err) {
    // Log your error message
    res.status(500).send("something went wrong");
  }

});





app.listen(6666, () => {
  console.log("Server is successfully listening on port 6666...");
});
