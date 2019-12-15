const express = require("express");

const app = express();

var rock = [{
    name : "harshit",
    age : 18,
    id : 55543634
  }];

app.get("/", function(req, res){
    res.send(rock);
})

app.listen(4000);