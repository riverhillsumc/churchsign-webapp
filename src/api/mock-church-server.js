const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;

app.use(cors());
app.use(bodyParser.urlencoded());

app.listen(PORT, () => {
    console.log("Server is running on Port: " + PORT);
});

app.post('/', function (req, res) {
    console.log('req.body', req.body);

    res.sendStatus(200);
});
