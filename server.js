const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/connect');
const config = require('./config');
const tasksRouter = require('./routes/api-v1/tasks');
const notFound = require('./middleware/notFound');

dotenv.config();
const connectionString = process.env.MONGO_URI;

connectDB(connectionString).then(() => {
    console.log('[SERVER]: Connected to the db successfully.');
    const app = express();
    const PORT = config.server.port;

    app.use(express.json());
    app.use(tasksRouter);
    app.use(notFound);

    app.get('/', (req, res) => {
        res.redirect('/api/v1/tasks');
    });

    app.listen(PORT, () => {
        console.log('[SERVER]: Running at http://localhost:' + PORT);
    });

}).catch((error) => {
    console.error('[ERROR]: ', {
        msg: error.message,
        code: error.code,
        codeName: error.codeName
    });
    process.exitCode = 1;
});