const { ObjectId } = require('mongodb');
const errorConstructor = require('../utils/functions/errorConstructor');

const idValidate = (id, status, code, message) => {
  if (!ObjectId.isValid(id)) {
    throw errorConstructor(status, code, message);
  }
  return true;
};

module.exports = idValidate;