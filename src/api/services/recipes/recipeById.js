const findRecipeById = require('../../models/recipes/findRecipeById');
const idValidate = require('../idValidate');
const { notFound, unprocessableEntity } = require('../../utils/dictionary/statusCode');
const errorConstructor = require('../../utils/functions/errorConstructor');

const recipeById = async (id) => {
    const idMessage = 'Wrong id format';
    const notFoundMessage = 'recipe not found';
    if (idValidate(id, unprocessableEntity, idMessage)) {
    const result = await findRecipeById(id);
    if (result === null) {
      throw errorConstructor(notFound, notFoundMessage);
    }
    return result;
  }
};

module.exports = recipeById;
