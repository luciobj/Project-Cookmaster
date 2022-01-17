const connect = require('../connection');

const findUserByEmail = async (email) => {
  const connection = await connect();
  const user = await connection.collection('users').findOne({ email });
  if (!user) {
    return false;
  }
  return user;
};

module.exports = findUserByEmail;
