const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create schema
const WitnessSchema = new Schema({});

module.exports = Witness = mongoose.model("witnesses",WitnessSchema);
