const jwt = require('jsonwebtoken');

const key = 'cookmastertoken';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const tokenGenerator = (user) => {
  const token = jwt.sign({ data: user }, key, jwtConfig);
  
  return token;
};

module.exports = {
  key,
  tokenGenerator,
};