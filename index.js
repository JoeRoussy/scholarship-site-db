'use strict';

const express = require('express');
const dbConfig = require('./libs/db-middleware');

let app = express();

if (process.env.NODE_ENV === 'production') {
    // TODO: Set production values
}

app.use('/api', dbConfig.api);
app.use('/dashboard', dbConfig.dashboard);

app.listen(3000, () => {
    console.log('Parse API listening on port 3000');
});
