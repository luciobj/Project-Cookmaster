const findUserByEmailandPassword = require('../../models/users/findUserByEmailandPassword');
const { tokenGenerator } = require('../../models/tokenGenerator');
const { unauthorized } = require('../../utils/dictionary/statusCode');
const errorConstructor = require('../../utils/functions/errorConstructor');
const validateLogin = require('./loginValidate');

const userLogin = async (email, password) => {
  const validate = validateLogin(email, password);
  if (validate !== true) {
    throw errorConstructor(unauthorized, validate);
  }
  const user = await findUserByEmailandPassword(email, password);
  if (!user) {
    throw errorConstructor(unauthorized, 'Incorrect username or password');
  }
  const { _id: id, role } = user;
  return tokenGenerator({ id, email, role });
};

module.exports = userLogin;
