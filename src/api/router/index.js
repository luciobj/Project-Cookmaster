const express = require('express');
const {
  userCreateController,
  userLoginController,
} = require('../controllers/userControllers');
const tokenValidate = require('../middlewares/tokenValidate');
const userValidate = require('../middlewares/userValidate');
const {
  recipeCreateController,
  recipesListController,
  getRecipeByIdController,
  updateRecipeController,
  recipeDeleteController,
  imageAddController,
} = require('../controllers/recipesController');
const upload = require('../middlewares/multerMiddleware');

const router = express.Router();

router.post('/users', userCreateController);
router.post('/login', userLoginController);
router.post('/recipes', tokenValidate, recipeCreateController);
router.get('/recipes', recipesListController);
router.get('/recipes/:id', getRecipeByIdController);
router.put('/recipes/:id', tokenValidate, userValidate, updateRecipeController);
router.delete('/recipes/:id', tokenValidate, userValidate, recipeDeleteController);
router.put('/recipes/:id/image/', tokenValidate, userValidate,
  upload.single('image'), imageAddController);

module.exports = router;
