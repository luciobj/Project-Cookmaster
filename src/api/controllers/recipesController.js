const recipeCreate = require('../services/recipes/recipeCreate');
const recipesList = require('../services/recipes/recipesList');
const recipeById = require('../services/recipes/recipeById');
const recipeUpdate = require('../services/recipes/recipeUpdate');
const recipeDelete = require('../services/recipes/recipeDelete');
const recipeImage = require('../services/recipes/recipeImage');
const { created, success, noContent } = require('../utils/dictionary/statusCode');

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

const recipesListController = async (_request, resolve, next) => {
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

const updateRecipeController = async (request, resolve, next) => {
  try {
    const { name, ingredients, preparation } = request.body;
    const { id } = request.params;
    const newRecipe = await recipeUpdate(id, name, ingredients, preparation);
    return resolve.status(success).json(newRecipe);
  } catch (error) {
    console.log('PUT UPDATE RECIPE: ', error);
    return next(error);
  }
};

const recipeDeleteController = async (request, resolve, next) => {
  try {
    const { id } = request.params;
    await recipeDelete(id);
    return resolve.status(noContent).json();
  } catch (error) {
    console.log('DELETE RECIPE: ', error);
    return next(error);
  }
};

const imageAddController = async (request, resolve, next) => {
  try {
    const { id } = request.params;
    const { file } = request;
    const imagePath = `localhost:3000/${file.path}`;
    const newRecipe = await recipeImage(id, imagePath);
    return resolve.status(success).json(newRecipe);
  } catch (error) {
    console.log('POST RECIPE IMAGE: ', error);
    return next(error);
  }
};

module.exports = {
  recipeCreateController,
  recipesListController,
  getRecipeByIdController,
  updateRecipeController,
  recipeDeleteController,
  imageAddController,
};
