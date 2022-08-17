// READING JSON DATA
const { notStrictEqual } = require('assert');
const { response } = require('express');
const fs = require('fs');
const router = require('express').Router();
const store = require('../../db/store');

// Routes
router.get("/notes", (req, res) => {
    console.log("Doesn't run past this")
    store.get(req.body)
        .then((note) => {
            return res.json(note)
        })
        .catch((error) => {
            response.status500.json(error)
            console.log(error)
        })
    console.log("all done!")
});

router.post("/notes", (req, res) => {
    var newNote = req.body
    fs.readFile("./db/db.json", function (err, data) {
        if (err) throw err;
        var notes = JSON.parse(data);
        // Push the req.body into the db.json as newNote
        notes.push(newNote);
        // Unique ID Creation
        notes.forEach(function (item, i) {
            item.id = 1 + i;
        })
        // New note is stringified with other notes
        fs.writeFile("./db/db.json", JSON.stringify(notes), function (err) {
            if (err) throw err;
        })
    })
    res.json(newNote)
});

router.delete("./public/notes", (req, res) => {
    store.delete(req.params.id)
        .then((note) => {
            return res.json(note)
        });
});


module.exports = router;