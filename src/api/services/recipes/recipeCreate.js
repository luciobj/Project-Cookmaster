const jwt = require('jsonwebtoken');
const { key } = require('../../models/tokenGenerator');
const createRecipe = require('../../models/recipes/createRecipe');
const findUserByEmail = require('../../models/users/findUserByEmail');
const { badRequest } = require('../../utils/dictionary/statusCode');
const errorConstructor = require('../../utils/functions/errorConstructor');
const validateRecipe = require('./recipeValidate');

const recipeCreate = async (token, name, ingredients, preparation) => {
  const recipeValidation = validateRecipe(name, ingredients, preparation);
  if (recipeValidation !== true) {
    throw errorConstructor(badRequest, recipeValidation);
  }
  const { data: { email } } = jwt.verify(token, key);
  const { _id: userId } = await findUserByEmail(email);
  const { _id } = await createRecipe(userId, name, ingredients, preparation);
  return { recipe: { _id, userId, name, ingredients, preparation } };
};

module.exports = recipeCreate;
