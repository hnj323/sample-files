var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ProcedureSchema = new Schema({
  id: String,
  name: String,
  createdBy: String,
  filelocation: String,
  addedtoproduct: String,
  createDate: Date,
  updateDate: Date,
  tags: String
});

module.exports = mongoose.model("Procedure", ProcedureSchema);
