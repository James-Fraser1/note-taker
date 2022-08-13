const router = require('express').Router();
// const publicNote = require('../../Develop/public/notes.html');
// const reqHTMLRoute = require('./htmlRoute');

const path = require("path");

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
