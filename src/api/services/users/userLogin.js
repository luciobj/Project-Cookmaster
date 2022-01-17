const findUser = require('../../models/users/findUser');
const tokenGenerator = require('../../models/users/tokenGenerator');
const { unauthorized } = require('../../utils/dictionary/statusCode');
const errorConstructor = require('../../utils/functions/errorConstructor');
const validateLogin = require('./loginValidate');

const userLogin = async (email, password) => {
  const validate = validateLogin(email, password);
  if (validate !== true) {
    throw errorConstructor(unauthorized, validate);
  }
  const user = await findUser(email, password);
  if (!user) {
    throw errorConstructor(unauthorized, 'Incorrect username or password');
  }
  return tokenGenerator({ email, password });
};

module.exports = userLogin;
