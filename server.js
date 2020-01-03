const express = require("express");
var path = require('path');
const bodyParser = require("body-parser");
var swaggerJSDoc = require('swagger-jsdoc');

const app = express();
// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// swagger definition
var swaggerDefinition = {
  info: {
    title: 'Delivery Management API',
    version: '1.0.0'
  },
  host: 'localhost:3000',
  basePath: '/',
};

// options for the swagger docs
var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./app/routes/*.js'],
};

// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);

// serve swagger
app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// routes
require("./app/routes/user.routes.js")(app);
require("./app/routes/platform.routes.js")(app);
require("./app/routes/platformActivity.routes.js")(app);
require("./app/routes/restaurant.routes.js")(app);
require("./app/routes/food.routes.js")(app);
require("./app/routes/transaction.routes.js")(app);

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});