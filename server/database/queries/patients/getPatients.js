const { connection } = require('../../config');

const getPatients = () => {
  const sql = {
    text: 'SELECT p.*, d.name AS doctor_name FROM patients p JOIN doctors d ON p.doctor_id = d.id;',
  };
  return connection.query(sql);
};

module.exports = getPatients;
