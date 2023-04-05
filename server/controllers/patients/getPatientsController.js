const { getPatients } = require('../../database/queries/patients');

const getPatientsController = (req, res) => {
  getPatients()
    .then((result) => res.json(result.rows))
    .catch(() => {
      res.status(500).json({ msg: 'SERVER ERROR' });
    });
};

module.exports = getPatientsController;
