const jwt = require('jsonwebtoken');
const { key } = require('../models/tokenGenerator');
const findUserByEmail = require('../models/users/findUserByEmail');
const { unauthorized, badRequest } = require('../utils/dictionary/statusCode');
const errorConstructor = require('../utils/functions/errorConstructor');

const tokenValidate = async (request, _resolve, next) => {
  const token = request.headers.authorization;
  console.log(token);
  try {
    const { data } = jwt.verify(token, key);
    const { email } = data;
    const user = await findUserByEmail(email);
    if (!user) {
      console.log('TOKEN VALIDATION: user not found');
      throw errorConstructor(badRequest, 'jwt malformed');
    }
    next();
  } catch (error) {
    console.log('TOKEN VALIDATION: ', error);
    next(errorConstructor(unauthorized, 'jwt malformed'));
  }
};

module.exports = tokenValidate;
