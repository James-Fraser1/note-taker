// READING JSON DATA
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
});

router.post("./public/notes.html", (req, res) => {
console.log("You figured it out!")
    store.add(note)
        .then((note) => {
            return res.json(note)
        });
});

router.delete("./public/notes.html", (req, res) => {
    store.delete(req.params.id)
        .then((note) => {
            return res.json(note)
        });
});


module.exports = router;