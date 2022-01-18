const connect = require('../connection');

const createUser = async (userId, name, ingredients, preparation) => {
  const connection = await connect();
  const { insertedId } = await connection
    .collection('recipes').insertOne({ userId, name, ingredients, preparation });
  return { _id: insertedId };
};

module.exports = createUser;
