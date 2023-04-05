const router = require('express').Router();
const { getPatientsController } = require('../controllers/patients');

router.get('/patient', getPatientsController);

module.exports = router;
