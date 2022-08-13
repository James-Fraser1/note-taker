const path = require('path');
const express = require('express');
const apiRoute = require('./routes/apiRoutes/apiRoute');
const htmlRoute = require('./routes/htmlRoutes/htmlRoute');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// app.use('/api', apiRoute);
// app.use('/', htmlRoute);
console.log(apiRoute)
console.log(htmlRoute)
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});