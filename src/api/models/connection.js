const mongodb = require('mongodb').MongoClient;
require('dotenv').config();

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/Cookmaster`;
const DB_NAME = 'Cookmaster';

module.exports = () => mongodb.connect(MONGO_DB_URL, OPTIONS)
  .then((connection) => connection.db(DB_NAME))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
