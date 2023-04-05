const express = require('express');
require('dotenv').config();
const { join } = require('path');
const router = require('./routes/router');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'public')));
app.set('port', process.env.PORT || 3000);

app.use(router);
module.exports = app;
