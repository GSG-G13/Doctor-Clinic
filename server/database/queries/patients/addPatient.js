const { connection } = require('../../config');

const addPatient = ({
  name, phone, gender, doctorId,
}) => {
  const sql = {
    text: 'INSERT INTO patients(name, phone,gender, doctor) VALUES($1, $2, $3, $4) RETURNING *',
    values: [name, phone, gender, doctorId],
  };
  return connection.query(sql);
};

module.exports = addPatient;
