const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const BallotSchema = new Schema({});

module.exports = Ballot = mongoose.model("ballots", BallotSchema);
