const express = require('express');
const http = require('http');
const app = express();

// Ping the bot every 5 minutes to prevent from sleeping
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.repl.co/`);
}, 300000);

// Basic endpoint
app.get('/', (req, res) => {
  res.send('BayMax Is Awake.');
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
