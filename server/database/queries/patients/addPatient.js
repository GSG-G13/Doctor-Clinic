const { connection } = require('../../config');

const addPatient = ({
  patientName, patientPhone, patientGender, doctorId,
}) => {
  const sql = {
    text: 'INSERT INTO patients(name, phone, gender, doctor_id) VALUES($1, $2, $3, $4) RETURNING id, name, phone, gender, entered_at, doctor_id',
    values: [patientName, patientPhone, patientGender, doctorId],
  };
  return connection.query(sql);
};

module.exports = addPatient;
