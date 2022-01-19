const multer = require('multer');

const storage = multer.diskStorage({
  destination: (_request, _file, callback) =>
    callback(null, 'src/uploads'),
  filename: (request, _file, callback) => 
    callback(null, `${request.params.id}.jpeg`),
});

const upload = multer({ storage });

module.exports = upload;
