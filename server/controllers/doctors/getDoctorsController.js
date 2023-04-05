const { getDoctors } = require('../../database/queries/doctors');

const getDoctorsController = (req, res) => {
  getDoctors()
    .then((data) => res.json(data.rows))
    .catch(() => res.status(500).json({ msg: 'SERVER ERROR' }));
};

module.exports = getDoctorsController;
