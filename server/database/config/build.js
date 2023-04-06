const { readFileSync } = require('fs');
const { join } = require('path');

const connection = require('./connection');

const sql = readFileSync(join(__dirname, 'build.sql')).toString();

connection
  .query(sql)
  .then(() => console.log('DB built successfully!'))
  .catch(() => console.log('Failed to run the build'));
