const notes = require("express").Router();

notes.get("/", (req, res) => {
    const noteID = req.params.note_id;
    readFromFile("./db/notes.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
        const result = json.filter((note) => note.note_id === noteId);
        return result.length > 0
        ? res.json(result)
        : res.json("No notes");
    });
});