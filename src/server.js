import express from 'express';
const PORT = '4000';

/**
 * Initializing express
 */
const app = express();

/**
 * This message will display on browser while opening with port
 */

app.get('/', (req, res) => {
    res.send(`Welcome to node server and port number ${PORT}`);
});

/**
 * A display message in terminal
 */
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
