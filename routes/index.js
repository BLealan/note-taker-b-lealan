const router = require('express').Router();

const notesRouter = require('./notes');

// Handles functionality of notes.js and activated when path is on /notes
router.use('/notes', notesRouter);

module.exports = router;