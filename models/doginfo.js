const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new dogSchema object
// This is similar to a Sequelize model
const dogSchema = new Schema({
  // `title` must be of type String
  name: String,
  // `body` must be of type String
  gender: {
    type: String,
    enum: ["male", "female"]
}
});

// This creates our model from the above schema, using mongoose's model method
const dogInfo = mongoose.model("dogInformation",dogSchema);

// Export the dogInfo model
module.exports = dogInfo;
