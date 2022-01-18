const connect = require('../connection');

const findUserByEmailandPassword = async (email, password) => {
  const connection = await connect();
  const user = await connection.collection('users').findOne({ email, password });
  return user;
};

module.exports = findUserByEmailandPassword;
