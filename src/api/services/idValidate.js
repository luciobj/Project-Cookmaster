const { ObjectId } = require('mongodb');
const errorConstructor = require('../utils/functions/errorConstructor');

const idValidate = (id, status, message) => {
  if (!ObjectId.isValid(id)) {
    throw errorConstructor(status, message);
  }
  return true;
};

module.exports = idValidate;
