const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TradeSchema = new Schema({
  trade: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = Trade = mongoose.model("trade", TradeSchema);
