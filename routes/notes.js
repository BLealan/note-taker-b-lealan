const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');

notes.get('/', (req, res) => {
    readFromFile('.db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.get('/:note_id', (req, res) => {
    const noteID = req.params.note_id;
    readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
        const result = json.filter((note) => note.note_id === noteId);
        return result.length > 0
        ? res.json(result)
        : res.json("No notes");
    });
});

// notes.delete('/:note_id', (req, res => {
//     const noteID = req.params.note_id;
//     readFromFile('./db/db.json')
//     .then((data) => JSON.parse(data))
//     .then((json) => {
//         const result = json.filter((note) => note.note_id !== noteID);
//         writeToFile('./db/db.json', result);
//         res.json(`Note ${noteID} has been deleted!`)
//     });
// }));

//UNIQUE ID
notes.post('/', (req, res) => {
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            //This will create a unique ID for each note
            note_id:uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json("Note added successfully");
    } else {
        res.errored("Error in creating new note");
    }
});

module.exports = notes;