const express = require('express');
const app = express();
const load = require('./load');
app.use(express.json());
const port = 8002;
app.get('/', (req, res) => {
    res.send('Connected');
});
app.get('/load', load.load);
app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`);
});

