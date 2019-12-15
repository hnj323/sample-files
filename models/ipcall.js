var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Procedure = require("./models.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

var db = "mongodb://localhost/incubator";
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/", (req, res) => {
  res.send("happy man");
});

app.get("/ProcedureSchema", (req, res) => {
  console.log("getting procedure");
  Procedure.find({}).exec(function(err, data) {
    if (err) {
      res.send("error has occured");
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

app.post("/procedure/new", (req, res) => {
  newProcedure = new Procedure();

  newProcedure.name = req.body.name;
  newProcedure.createdBy = req.body.createdBy;
  newProcedure.fileLocation = req.body.fileLocation;
  newProcedure.addedToproduct = req.body.addedToproduct;
  newProcedure.createDate = req.body.createDate;
  newProcedure.updateDate = req.body.updateDate;
  newProcedure.tags = req.body.tags;

  newProcedure.save(function(err, data) {
    if (err) {
      res.send("error saving book");
    } else {
      console.log(data);
      res.send(data);
    }
  });
});

app.put("/procedure/few/:name", (req, res) => {
  console.log(req.body);
  Procedure.findOneAndUpdate(
    {
      name: req.params.name
    },
    { $set: { createdBy: req.body.createdBy } },
    { upsert: true },
    function(err, data) {
      if (err) {
        console.log("error occured", err);
      } else {
        console.log(data);
        res.send(data);
      }
    }
  );
});

app.listen(8080, function() {
  console.log("working");
});
