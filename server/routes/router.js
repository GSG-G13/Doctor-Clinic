const router = require('express').Router();
const { getPatientsController, addPatientController } = require('../controllers/patients');

router.get('/patient', getPatientsController);
router.post('/patient', addPatientController);
module.exports = router;
