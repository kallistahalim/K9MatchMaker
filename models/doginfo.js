const mongoose = require("mongoose");
const multer = require ("multer");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new dogSchema object
// This is similar to a Sequelize model
const dogSchema = new Schema({
  // `name` must be of type String
  name: String,
  // `body` must be of type String
  gender: {
    type: String,
    enum: ["male", "female"]},
  breed : String,
  personality : String,
  desc : String
});

// This creates our model from the above schema, using mongoose's model method
const Doginfo = mongoose.model("furFriends",dogSchema);

// Export the dogInfo model
module.exports = Doginfo;
