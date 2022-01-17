const validateLogin = (email, password) => {
  if (!email || !password) {
    return 'All fields must be filled';
  }
  return true;
};

module.exports = validateLogin;
