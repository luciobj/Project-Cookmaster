const { unprocessableEntity } = require('../../utils/dictionary/statusCode');
const idValidate = require('../idValidate');
const deleteRecipe = require('../../models/recipes/deleteRecipe');

const recipeDelete = async (id) => {
  const message = 'Wrong id format';
  if (idValidate(id, unprocessableEntity, message)) {
    const result = await deleteRecipe(id);
    return result;
  }
};

module.exports = recipeDelete;
