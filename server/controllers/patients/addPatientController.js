const { addPatient } = require('../../database/queries/patients');

const addPatientController = (req, res) => {
  const {
    patientName, patientPhone, patientGender, doctorId,
  } = req.body;

  addPatient({
    patientName, patientPhone, patientGender, doctorId,
  })
    .then((data) => {
      res.status(201).json({
        patient: data.rows[0],
      });
    }).catch(() => {
      res.status(500).json({ msg: 'SERVER ERROR' });
    });
};
module.exports = addPatientController;
