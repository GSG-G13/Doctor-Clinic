const { connection } = require('../../config');

const getDoctors = () => {
  const sql = {
    text: 'SELECT * FROM doctors;',
  };
  return connection.query(sql);
};

module.exports = getDoctors;
