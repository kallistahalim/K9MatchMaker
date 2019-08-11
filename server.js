const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const routes = require("./routes");
const fileUpload = require('express-fileUpload');

const app = express();
const PORT = process.env.PORT || 3001;

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

// app.post('/upload', (req, res) => {
//   if(req.files === null) {
//     return res.status(400).json({ msg: 'No file uploaded.'})
//   }


//   const file = req.files.file;
//   console.log(req.files)

//   file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
//     if(err) {
//       console.log(err); 
//       return res.status(500).send(err);
//     }

//     res.json({ fileName: file.name, filePath: `/uploads/${file.name}`});
//   });
// });

// Start the API server - updated to ES6
app.listen(PORT, () => console.log(`🌎 ==> API Server now listening on PORT ${PORT}`));