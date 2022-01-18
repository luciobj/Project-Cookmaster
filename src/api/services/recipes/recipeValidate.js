module.exports = (name, ingredients, preparation) => {
  if (!name || !ingredients || !preparation) {
  return 'Invalid entries. Try again.';
  }
  return true;
};
