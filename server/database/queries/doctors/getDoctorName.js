const { connection } = require('../../config');

const getDoctorName = (id) => {
  const sql = {
    text: `SELECT name AS doctor_name from doctors where id=${id}`,
  };
  return connection.query(sql);
};

module.exports = getDoctorName;
