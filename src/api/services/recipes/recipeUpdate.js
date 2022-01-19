const recipeValidate = require('./recipeValidate');
const idValidate = require('../idValidate');
const { unprocessableEntity } = require('../../utils/dictionary/statusCode');
const errorConstructor = require('../../utils/functions/errorConstructor');
const updateRecipe = require('../../models/recipes/updateRecipe');
const findRecipeById = require('../../models/recipes/findRecipeById');

const productUpdate = async (id, name, ingredients, preparation) => {
  const validation = recipeValidate(name, ingredients, preparation);
  const message = 'Wrong id format';
  if (idValidate(id, unprocessableEntity, message) && validation === true) {
    const result = await updateRecipe(id, name, ingredients, preparation);
    if (!result) {
      throw errorConstructor(unprocessableEntity, message);
    }
    const newRecipe = await findRecipeById(id);
    return newRecipe;
  }
};

module.exports = productUpdate;
