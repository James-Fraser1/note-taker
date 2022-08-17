// Calling UUID (npm package)
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const util = require('util');
const readFromFile = util.promisify(fs.readFile);
const writeFromFile = util.promisify(fs.writeFile);

class store {

    get() {
        const theseNotes = [];
        return this.read(data)
            .then((data) => {
                theseNotes.concat(JSON.parse(data))
                return theseNotes
            });
    };

    write(data) {
        return writeFromFile('./db/db.json', json.stringify(data))
    };

    read() {
        return readFromFile('./db/db.json', 'utf8');
    };

    add(note) {
        // Using UUID create a new note format
        const { name, body } = note;
        const newNote = { name, body, id: uuidv4() }
            // if/then null statement making someone return data in note
            .then((allNotes) => {
                [
                    ...allNotes,
                    newNote
                ]
            })

            .then((data) => {
                this.write(data)
            })

            .then(() => {
                newNote
            })
    };

    delete(note) {
    };
};

module.exports = new store();