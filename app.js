const express = require('express'); // Library for Node
const path = require('path'); // Used for defining public folder
const bodyParser = require('body-parser'); // Another Library
const cors = require('cors'); // Another Lib

const app = express(); // We call upon the express library through 'app'

const poll = require('./routes/poll');

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Enable CORS
app.use(cors());

app.use('/poll', poll);

const port = 3000;

// Start server
app.listen(port, () => console.log(`Server started on port ${port}`));