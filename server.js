// Dependencies
const express = require('express');
const routes = require('./routes');
// const sequelize = require('./');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Sets up the routes
app.use(routes);

// Starts the server to begin listening
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });