const { ObjectId } = require('mongodb');
const connect = require('../connection');

const findRecipeById = async (id) => {
  const connection = await connect();
  const recipe = await connection.collection('recipes').findOne({ _id: ObjectId(id) });
  return recipe;
};

module.exports = findRecipeById;
