const connect = require('../connection');

const createUser = async (name, email, password, role) => {
  const connection = await connect();
  const { insertedId } = await connection
    .collection('users').insertOne({ name, email, password, role });
  return { _id: insertedId };
};

module.exports = createUser;
