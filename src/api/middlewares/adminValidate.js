const jwt = require('jsonwebtoken');
const { key } = require('../models/tokenGenerator');
const findUserByEmail = require('../models/users/findUserByEmail');
const { unauthorized, forbidden } = require('../utils/dictionary/statusCode');
const errorConstructor = require('../utils/functions/errorConstructor');

const adminValidate = async (request, _resolve, next) => {
  const token = request.headers.authorization;
  try {
    const { data } = jwt.verify(token, key);
    const { email } = data;
    const { role } = await findUserByEmail(email);
    if (role === 'admin') {
      return next();
    }
    next(errorConstructor(forbidden, 'Only admins can register new admins'));
  } catch (error) {
    console.log('ADMIN VALIDATION: ', error);
    next(errorConstructor(unauthorized, 'jwt malformed'));
  }
};

module.exports = adminValidate;
