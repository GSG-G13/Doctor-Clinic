const { getDoctorName } = require('../../database/queries/doctors');
const { addPatient } = require('../../database/queries/patients');

const addPatientController = (req, res) => {
  const {
    patientName, patientPhone, patientGender, doctorId,
  } = req.body;

  let dataa;
  addPatient({
    patientName, patientPhone, patientGender, doctorId,
  })
    .then((data) => {
      dataa = data;
      return getDoctorName(doctorId);
    })
    .then((doctor) => {
      const opj = dataa.rows[0];
      const { doctor_name } = doctor.rows[0];

      res.status(201).json({
        data: { ...opj, doctor_name },
      });
    })
    .catch(() => {
      res.status(500).json({ msg: 'SERVER ERROR' });
    });
};
module.exports = addPatientController;
