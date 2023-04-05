const express = require('express');
require('dotenv').config();

const app = express();
const { join } = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(express.static(join(__dirname,'..','public')));
app.set('port',process.env.PORT || 3000);

module.exports = app;