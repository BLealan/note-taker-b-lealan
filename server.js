//Import Express.js, path package, contents of index.js
const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// Get request to return index.html
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html'))
);

//Get notes.html request when path ends in /notes
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, './public/notes.html'))
);

//Lets the user know where the server is running from
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);