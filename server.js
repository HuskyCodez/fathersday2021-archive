const express = require('express');
const app = express();
const constant = require('./config/config');
const port = constant.port

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`Listening on port ==> ${port}`)
});