const express = require('express');

const app = express();

require('./middlewares')(app);
require('./routes')(app);

app.use((req, res, next) => {
    res.status(404);
    res.type('txt').send('Not found');
    console.log('404');
})

module.exports = app;