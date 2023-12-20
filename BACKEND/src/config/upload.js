const multer = require('multer')
// const crypto = require('crypto')
const path = require('path')
const { v4: uuid } = require('uuid')

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp')

module.exports = {
  directory: tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(_, file, callback) {
      // const hashCode = crypto.randomBytes(6).toString('hex')
      const hashCode = uuid()
      const fileName = `${hashCode}-${file.originalname}`

      return callback(null, fileName)
    },
  }),
}