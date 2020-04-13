const express = require("express");
const app     = express();
var morgan    = require('morgan')
const cors    = require('cors');
const bodyParser = require("body-parser");
const mongoose   = require("mongoose");

const swatchRoutes = require("./api/routes/swatches");

mongoose.connect(
  "mongodb://localhost/swatchesDB", 
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    useFindAndModify: false 
  }, function(err, db) {
    if (err) {
      console.error('Unable to connect to the server. Please start the server. Error:', err);
      process.exit(1);
    }
  }
);
mongoose.Promise = global.Promise;

app.use(cors());
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Root route to show react website
app.use('/', express.static('./public'));

// Route
app.use("/api/swatches", swatchRoutes);

//Not found route
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

//Errors route
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      code   : error.code || error.status || 500,
      message: error.message
    }
  });
});

module.exports = app;
