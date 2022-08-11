// READING JSON DATA
const fs = require('fs');

// Calling UUID (npm package)
const UUID = require("uuid");

// Routes
module.exports = function (app) {
    app.get("/api/notes", (req, res) => {
        console.log("response from getting notes");

        let data = fs.readFileSync("./Develop/db/db.json", "utf8");

        res.json(JSON.parse(data));
    });

    app.post("/api/notes", (req, res) => {
        const Note1 = {
            ...req.body,
            id: UUID(),
        };

        console.log("response from posting notes")

        let data = fs.readFileSync("./Develop/db/db.json", "utf8");

        const dataJSON = JSON.parse(data);

        dataJSON.push(Note1);

        fs.writeFile("./Develop/db/db.json", JSON.stringify(dataJSON)),
            (err, text) => {
                if (err) {
                    console.error(err)
                    return;
                }
                console.log("Yes", text);
            };
        console.log("New Note has been created!");

        res.json(data);

    });

    

};
// router.get('/animals', (req, res) => {
//   let results = animals;
//   if (req.query) {
//     results = filterByQuery(req.query, results);
//   }
//   res.json(results);
// });

// router.post('/animals', (req, res) => {
//   // set id based on what the next index of the array will be
//   req.body.id = animals.length.toString();

//   if (!validateAnimal(req.body)) {
//     res.status(400).send('The animal is not properly formatted.');
//   } else {
//     const animal = createNewAnimal(req.body, animals);
//     res.json(animal);
//   }
// });

// module.exports = router;
