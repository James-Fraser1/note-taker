// READING JSON DATA
const fs = require('fs');
const { get } = require('http');
const router = require('express').Router();
// Calling UUID (npm package)
const { v4: uuidv4 } = require('uuid');

// Routes
router.get("/notes", (req, res) => {
    console.log("response from getting notes");

    // let data = fs.readFileSync("./Develop/db/db.json", "utf8");

    // res.json(JSON.parse(data));
});

// let data = fs.readFileSync("./Develop/db/db.json", "utf8");

// const dataJSON = JSON.parse(data);

// dataJSON.push(uuidv4);

// fs.writeFile("./Develop/db/db.json", JSON.stringify(dataJSON)),
//     (err, text) => {
//         if (err) {
//             console.error(err)
//             return;
//         }
//         console.log("Yes", text);
//     };
// console.log("New Note has been created!");

// res.json(data);

// router.post("./Develop/public/notes.html")

module.exports = router;