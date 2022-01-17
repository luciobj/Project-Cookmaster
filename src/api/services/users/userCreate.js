const createUser = require('../../models/users/createUser');
const { badRequest, conflict } = require('../../utils/dictionary/statusCode');
const errorConstructor = require('../../utils/functions/errorConstructor');
const { validateUser, validateUniqueEmail } = require('./userValidate');

const userCreate = async (name, email, password, role) => {
  const userValidation = validateUser(name, email, password);
  const emailValidation = await validateUniqueEmail(email); 
  if (userValidation !== true) {
    throw errorConstructor(badRequest, userValidation);
  }
  if (emailValidation !== true) {
    throw errorConstructor(conflict, emailValidation);
  }
  const { _id } = await createUser(name, email, password, role);
  return { user: { _id, name, email, role } };
};

module.exports = userCreate;
