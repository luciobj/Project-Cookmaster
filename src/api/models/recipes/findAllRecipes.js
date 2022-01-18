const connect = require('../connection');

const getAllRecipes = async () => {
  const connection = await connect();
  const list = await connection.collection('recipes').find().toArray();
  if (!list) {
    return false;
  }
  return list;
};

module.exports = getAllRecipes;
