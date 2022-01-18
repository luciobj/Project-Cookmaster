const findRecipeById = require('../../models/recipes/findRecipeById');
const idValidate = require('../idValidate');
const { notFound } = require('../../utils/dictionary/statusCode');
const errorConstructor = require('../../utils/functions/errorConstructor');

const recipeById = async (id) => {
  const notFoundMessage = 'recipe not found';
  if (idValidate(id, notFound, notFoundMessage)) {
    const result = await findRecipeById(id);
    if (result === null) {
      throw errorConstructor(notFound, notFoundMessage);
    }
    return result;
  }
};

module.exports = recipeById;
