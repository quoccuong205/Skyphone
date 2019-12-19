var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = new Schema({
  imagePath: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  status: { type: String, required: true },
  id: { type: Number},
  model: { type: String, required: true },
  detailDesc: { type: String, required: false },
  descPara:{ type: String, required: false }
});

module.exports = mongoose.model("Product", schema);
