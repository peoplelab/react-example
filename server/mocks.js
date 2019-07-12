/* eslint-disable import/no-extraneous-dependencies */

const express = require('express');
const compression = require('compression');
const mocks = require('../mocks');


const PORT = 4000;
const app = express();


app.use(compression());

mocks(app);

app.listen(PORT);
