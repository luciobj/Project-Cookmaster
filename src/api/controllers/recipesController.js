const recipeCreate = require('../services/recipes/recipeCreate');
const recipesList = require('../services/recipes/recipesList');
const recipeById = require('../services/recipes/recipeById');
const { created, success } = require('../utils/dictionary/statusCode');

const recipeCreateController = async (request, resolve, next) => {
  try {
    const { name, ingredients, preparation } = request.body;
    const token = request.headers.authorization;
    const newRecipe = await recipeCreate(token, name, ingredients, preparation);
    return resolve.status(created).json(newRecipe);
  } catch (error) {
    console.log('POST CREATE RECIPE: ', error);
    return next(error);
  }
};

const recipesListController = async (request, resolve, next) => {
  try {
    const recipeList = await recipesList();
    return resolve.status(success).json(recipeList);
  } catch (error) {
    console.log('GET ALL RECIPES: ', error);
    return next(error);
  }
};

const getRecipeByIdController = async (request, resolve, next) => {
  try {
    const { id } = request.params;
    const selectedRecipe = await recipeById(id);
    return resolve.status(success).json(selectedRecipe);
  } catch (error) {
    console.log('GET RECIPE BY ID: ', error);
    return next(error);
  }
};

module.exports = {
  recipeCreateController,
  recipesListController,
  getRecipeByIdController,
};
