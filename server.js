// DEPENDENCIES, adding express, initializing it

const express = require('express')

const app = express()

// setting up an port // process.env.Port for deploying environment and 8080 for local use
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
// Selecting route files for server, providing directions for how to respond to different actions

 require('./routes/apiRoutes')(app);
 require('./routes/htmlRoutes.js')(app);
 // Static files.
 app.use(express.static('public'))
 app.use('/css', express.static(__dirname + 'public/assets/css'))
 app.use('/js', express.static(__dirname + 'public/assets/js'))

// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});