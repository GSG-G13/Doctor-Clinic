const router = require('express').Router();
const { getPatientsController, addPatientController } = require('../controllers/patients');
const { getDoctorsController } = require('../controllers/doctors');
const { error404, error500 } = require('../controllers/errors');

router.get('/patient', getPatientsController);

router.post('/patient', addPatientController);

router.get('/doctors', getDoctorsController);

router.use(error404);

router.use(error500);

module.exports = router;
