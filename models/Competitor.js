const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create schema
const CompetitorSchema = new Schema({});

module.exports = Competitor = mongoose.model("competitors", CompetitorSchema);
