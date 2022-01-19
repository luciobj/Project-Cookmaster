const idValidate = require('../idValidate');
const { unprocessableEntity } = require('../../utils/dictionary/statusCode');
const errorConstructor = require('../../utils/functions/errorConstructor');
const insertImage = require('../../models/recipes/insertImage');
const findRecipeById = require('../../models/recipes/findRecipeById');

const recipeImage = async (id, imagePath) => {
  const message = 'Wrong id format';
  if (idValidate(id, unprocessableEntity, message)) {
  const result = await insertImage(id, imagePath);
    if (!result) {
      throw errorConstructor(unprocessableEntity, message);
    }
    const newRecipe = await findRecipeById(id);
    return newRecipe;
  }
};

module.exports = recipeImage;
