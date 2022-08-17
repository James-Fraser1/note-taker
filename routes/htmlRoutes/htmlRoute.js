const router = require('express').Router();
const path = require("path");

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, pubNote));
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, pubNote));
});

module.exports = router;
