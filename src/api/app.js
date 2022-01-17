const express = require('express');
const router = require('./router');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
app.use(express.json());

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (_request, response) => {
  response.send();
});

app.use(router);
app.use(errorMiddleware);
// Não remover esse end-point, ele é necessário para o avaliad

module.exports = app;
