const jwt = require('jsonwebtoken');
const findRecipeById = require('../models/recipes/findRecipeById');
const { key } = require('../models/tokenGenerator');
const findUserByEmail = require('../models/users/findUserByEmail');
const { unauthorized } = require('../utils/dictionary/statusCode');
const errorConstructor = require('../utils/functions/errorConstructor');

const tokenValidate = async (request, _resolve, next) => {
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
    console.log('TOKEN VALIDATION: ', error);
    next(errorConstructor(unauthorized, 'jwt malformed'));
  }
};

module.exports = tokenValidate;
