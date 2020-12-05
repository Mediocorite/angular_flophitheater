// Importing the Packages
const express = require('express');

// Constants
const PORT = 5000;
const HOST = '0.0.0.0';

// Initializing the Server
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});
// Starting the server
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);