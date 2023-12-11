const express = require("express");
const path = require("path");
const api = require("./routes/index.js");

const PORT = process.env.PORT || 3001;

const app = express();

// Get request to return index.html
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

//Get notes.html request
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);