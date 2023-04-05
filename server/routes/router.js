const router = require('express').Router();
const { getPatientsController, addPatientController } = require('../controllers/patients');
const { getDoctorsController } = require('../controllers/doctors');

router.get('/patient', getPatientsController);

router.post('/patient', addPatientController);

router.get('/doctors', getDoctorsController);

module.exports = router;
