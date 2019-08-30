const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const routes = require("./routes");
const fileUpload = require('express-fileUpload');

const methodOverride = require('method-override');
const Grid = require("gridfs-stream");




const app = express();
const PORT = process.env.PORT || 3001;


app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
// Init gfs
let gfs;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(fileUpload());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//DB config
const db = require('./config/keys').mongoURI;

//  Connect to the Mongo DB
 mongoose
 .connect(db, { useNewUrlParser: true })
 .then(() => console.log('MongoDB Connected'))
 .catch(err => console.log(err));

// Add routes, both API and view
app.use(routes);

const conn = mongoose.createConnection(db)
conn.once('open', () => {
  // initialize stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('furFriends');
});




// Start the API server - updated to ES6
app.listen(PORT, () => console.log(`🌎 ==> API Server now listening on PORT ${PORT}`));