const errorConstructor = (status, message) => {
  const errorObj = {
    status,
    message,
  };
  return errorObj;
};

module.exports = errorConstructor;
