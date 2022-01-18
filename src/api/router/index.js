const express = require('express');
const {
  userCreateController,
  userLoginController,
} = require('../controllers/userControllers');
const tokenValidate = require('../middlewares/tokenValidate');
const {
  recipeCreateController,
  recipesListController,
  getRecipeByIdController,
} = require('../controllers/recipesController');

const router = express.Router();

router.post('/users', userCreateController);
router.post('/login', userLoginController);
router.post('/recipes', tokenValidate, recipeCreateController);
router.get('/recipes', recipesListController);
router.get('/recipes/:id', getRecipeByIdController);

module.exports = router;
