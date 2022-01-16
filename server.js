const express = require('express');
const config = require('./config');

const app = express();
const PORT = config.server.port;

app.listen(PORT, () => {
    console.log("Server is up at http://localhost:" + PORT);
});