const { ObjectId } = require('mongodb');
const connect = require('../connection');

const updateRecipe = async (id, name, ingredients, preparation) => {
  const connection = await connect();
  const { modifiedCount } = await connection.collection('recipes')
    .updateOne({ _id: ObjectId(id) }, { $set: { name, ingredients, preparation } });
  if (!modifiedCount || modifiedCount === 0) {
    return false;
  }
  return true;
};

module.exports = updateRecipe;
