const connection = require('../../config');

const getPatients = () => {
  const sql = {
    text: 'SELECT * FROM patients',
  };
  return connection.query(sql);
};

module.exports = getPatients;
