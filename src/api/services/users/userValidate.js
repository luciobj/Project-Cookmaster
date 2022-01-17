const findUserByEmail = require('../../models/users/findUserByEmail');

// regex retirado do endereço: https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateUser = (name, email, password) => {
  if (!name || !email || !password || !emailRegex.test(email)) {
    return 'Invalid entries. Try again.';
  }
  return true;
};

const validateUniqueEmail = async (email) => {
  const user = await findUserByEmail(email);
  if (user) {
    return 'Email already registered';
  }
  return true;
};

module.exports = {
  validateUser,
  validateUniqueEmail,
};
