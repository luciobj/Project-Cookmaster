const userCreator = require('../services/users/userCreate');
const userLogin = require('../services/users/userLogin');
const { success, created } = require('../utils/dictionary/statusCode');

const userCreateController = async (request, resolve, next) => {
  try {
    const { name, email, password, role = 'user' } = request.body;
    const newuser = await userCreator(name, email, password, role);
    return resolve.status(created).json(newuser);
  } catch (error) {
    console.log('POST CREATE USER: ', error);
    return next(error);
  }
};

const userLoginController = async (request, resolve, next) => {
  try {
    const { email, password } = request.body;
    const token = await userLogin(email, password);
    return resolve.status(success).json(token);
  } catch (error) {
    console.log('LOGIN USER: ', error);
    return next(error);
  }
};

module.exports = {
  userCreateController,
  userLoginController,
};