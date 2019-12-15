const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/posts", {useNewUrlParser : true});
mongoose.connection
  .once("open", () => console.log("connected"))
  .on("error", error => {
      console.log("your error", error);
  });