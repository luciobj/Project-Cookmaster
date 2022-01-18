const getAllRecipes = require('../../models/recipes/findAllRecipes');
const { badRequest } = require('../../utils/dictionary/statusCode');
const errorConstructor = require('../../utils/functions/errorConstructor');

const recipesList = async () => {
  const dbRecipesList = await getAllRecipes();
  if (!dbRecipesList) {
    throw errorConstructor(badRequest, 'No recipes listed');
  }
  return dbRecipesList;
};

module.exports = recipesList;
