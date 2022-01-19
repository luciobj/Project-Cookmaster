const { ObjectId } = require('mongodb');
const connect = require('../connection');

const insertImage = async (id, imagePath) => {
  const connection = await connect();
  const { modifiedCount } = await connection.collection('recipes')
    .updateOne({ _id: ObjectId(id) }, { $set: { image: imagePath } });
  if (!modifiedCount || modifiedCount === 0) {
    return false;
  }
  return true;
};

module.exports = insertImage;
