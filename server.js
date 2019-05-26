const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/Users');  //Login authtentication route

const routes = require("./routes/api/API");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

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

//Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Add routes, both API and view
app.get('/', (req, res) => res.send('trial one'));

app.use('/api/users', users);    //login authentication route


app.use(routes);

// Start the API server - updated to ES6
app.listen(PORT, () => console.log(`🌎 ==> API Server now listening on PORT ${PORT}`));