const { connection } = require('../../config');

const addPatient = ({ name, phone, doctorId }) => {
  const sql = {
    text: 'INSERT INTO patients(name, phone, doctor) VALUES($1, $2, $3) RETURNING *',
    values: [name, phone, doctorId],
  };
  return connection.query(sql);
};

module.exports = addPatient;
