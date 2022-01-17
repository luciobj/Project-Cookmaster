const { internalError } = require('../utils/dictionary/statusCode');

const errorMiddleware = (error, _request, resolve, _next) => {
  console.log(error);
  if (error.status) {
    const { status, message } = error;
    return resolve.status(status).json({ message });
  }
  return resolve.status(internalError).json({ message: 'Internal Server Error' });
};

module.exports = errorMiddleware;
