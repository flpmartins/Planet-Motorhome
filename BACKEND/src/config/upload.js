const path = require('path');
const crypto = require('crypto');
const multer = require('multer');

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

module.exports = {
  directory: tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(_, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex');

      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
