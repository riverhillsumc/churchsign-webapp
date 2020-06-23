const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4444;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT,() => {
    console.log("Server is running on Port: " + PORT);
});

app.use(express.static('./build'));