const { ObjectId } = require('mongodb');
const connect = require('../connection');
const findRecipeById = require('./findRecipeById');

const deleteRecipe = async (id) => {
  const connection = await connect();
  const selectedRecipe = await findRecipeById(id);
  const { deletedCount } = await connection.collection('recipes').deleteOne({ _id: ObjectId(id) });
  if (deletedCount === 1) {
    return selectedRecipe;
  }
  return false;
};

module.exports = deleteRecipe;
