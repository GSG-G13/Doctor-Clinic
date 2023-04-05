const { Pool } = require('pg');
require('dotenv').config();

const connection = new Pool({
  connectionString: process.env.DB_URL,
  ssl: false,
});

module.exports = connection;
