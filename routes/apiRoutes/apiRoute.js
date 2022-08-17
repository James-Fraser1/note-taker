// READING JSON DATA
const { notStrictEqual } = require('assert');
const { response } = require('express');
const fs = require('fs');
const router = require('express').Router();
const notes = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');

// // Routes
// router.get("/notes", (req, res) => {
//     console.log("Doesn't run past this")
//     store.get(req.body)
//         .then((note) => {
//             return res.json(note)
//         })
//         .catch((error) => {
//             response.status500.json(error)
//             console.log(error)
//         })
//     console.log("all done!")
// });

router.get("/notes", (req, res) => {
    res.json(notes)
});

router.post("/notes", (req, res) => {
    var newNote = req.body;
    newNote.id = uuidv4();
    notes.push(newNote);
    fs.writeFile('./db/db.json', JSON.stringify(notes), (err, data) => {
        if(err)
        throw err;
    });
    res.json(notes);
    // var newNote = req.body
    // fs.readFile("./db/db.json", function (err, data) {
    //     if (err) throw err;
    //     var notes = JSON.parse(data);
    //     // Push the req.body into the db.json as newNote
    //     notes.push(newNote);
    //     // Unique ID Creation
    //     notes.forEach(function (item, i) {
    //         item.id = 1 + i;
    //     })
    //     // New note is stringified with other notes
    //     fs.writeFile("./db/db.json", JSON.stringify(notes), function (err) {
    //         if (err) throw err;
    //     })
    // })
    // res.json(newNote)
    // console.log("POST request heard and note saved to db.json!")
    // store
    // .add(req.body)
    // .then((note) => res.json(note))
    // .catch((err) => res.status(500).json(err))
});

router.delete("/notes/:id", (req, res) => {
    // Select id from the parameters
    const id = req.params.id
    const remainingNotes = notes.filter((note) => {
        return note.id !== id
    })
    fs.writeFile('./db/db.json', JSON.stringify(remainingNotes), (err, data) => {
        if(err)
        throw err;
    })
    res.json(remainingNotes)
});

module.exports = router;