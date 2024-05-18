//# set up server
const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("views", "./views");
const port = process.env.PORT;
//end setup server

// test running server
app.get("/", (req, res) => {
  res.render("client/homepage.ejs", {
    message: "successfully",
  });
});
//end test running server

//# running server
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
