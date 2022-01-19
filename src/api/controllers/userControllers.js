const userCreate = require('../services/users/userCreate');
const userLogin = require('../services/users/userLogin');
const { success, created } = require('../utils/dictionary/statusCode');

const userCreateController = async (request, resolve, next) => {
  try {
    const { name, email, password, role = 'user' } = request.body;
    const newUser = await userCreate(name, email, password, role);
    return resolve.status(created).json(newUser);
  } catch (error) {
    console.log('POST CREATE USER: ', error);
    return next(error);
  }
};

const userLoginController = async (request, resolve, next) => {
  try {
    const { email, password } = request.body;
    const token = await userLogin(email, password);
    request.headers.authorization = { token };
    return resolve.status(success).json({ token });
  } catch (error) {
    console.log('LOGIN USER: ', error);
    return next(error);
  }
};

const adminCreateController = async (request, resolve, next) => {
  try {
    const { name, email, password, role = 'admin' } = request.body;
    const newAdmin = await userCreate(name, email, password, role);
    return resolve.status(created).json(newAdmin);
  } catch (error) {
    console.log('POST CREATE ADMIN: ', error);
    return next(error);
  }
};

module.exports = {
  userCreateController,
  userLoginController,
  adminCreateController,
};