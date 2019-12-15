var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({extended:true});

var rock = {
  name : "harshit",
  age : 18,
  id : 55543634
};

app.get("/", function(req, res){
    res.send("hii hj");
});

app.get("/bye", function(req, res){
  res.send("kya halchal");
  console.log("maja na bhai");
});


app.get("/bye/:name", function(req, res){
  res.send("kya halchal " + req.params.name);
  console.log("maja na bhai");
});


app.post('/number', urlencodedParser, function (req, res) {
  console.log(req.body.age);
  rock.age = req.body.age;
  res.send(rock)
})
console.log(rock.age);
    
app.listen(3040, function(){
    console.log("server has started");
});



