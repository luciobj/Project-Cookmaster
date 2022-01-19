const jwt = require('jsonwebtoken');
const findRecipeById = require('../models/recipes/findRecipeById');
const { key } = require('../models/tokenGenerator');
const findUserByEmail = require('../models/users/findUserByEmail');
const { unauthorized } = require('../utils/dictionary/statusCode');
const errorConstructor = require('../utils/functions/errorConstructor');

const userValidate = async (request, _resolve, next) => {
  const token = request.headers.authorization;
  const { id } = request.params;
  try {
    const { data } = jwt.verify(token, key);
    const { email } = data;
    const { _id: userFoundId, role } = await findUserByEmail(email);
    const recipe = await findRecipeById(id);
    if (userFoundId === recipe.userId || role === 'admin') {
      next();
    }
    next(errorConstructor(unauthorized, 'not recipe creator or admin'));
  } catch (error) {
    console.log('USER VALIDATION: ', error);
    next(errorConstructor(unauthorized, 'jwt malformed'));
  }
};

module.exports = userValidate;
