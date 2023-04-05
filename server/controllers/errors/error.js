const { join } = require('path');

const error404 = (req, res) => {
  res.status(404).sendFile(join(__dirname, '..', '..', '..', 'public', 'errors', '404.html'));
};

const error500 = (err, req, res) => {
  res.status(500).sendFile(join(__dirname, '..', '..', '..', 'public', 'errors', '500.html'));
};

module.exports = { error404, error500 };
